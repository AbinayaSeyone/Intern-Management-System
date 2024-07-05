package com.threeaxislabs.ims.service.core;

import com.threeaxislabs.infinistack.util.IdGenerator;
import com.threeaxislabs.ims.domain.entity.Company;
import com.threeaxislabs.ims.domain.query.CompanyQuery;
import com.threeaxislabs.infinistack.persistence.Store;
import org.springframework.stereotype.Service;

@Service
public class CompanyService extends EntityService<Company, CompanyQuery> {

    public CompanyService(Store<Company, CompanyQuery> store,IdGenerator idGenerator) {
        super(store,idGenerator);
    }
}

