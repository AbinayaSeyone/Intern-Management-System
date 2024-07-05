package com.threeaxislabs.ims.service.gql;

import com.threeaxislabs.ims.service.ServiceModule;
import com.threeaxislabs.infinistack.persistence.store.ObjectMappers;
import com.threeaxislabs.infinistack.service.graphql.GraphQLRoleNameGenerator;
import org.jooq.lambda.Seq;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Set;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = ServiceModule.class)
public class GraphQLRolesTest {

    @Test
    @Ignore
    public void verify() throws Exception {
        GraphQLRoleNameGenerator roleGenerator = new GraphQLRoleNameGenerator(GraphQLRoles.PUBLIC_ACCESS);

        Set<String> roles = roleGenerator.generateAll("com.threeaxislabs.bank.service.gql");

        System.out.println("roles = " + ObjectMappers.writeObject(Seq.seq(roles).sorted()));

        //RBAC
    }

}