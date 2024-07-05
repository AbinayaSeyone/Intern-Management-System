package com.threeaxislabs.ims.service.core;


import com.threeaxislabs.ims.domain.InternPoolOpening;
import com.threeaxislabs.ims.domain.InternPoolOpeningQuery;
import com.threeaxislabs.infinistack.persistence.Store;
import com.threeaxislabs.infinistack.util.IdGenerator;
import org.springframework.stereotype.Service;

@Service
public class InternPoolOpeningService extends EntityService<InternPoolOpening, InternPoolOpeningQuery> {

    public InternPoolOpeningService(Store<InternPoolOpening, InternPoolOpeningQuery> store, IdGenerator idGenerator) {
        super(store,idGenerator);
    }
}
