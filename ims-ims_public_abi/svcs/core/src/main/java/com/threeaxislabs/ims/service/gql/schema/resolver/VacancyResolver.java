package com.threeaxislabs.ims.service.gql.schema.resolver;

import com.threeaxislabs.ims.domain.Admin;
import com.threeaxislabs.ims.domain.AdminQuery;
import com.threeaxislabs.ims.domain.Vacancy;
import com.threeaxislabs.ims.domain.VacancyQuery;
import com.threeaxislabs.ims.service.core.AdminService;
import com.threeaxislabs.ims.service.core.VacancyService;
import com.threeaxislabs.infinistack.service.graphql.GraphQLResolver;
import org.springframework.stereotype.Service;

@Service
public class VacancyResolver  extends EntityResolver<Vacancy, VacancyQuery>{

    public VacancyResolver(VacancyService service) {
        super(service);
    }

    @Override
    public Class<? extends GraphQLResolver> type() {
        return VacancyResolver.class;
    }


}

