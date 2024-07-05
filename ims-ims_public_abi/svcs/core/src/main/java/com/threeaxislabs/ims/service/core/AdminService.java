package com.threeaxislabs.ims.service.core;

import com.threeaxislabs.ims.domain.Admin;
import com.threeaxislabs.ims.domain.AdminQuery;
import com.threeaxislabs.infinistack.persistence.Store;
import com.threeaxislabs.infinistack.util.IdGenerator;
import org.springframework.stereotype.Service;

@Service
public class AdminService extends EntityService<Admin, AdminQuery> {

    public AdminService(Store<Admin, AdminQuery> store,IdGenerator idGenerator) {
        super(store,idGenerator);

    }
}
