
package com.threeaxislabs.ims.service.gql.schema.resolver;


import com.threeaxislabs.ims.domain.entity.User;
import com.threeaxislabs.ims.domain.query.UserQuery;
import com.threeaxislabs.ims.service.core.UserAuthService;
import com.threeaxislabs.ims.service.core.UserService;
import com.threeaxislabs.infinistack.service.graphql.GraphQLResolver;
import com.threeaxislabs.infinistack.graphql.annotation.GraphQLArgument;
import com.threeaxislabs.infinistack.graphql.annotation.GraphQLMutation;
import com.threeaxislabs.infinistack.graphql.annotation.GraphQLQuery;
import com.threeaxislabs.infinistack.graphql.annotation.GraphQLRootContext;
import com.threeaxislabs.infinistack.service.Context;
import com.threeaxislabs.infinistack.service.ServiceException;
import com.threeaxislabs.ims.domain.LoginResponse;
import com.threeaxislabs.infinistack.persistence.TxExecutor;
import com.threeaxislabs.ims.service.gql.ServiceStatusCodes;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserResolver  extends EntityResolver<User, UserQuery>{
    private final UserService service;
    private final UserAuthService authService;

    public UserResolver(UserService service,UserAuthService authService) {
        super(service);
        this.service = service;
        this.authService = authService;
    }


    @GraphQLMutation
    public LoginResponse login(@GraphQLRootContext Context ctx, @GraphQLArgument(name = "request") User request) {
        String token = TxExecutor.execute(ctx, () -> service.login(ctx, request)).value();
        Optional<User> user = service.doFindUserByUsername(ctx.session(), request.getUsername()); // Modify this line based on your implementation
        if (user.isPresent()) {
            return new LoginResponse(token, user.get());
        } else {
            throw new ServiceException(ServiceStatusCodes.SC_ACCOUNT_DOES_NOT_EXIST);
        }
    }


    @GraphQLMutation
    public User registerAsCompany(@GraphQLRootContext Context ctx, @GraphQLArgument(name = "request") User request) {
        // Add the necessary logic to register the user as a company
        // For example, you can set the user's role to "company" and save it to the database
        request.setUserRole("COMPANY_USER");
        return TxExecutor.execute(ctx, () -> service.registerUser(ctx, request)).value();
    }

    @GraphQLMutation
    public User registerAsIntern(@GraphQLRootContext Context ctx, @GraphQLArgument(name = "request") User request) {
        // Add the necessary logic to register the user as an intern
        // For example, you can set the user's role to "intern" and save it to the database
        request.setUserRole("INTERN_USER");
        return TxExecutor.execute(ctx, () -> service.registerUser(ctx, request)).value();
    }

    @GraphQLMutation
    public User registerAsHiringManager(@GraphQLRootContext Context ctx, @GraphQLArgument(name = "request") User request) {
        // Add the necessary logic to register the user as an intern
        // For example, you can set the user's role to "intern" and save it to the database
        request.setUserRole("HiringManager_USER");
        return TxExecutor.execute(ctx, () -> service.registerUser(ctx, request)).value();
    }


    @GraphQLMutation
    public Boolean revokeToken(@GraphQLArgument(name = "token") String token) {
        authService.revokeToken(token);
        return true;
    }


    @GraphQLQuery
    public User current(@GraphQLRootContext Context ctx) {
        Optional<User> user = service.queryOne(ctx, ctx.user());
        if (user.isPresent()) {
            return user.get();
        } else {
            throw new ServiceException(ServiceStatusCodes.SC_ACCOUNT_DOES_NOT_EXIST);
        }
    }

    @Override
    public Class<? extends GraphQLResolver> type() {
        return UserResolver.class;
}


}
