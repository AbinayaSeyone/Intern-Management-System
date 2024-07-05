package com.threeaxislabs.ims;

import com.threeaxislabs.ims.domain.Intern;
import com.threeaxislabs.ims.domain.InternQuery;
import com.threeaxislabs.ims.service.gql.schema.SchemaModule;
import com.threeaxislabs.infinistack.persistence.Session;
import com.threeaxislabs.infinistack.persistence.SessionFactory;
import com.threeaxislabs.infinistack.persistence.Store;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = SchemaModule.class)
public class InternTest {
    @Autowired
    private Store<Intern, InternQuery> store;

    @Autowired
    private SessionFactory sessionFactory;

    @Test
    @Ignore
    public void verify() throws Exception {
        try (Session session = sessionFactory.create()) {
            session.begin();

            String id = String.valueOf(System.currentTimeMillis());

            Intern value = new Intern();

            value.setId(id);
            value.setName("John");

            store.create(session, value);

            session.commit();

            System.out.println("value = " + value);
        }

    }
}
