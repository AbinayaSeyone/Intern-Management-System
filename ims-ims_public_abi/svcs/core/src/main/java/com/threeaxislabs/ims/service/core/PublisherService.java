package com.threeaxislabs.ims.service.core;

import com.threeaxislabs.ims.domain.Intern;
import com.threeaxislabs.ims.domain.InternQuery;
import com.threeaxislabs.ims.domain.Publisher;
import com.threeaxislabs.ims.domain.PublisherQuery;
import com.threeaxislabs.infinistack.persistence.Store;
import com.threeaxislabs.infinistack.util.IdGenerator;
import org.springframework.stereotype.Service;

@Service
public class PublisherService extends EntityService<Publisher, PublisherQuery> {

    public PublisherService(Store<Publisher, PublisherQuery> store, IdGenerator idGenerator ) {
        super(store,idGenerator);
    }
}
