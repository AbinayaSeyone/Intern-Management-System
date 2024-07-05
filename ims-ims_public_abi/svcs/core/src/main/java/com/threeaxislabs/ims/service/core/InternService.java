package com.threeaxislabs.ims.service.core;

import com.threeaxislabs.ims.domain.Intern;
import com.threeaxislabs.ims.domain.InternQuery;
import com.threeaxislabs.infinistack.persistence.Store;
import com.threeaxislabs.infinistack.util.IdGenerator;
import org.springframework.stereotype.Service;

@Service
public class InternService extends EntityService<Intern, InternQuery> {
    public InternService(Store<Intern, InternQuery> store, IdGenerator idGenerator) {
        super(store,idGenerator);
    }
}
