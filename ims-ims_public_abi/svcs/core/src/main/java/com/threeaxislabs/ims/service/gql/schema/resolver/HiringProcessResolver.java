package com.threeaxislabs.ims.service.gql.schema.resolver;

import com.threeaxislabs.ims.domain.Admin;
import com.threeaxislabs.ims.domain.AdminQuery;
import com.threeaxislabs.ims.domain.HiringProcess;
import com.threeaxislabs.ims.domain.HiringProcessQuery;
import com.threeaxislabs.ims.service.core.AdminService;
import com.threeaxislabs.ims.service.core.HiringProcessService;
import com.threeaxislabs.infinistack.service.graphql.GraphQLResolver;
import org.springframework.stereotype.Service;

@Service
public class HiringProcessResolver  extends EntityResolver<HiringProcess, HiringProcessQuery>{

    public HiringProcessResolver(HiringProcessService service) {
        super(service);
    }

    @Override
    public Class<? extends GraphQLResolver> type() {
        return HiringProcessResolver.class;
    }


}
