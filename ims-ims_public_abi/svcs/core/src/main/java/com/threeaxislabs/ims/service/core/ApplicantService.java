package com.threeaxislabs.ims.service.core;

import com.threeaxislabs.ims.domain.Applicant;
import com.threeaxislabs.ims.domain.ApplicantQuery;
import com.threeaxislabs.infinistack.persistence.Store;
import com.threeaxislabs.infinistack.util.IdGenerator;
import org.springframework.stereotype.Service;
@Service
public class ApplicantService extends EntityService<Applicant, ApplicantQuery> {

    public ApplicantService(Store<Applicant, ApplicantQuery> store,IdGenerator idGenerator) {
        super(store,idGenerator);

    }
}
