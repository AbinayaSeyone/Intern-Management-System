package com.threeaxislabs.ims.service.core;

import com.threeaxislabs.ims.domain.HiringManager;
import com.threeaxislabs.ims.domain.HiringManagerQuery;
import com.threeaxislabs.infinistack.persistence.Store;
import org.springframework.stereotype.Service;
import com.threeaxislabs.infinistack.util.IdGenerator;

@Service
public class HiringManagerService extends EntityService<HiringManager, HiringManagerQuery> {

    public HiringManagerService(Store<HiringManager, HiringManagerQuery> store,IdGenerator idGenerator) {
        super(store,idGenerator);
    }
}
