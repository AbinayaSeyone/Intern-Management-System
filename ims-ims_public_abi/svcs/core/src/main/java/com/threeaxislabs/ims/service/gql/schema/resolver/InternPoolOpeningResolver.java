package com.threeaxislabs.ims.service.gql.schema.resolver;

import com.threeaxislabs.ims.domain.Admin;
import com.threeaxislabs.ims.domain.AdminQuery;
import com.threeaxislabs.ims.domain.InternPoolOpening;
import com.threeaxislabs.ims.domain.InternPoolOpeningQuery;
import com.threeaxislabs.ims.service.core.AdminService;
import com.threeaxislabs.ims.service.core.InternPoolOpeningService;
import com.threeaxislabs.infinistack.service.graphql.GraphQLResolver;
import org.springframework.stereotype.Service;

@Service
public class InternPoolOpeningResolver  extends EntityResolver<InternPoolOpening, InternPoolOpeningQuery>{

    public InternPoolOpeningResolver(InternPoolOpeningService service) {
        super(service);
    }

    @Override
    public Class<? extends GraphQLResolver> type() {
        return InternPoolOpeningResolver.class;
    }


}
