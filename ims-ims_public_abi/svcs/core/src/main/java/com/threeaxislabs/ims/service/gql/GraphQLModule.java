package com.threeaxislabs.ims.service.gql;

import com.threeaxislabs.ims.service.gql.handler.HandlerModule;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import(HandlerModule.class)
public class GraphQLModule {

}
