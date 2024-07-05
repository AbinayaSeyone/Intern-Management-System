package com.threeaxislabs.ims;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.threeaxislabs.ims.service.ServiceModule;
import com.threeaxislabs.ims.service.gql.handler.GraphQLWsHandler;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import org.springframework.web.socket.server.support.DefaultHandshakeHandler;

import java.util.List;

@Configuration
@Import(ServiceModule.class)
public class CoreModule implements WebMvcConfigurer, WebSocketConfigurer {

    private final ObjectMapper mapper;
    private final GraphQLWsHandler wsHandler;

    public CoreModule(ObjectMapper mapper, GraphQLWsHandler wsHandler) {
        this.mapper = mapper;
        this.wsHandler = wsHandler;
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/ims/**")
                .allowedOrigins("*")
                .allowedHeaders("*")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .exposedHeaders("Content-Type", "Cache-Control", "Last-Modified");
    }

    @Override
    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
        converters.add(new MappingJackson2HttpMessageConverter(mapper));
    }

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        DefaultHandshakeHandler handshakeHandler = new DefaultHandshakeHandler();
        handshakeHandler.setSupportedProtocols("graphql-ws");

        registry.addHandler(wsHandler, "/ims/graphql/web-socket/v1.0.0")
                .setAllowedOrigins("*")
                .setHandshakeHandler(handshakeHandler);

    }
}
