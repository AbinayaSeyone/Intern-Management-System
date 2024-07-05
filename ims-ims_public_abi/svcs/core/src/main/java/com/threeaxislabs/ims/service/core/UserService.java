package com.threeaxislabs.ims.service.core;

import com.threeaxislabs.ims.domain.entity.User;
import com.threeaxislabs.ims.domain.message.LoginReq;
import com.threeaxislabs.ims.domain.query.UserQuery;
import com.threeaxislabs.ims.domain.type.UserStatus;
import com.threeaxislabs.ims.util.PasswordUtils;
import com.threeaxislabs.infinistack.persistence.Session;
import com.threeaxislabs.infinistack.persistence.Store;
import com.threeaxislabs.infinistack.persistence.parameter.type.StringParameter;
import com.threeaxislabs.infinistack.service.Context;
import com.threeaxislabs.infinistack.service.Result;
import com.threeaxislabs.infinistack.util.IdGenerator;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import static com.threeaxislabs.ims.service.gql.ServiceStatusCodes.*;
import static com.threeaxislabs.infinistack.service.StatusCodeBuilder.sc;
import static java.util.Collections.singletonList;

@Service
public class UserService extends EntityService<User, UserQuery> {
    private final UserAuthService authService;

    public UserService(Store<User, UserQuery> store, UserAuthService authService, IdGenerator idGenerator) {
        super(store, idGenerator);
        this.authService = authService;
    }

    public Optional<User> doFindUserByUsername(Session session, String username) {
        UserQuery userQuery = new UserQuery();
        userQuery.setUsername(singletonList(new StringParameter(username)));
        userQuery.setLimit(1);

        return store.query(session, userQuery).findFirst();
    }

    public Optional<User> getUserById(Session session, String userId) {
        // Create a UserQuery object and set the filter based on the user ID
        UserQuery userQuery = new UserQuery();
        userQuery.setId(singletonList(new StringParameter(userId)));
        userQuery.setLimit(1);

        // Perform the query to retrieve the user
        return store.query(session, userQuery).findFirst();
    }

    public Result<String> login(Context ctx, User request) {
        Session session = ctx.session();

        long attemptedTime = System.currentTimeMillis();
        Optional<User> userFound = doFindUserByUsername(session, request.getUsername());

        if (userFound.isPresent()) {
            User user = userFound.get();

            if (user.isLocked()) {
                return Result.of(ctx, sc(SC_USER_LOCKED, "User is locked!"));
            }

            if (user.getStatus() != UserStatus.ACTIVE) {
                return Result.of(ctx, sc(SC_USER_NOT_ACTIVE, "User is not active!"));
            }

            try {
                if (PasswordUtils.matchPassword(request.getPassword(), user.getPassword())) {
                    user.setLoginAttempts(0);
                    user.setLastLoginTime(attemptedTime);

                    return Result.of(ctx, authService.sign(ctx, user));
                } else {
                    if (user.getLoginAttempts() + 1 > 3) {
                        user.setLocked(true);
                    }
                    return Result.of(ctx, SC_INVALID_PASSWORD, "Invalid username or password!");
                }
            } finally {
                store.update(session, user);
            }
        } else {
            return Result.of(ctx, SC_INVALID_USERNAME, "Invalid username or password!");
        }
    }

    public Result<User> registerUser(Context ctx, User user) {
        Session session = ctx.session();

        // Check if the username is already taken
        Optional<User> existingUser = doFindUserByUsername(session, user.getUsername());
        if (existingUser.isPresent()) {
            return Result.of(ctx, SC_INVALID_USERNAME);
        }

        // Generate ID for the user
        String userId = UUID.randomUUID().toString();
        user.setId(userId);

        // Set default values or perform additional validations if needed
        user.setStatus(UserStatus.ACTIVE); // Set the user status to ACTIVE

        // Hash the password before storing it
        String hashedPassword = PasswordUtils.hashPassword(user.getPassword());
        user.setPassword(hashedPassword);

        // Save the user to the database
        User registeredUser = store.create(session, user);

        return Result.of(ctx, registeredUser);
    }
}
