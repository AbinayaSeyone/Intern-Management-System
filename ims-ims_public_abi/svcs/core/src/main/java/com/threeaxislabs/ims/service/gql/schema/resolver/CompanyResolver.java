package com.threeaxislabs.ims.service.gql.schema.resolver;

import com.threeaxislabs.ims.domain.entity.Company;
import com.threeaxislabs.ims.domain.query.CompanyQuery;
import com.threeaxislabs.ims.service.core.CompanyService;
import com.threeaxislabs.infinistack.service.graphql.GraphQLResolver;
import org.springframework.stereotype.Service;

@Service
public class CompanyResolver  extends EntityResolver<Company, CompanyQuery>{

    public CompanyResolver(CompanyService service) {
        super(service);
    }

    @Override
    public Class<? extends GraphQLResolver> type() {
        return CompanyResolver.class;
    }


}


