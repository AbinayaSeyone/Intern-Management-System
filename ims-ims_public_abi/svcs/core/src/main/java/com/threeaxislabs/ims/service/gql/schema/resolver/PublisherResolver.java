package com.threeaxislabs.ims.service.gql.schema.resolver;

import com.threeaxislabs.ims.domain.Publisher;
import com.threeaxislabs.ims.domain.PublisherQuery;
import com.threeaxislabs.ims.service.core.PublisherService;
import com.threeaxislabs.infinistack.service.graphql.GraphQLResolver;
import org.springframework.stereotype.Service;

@Service
public class PublisherResolver  extends EntityResolver<Publisher, PublisherQuery>{

    public PublisherResolver(PublisherService service) {
        super(service);
    }

    @Override
    public Class<? extends GraphQLResolver> type() {
        return PublisherResolver.class;
    }


}
