package com.threeaxislabs.ims;

import com.threeaxislabs.ims.service.ServiceProps;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.http.HttpMessageConvertersAutoConfiguration;
import org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.annotation.Import;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.socket.config.annotation.EnableWebSocket;

@EnableWebMvc
@EnableWebSocket
@Import(CoreModule.class)
@EnableAutoConfiguration(
        exclude = {JacksonAutoConfiguration.class, HttpMessageConvertersAutoConfiguration.class}
)
public class CoreBoot {
    private static final Logger logger = LoggerFactory.getLogger(CoreBoot.class);

    public static void main(String[] args) {
        new SpringApplicationBuilder()
                .sources(CoreBoot.class)
                .properties(ServiceProps.getInstance())
                .run(args);

        logger.debug("IMS has started successfully!");
    }
}
