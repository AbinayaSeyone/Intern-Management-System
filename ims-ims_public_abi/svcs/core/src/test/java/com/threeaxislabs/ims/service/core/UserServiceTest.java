package com.threeaxislabs.ims.service.core;
import com.fasterxml.jackson.core.type.TypeReference;
import com.threeaxislabs.ims.domain.entity.User;
import com.threeaxislabs.ims.domain.entity.UserGroup;
import com.threeaxislabs.ims.domain.entity.UserRole;
import com.threeaxislabs.ims.domain.type.UserStatus;
import com.threeaxislabs.ims.service.ServiceModule;
import com.threeaxislabs.ims.util.PasswordUtils;
import com.threeaxislabs.infinistack.persistence.Session;
import com.threeaxislabs.infinistack.persistence.SessionFactory;
import com.threeaxislabs.infinistack.persistence.store.ObjectMappers;
import com.threeaxislabs.infinistack.service.Context;
import com.threeaxislabs.infinistack.service.ContextFactory;
import com.threeaxislabs.infinistack.service.EndpointType;
import com.threeaxislabs.infinistack.util.IdGenerator;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static java.util.Collections.singleton;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = ServiceModule.class)
public class UserServiceTest {

    @Autowired
    private IdGenerator idGenerator;

    @Autowired
    private UserService userService;

    @Autowired
    private UserAuthService authService;

    @Autowired
    private UserRoleService userRoleService;

    @Autowired
    private UserGroupService userGroupService;

    @Autowired
    private ContextFactory contextFactory;

    @Autowired
    private SessionFactory sessionFactory;

    @Test
    @Ignore
    public void createUsers() throws Exception {

        try (Session session = sessionFactory.create()) {

            session.begin();

            Context context = contextFactory.build("1", "", EndpointType.INTERNAL, session);

            InputStream inputStream = this.getClass().getClassLoader().getResourceAsStream("user_roles.json");

            List<String> roleNames = ObjectMappers.MAPPER.readValue(inputStream, new TypeReference<List<String>>() {
            });

            List<UserRole> userRoles = new ArrayList<>();

            //create user roles

            for (String roleId : roleNames) {

                UserRole userRole = new UserRole();

                userRole.setId(roleId);

                userRoleService.create(context, userRole);

                userRoles.add(userRole);
            }

            //create user groups

            UserGroup userGroup = new UserGroup();
            userGroup.setId(idGenerator.generateId());
            userGroup.setName("ADMIN_GROUP");
            userGroup.setRoles(userRoles.stream().map(UserRole::getId).collect(Collectors.toSet()));

            userGroupService.create(context, userGroup);

            //create users

            User user = new User();

            user.setId(idGenerator.generateId());
            user.setUsername("admin");
            user.setPassword(PasswordUtils.hashPassword("test@123"));
            user.setStatus(UserStatus.ACTIVE);
            user.setCreatedTime(System.currentTimeMillis());
            user.setGroups(singleton(userGroup.getId()));

            userService.create(context, user);

            session.commit();

            String token = authService.sign(context, user);

            authService.verify(context, Optional.ofNullable(token));
        }

    }

}