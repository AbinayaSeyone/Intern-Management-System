package com.threeaxislabs.ims.service.core;

import com.threeaxislabs.ims.repo.RepoModule;
import com.threeaxislabs.infinistack.util.IdGenerator;
import com.threeaxislabs.infinistack.util.SnowflakeIdGenerator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import(RepoModule.class)
@ComponentScan(basePackages = {"com.threeaxislabs.ims.service.core"})
public class CoreModule {

    @Bean
    public IdGenerator idGenerator() {
        return new SnowflakeIdGenerator(1,1);
    }
}
