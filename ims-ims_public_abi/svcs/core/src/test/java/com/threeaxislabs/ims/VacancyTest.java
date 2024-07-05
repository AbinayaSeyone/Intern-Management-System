package com.threeaxislabs.ims;

import com.threeaxislabs.ims.domain.Intern;
import com.threeaxislabs.ims.domain.InternQuery;
import com.threeaxislabs.ims.domain.Vacancy;
import com.threeaxislabs.ims.domain.VacancyQuery;
import com.threeaxislabs.ims.domain.entity.Company;
import com.threeaxislabs.ims.domain.query.CompanyQuery;
import com.threeaxislabs.ims.repo.RepoModule;
import com.threeaxislabs.ims.service.gql.schema.SchemaModule;
import com.threeaxislabs.infinistack.persistence.Session;
import com.threeaxislabs.infinistack.persistence.SessionFactory;
import com.threeaxislabs.infinistack.persistence.Store;
import com.threeaxislabs.infinistack.util.IdGenerator;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static org.junit.Assert.*;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = SchemaModule.class)
public class VacancyTest {

    @Autowired
    private Store<Vacancy, VacancyQuery> vacancyStore;

    @Autowired
    private Store<Company, CompanyQuery> companyStore;

    @Autowired
    private SessionFactory sessionFactory;

    @Autowired
    private IdGenerator idGenerator;

    @Test
    @Ignore
    public void verify() throws Exception {

        try (Session session = sessionFactory.create()) {
            session.begin();

            Company company1 = new Company();
            company1.setId(idGenerator.generateId());
            company1.setName("3axislabs");
            company1.setAddress("Jaffna, Sri Lanka");

            Company company2 = new Company();
            company2.setId(idGenerator.generateId());
            company2.setName("hSenid mobile");
            company2.setAddress("Colombo, Sri Lanka");

            companyStore.create(session, company1);
            companyStore.create(session, company2);

            Vacancy vacancy1 = new Vacancy();
            Vacancy vacancy2 = new Vacancy();
            Vacancy vacancy3 = new Vacancy();

            vacancy1.setId(idGenerator.generateId());
            vacancy2.setId(idGenerator.generateId());
            vacancy3.setId(idGenerator.generateId());

            vacancy1.setName("Software Engineer");
            vacancy2.setName("UI/UX Engineer");
            vacancy3.setName("Project Manager");

            vacancy1.setWorkPlace(company1.getId());
            vacancy2.setWorkPlace(company1.getId());
            vacancy3.setWorkPlace(company2.getId());

            vacancyStore.create(session, vacancy1);
            vacancyStore.create(session, vacancy2);
            vacancyStore.create(session, vacancy3);

            session.commit();
        }

    }

}