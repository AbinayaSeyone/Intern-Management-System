package com.threeaxislabs.ims.service.gql.handler;

import com.threeaxislabs.ims.service.gql.schema.SchemaModule;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.annotation.Import;

@Configuration
@EnableAspectJAutoProxy(
        proxyTargetClass = true
)
@Import(SchemaModule.class)
@ComponentScan(basePackages = {"com.threeaxislabs.ims.service.gql.handler"})
public class HandlerModule {
}
