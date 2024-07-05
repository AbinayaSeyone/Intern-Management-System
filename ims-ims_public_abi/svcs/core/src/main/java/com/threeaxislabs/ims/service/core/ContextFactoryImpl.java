package com.threeaxislabs.ims.service.core;

import com.threeaxislabs.infinistack.persistence.Session;
import com.threeaxislabs.infinistack.service.Context;
import com.threeaxislabs.infinistack.service.ContextFactory;
import com.threeaxislabs.infinistack.service.EndpointType;
import org.springframework.stereotype.Component;

import static java.util.Collections.emptySet;

@Component
public class ContextFactoryImpl implements ContextFactory {


    public ContextFactoryImpl() {
    }

    @Override
    public Context build(String cid, String auth, EndpointType endpoint, Session session) {
        //dummy method to convert auth to a user;
        return new ContextImpl(
                cid,
                "user1",
                emptySet(),
                endpoint,
                session
        );
    }
}
