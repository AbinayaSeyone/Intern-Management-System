package com.threeaxislabs.ims.service.gql.schema.resolver;

import com.threeaxislabs.ims.domain.Admin;
import com.threeaxislabs.ims.domain.AdminQuery;
import com.threeaxislabs.ims.service.core.AdminService;
import com.threeaxislabs.infinistack.service.graphql.GraphQLResolver;
import org.springframework.stereotype.Service;

@Service
public class AdminResolver  extends EntityResolver<Admin, AdminQuery>{

    public AdminResolver(AdminService service) {
        super(service);
    }

    @Override
    public Class<? extends GraphQLResolver> type() {
        return AdminResolver.class;
    }


}
