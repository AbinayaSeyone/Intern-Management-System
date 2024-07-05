package com.threeaxislabs.ims.service.gql.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.threeaxislabs.infinistack.persistence.SessionFactory;
import com.threeaxislabs.infinistack.service.ContextFactory;
import com.threeaxislabs.infinistack.service.graphql.GraphQLWsExecHandler;
import graphql.GraphQL;
import org.springframework.stereotype.Component;

@Component
public class GraphQLWsHandler extends GraphQLWsExecHandler {
    public GraphQLWsHandler(ContextFactory builder, SessionFactory sessionFactory, GraphQL graphQL, ObjectMapper objectMapper) {
        super(builder, sessionFactory, graphQL, objectMapper);
    }
}
