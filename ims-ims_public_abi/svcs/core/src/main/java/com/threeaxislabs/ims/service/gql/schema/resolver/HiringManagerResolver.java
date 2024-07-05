package com.threeaxislabs.ims.service.gql.schema.resolver;

import com.threeaxislabs.ims.domain.HiringManager;
import com.threeaxislabs.ims.domain.HiringManagerQuery;
import com.threeaxislabs.ims.service.core.HiringManagerService;
import com.threeaxislabs.infinistack.service.graphql.GraphQLResolver;
import org.springframework.stereotype.Service;

@Service
public class HiringManagerResolver  extends EntityResolver<HiringManager, HiringManagerQuery>{

    public HiringManagerResolver(HiringManagerService service) {
        super(service);
    }

    @Override
    public Class<? extends GraphQLResolver> type() {
        return HiringManagerResolver.class;
    }


}
