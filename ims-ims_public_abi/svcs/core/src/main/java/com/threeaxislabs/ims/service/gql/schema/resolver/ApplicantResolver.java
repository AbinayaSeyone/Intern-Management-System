package com.threeaxislabs.ims.service.gql.schema.resolver;


import com.threeaxislabs.ims.domain.Applicant;
import com.threeaxislabs.ims.domain.ApplicantQuery;
import com.threeaxislabs.ims.service.core.ApplicantService;
import com.threeaxislabs.infinistack.service.graphql.GraphQLResolver;
import org.springframework.stereotype.Service;

@Service
public class ApplicantResolver  extends EntityResolver<Applicant, ApplicantQuery>{

    public ApplicantResolver(ApplicantService service) {
        super(service);
    }

    @Override
    public Class<? extends GraphQLResolver> type() {
        return ApplicantResolver.class;
    }


}
