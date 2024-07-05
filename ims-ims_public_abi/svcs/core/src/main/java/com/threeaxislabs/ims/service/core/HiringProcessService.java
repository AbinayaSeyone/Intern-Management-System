package com.threeaxislabs.ims.service.core;


import com.threeaxislabs.infinistack.util.IdGenerator;
import com.threeaxislabs.ims.domain.HiringProcess;
import com.threeaxislabs.ims.domain.HiringProcessQuery;
import com.threeaxislabs.infinistack.persistence.Store;
import org.springframework.stereotype.Service;

@Service
public class HiringProcessService extends EntityService<HiringProcess, HiringProcessQuery> {

    public HiringProcessService(Store<HiringProcess, HiringProcessQuery> store,IdGenerator idGenerator) {
        super(store,idGenerator);
    }
}
