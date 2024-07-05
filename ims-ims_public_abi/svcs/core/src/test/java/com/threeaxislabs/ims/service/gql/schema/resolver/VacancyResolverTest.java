package com.threeaxislabs.ims.service.gql.schema.resolver;

import com.threeaxislabs.ims.domain.Vacancy;
import com.threeaxislabs.ims.domain.VacancyQuery;
import com.threeaxislabs.ims.service.ServiceModule;
import com.threeaxislabs.infinistack.persistence.SessionFactory;
import com.threeaxislabs.infinistack.service.Context;
import com.threeaxislabs.infinistack.service.ContextFactory;
import com.threeaxislabs.infinistack.service.EndpointType;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = ServiceModule.class)
public class VacancyResolverTest {
    @Autowired
    private VacancyResolver resolver;

    @Autowired
    private ContextFactory contextFactory;

    @Autowired
    private SessionFactory sessionFactory;

    @Test
    public void verify() throws Exception {
        try (Context context = contextFactory.build("", null, EndpointType.INTERNAL, sessionFactory.create())) {
            List<Vacancy> vacancies = resolver.query(context, new VacancyQuery());
            System.out.println("vacancies = " + vacancies);
        }
    }

}