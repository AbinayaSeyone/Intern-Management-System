package com.threeaxislabs.ims.service.gql.schema;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.threeaxislabs.ims.service.core.CoreModule;
import com.threeaxislabs.infinistack.graphql.GraphQLSchemaGenerator;
import com.threeaxislabs.infinistack.graphql.metadata.strategy.query.AnnotatedResolverBuilder;
import com.threeaxislabs.infinistack.graphql.metadata.strategy.query.DefaultOperationBuilder;
import com.threeaxislabs.infinistack.graphql.metadata.strategy.query.DefaultOperationBuilder.TypeInference;
import com.threeaxislabs.infinistack.graphql.metadata.strategy.value.jackson.JacksonValueMapper;
import com.threeaxislabs.infinistack.graphql.metadata.strategy.value.jackson.JacksonValueMapperFactory;
import com.threeaxislabs.infinistack.service.graphql.GraphQLResolver;
import com.threeaxislabs.infinistack.service.graphql.ReflectiveOpNameGenerator;
import com.threeaxislabs.infinistack.util.IdGenerator;
import graphql.GraphQL;
import graphql.execution.AsyncExecutionStrategy;
import graphql.execution.ExecutionId;
import graphql.execution.SubscriptionExecutionStrategy;
import graphql.schema.GraphQLSchema;
import org.springframework.context.annotation.*;

import java.util.List;

@Configuration
@Import(CoreModule.class)
@EnableAspectJAutoProxy(
        proxyTargetClass = true
)
@ComponentScan(basePackages = {"com.threeaxislabs.ims.service.gql.schema"})
public class SchemaModule {

    @Bean
    public GraphQLSchema schema(ObjectMapper mapper, List<GraphQLResolver> resolvers) {

        GraphQLSchemaGenerator generator = new GraphQLSchemaGenerator()
                .withBasePackages("com.threeaxislabs.ims")
                .withOperationBuilder(new DefaultOperationBuilder(TypeInference.LIMITED))
                .withInputFieldDiscoveryStrategy(new JacksonValueMapper(mapper))
                .withResolverBuilders(new AnnotatedResolverBuilder()
                        .withOperationNameGenerator(new ReflectiveOpNameGenerator())
                );

        for (GraphQLResolver resolver : resolvers) {
            generator = generator.withOperationsFromSingleton(resolver, resolver.type());
        }

        return generator.withValueMapperFactory(
                new JacksonValueMapperFactory(mapper, "com.threeaxislabs.ims")
        ).generate();
    }


    @Bean
    public GraphQL graphQL(IdGenerator idGenerator, GraphQLSchema schema) {
        return GraphQL.newGraphQL(schema).executionIdProvider((query, operationName, context) -> ExecutionId.from(idGenerator.generateId()))
                .queryExecutionStrategy(new AsyncExecutionStrategy())
                .mutationExecutionStrategy(new AsyncExecutionStrategy())
                .subscriptionExecutionStrategy(new SubscriptionExecutionStrategy())
                .build();
    }
}
