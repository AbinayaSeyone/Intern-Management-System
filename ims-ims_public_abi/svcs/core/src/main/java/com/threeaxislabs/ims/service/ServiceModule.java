package com.threeaxislabs.ims.service;

import com.threeaxislabs.ims.service.gql.GraphQLModule;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import(GraphQLModule.class)
public class ServiceModule {
}
