package com.threeaxislabs.ims.service.gql.schema.resolver;

import com.threeaxislabs.ims.domain.Intern;
import com.threeaxislabs.ims.domain.InternQuery;
import com.threeaxislabs.ims.service.core.InternService;
import com.threeaxislabs.infinistack.service.graphql.GraphQLResolver;
import org.springframework.stereotype.Service;

@Service
public class InternResolver extends EntityResolver<Intern, InternQuery> {
    public InternResolver(InternService service) {
        super(service);
    }

    @Override
    public Class<? extends GraphQLResolver> type() {
        return InternResolver.class;
    }
}
