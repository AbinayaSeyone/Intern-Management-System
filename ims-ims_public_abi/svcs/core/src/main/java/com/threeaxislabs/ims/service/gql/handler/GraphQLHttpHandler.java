package com.threeaxislabs.ims.service.gql.handler;

import com.threeaxislabs.infinistack.persistence.SessionFactory;
import com.threeaxislabs.infinistack.service.ContextFactory;
import com.threeaxislabs.infinistack.service.graphql.GraphQLHttpExecHandler;
import graphql.GraphQL;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import static com.threeaxislabs.infinistack.service.graphql.GraphQLKeyBox.AuthorizationHeaderKey;
import static com.threeaxislabs.infinistack.service.graphql.GraphQLKeyBox.CorrelationHeaderKey;

@RestController
public class GraphQLHttpHandler extends GraphQLHttpExecHandler {
    public GraphQLHttpHandler(ContextFactory contextFactory, SessionFactory sessionFactory, GraphQL graphQL) {
        super(contextFactory, sessionFactory, graphQL);
    }

    @Override
    @PostMapping(
            value = "/ims/graphql/http/v1.0.0",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    @ResponseBody
    public Object execute(@RequestHeader(value = AuthorizationHeaderKey, defaultValue = "") String token,
                          @RequestHeader(value = CorrelationHeaderKey, defaultValue = "") String cid,
                          @RequestBody Map<String, Object> request) {

        return super.execute(token, cid, request);
    }
}
