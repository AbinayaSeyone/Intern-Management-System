package com.threeaxislabs.ims.service.gql.handler;

import com.threeaxislabs.infinistack.service.Context;
import com.threeaxislabs.infinistack.service.graphql.GraphQLValidationExecAdvice;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.jooq.lambda.Seq;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.Set;

@Aspect
@Component
public class GraphQLValidationAdvice extends GraphQLValidationExecAdvice {

    public GraphQLValidationAdvice() {
        super(Seq.of("queryTask").toSet());
    }

    @Override
    public void enrich(Context context) {
    }

    @Override
    public Set<String> roles(Set<String> groups) {
        return Collections.emptySet();
    }

    @Around("(@annotation(com.threeaxislabs.infinistack.graphql.annotation.GraphQLQuery) || @annotation(com.threeaxislabs.infinistack.graphql.annotation.GraphQLMutation) || @annotation(com.threeaxislabs.infinistack.graphql.annotation.GraphQLSubscription)) && execution(* com.threeaxislabs.infinistack.test.service.gql.schema.resolver..*(..))")
    public Object validate(ProceedingJoinPoint point) throws Throwable {
        return super.validate(point);
    }
}
