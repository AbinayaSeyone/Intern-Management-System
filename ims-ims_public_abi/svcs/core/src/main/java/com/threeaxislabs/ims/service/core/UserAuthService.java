package com.threeaxislabs.ims.service.core;

import com.threeaxislabs.ims.domain.entity.User;
import com.threeaxislabs.ims.domain.query.UserQuery;
import com.threeaxislabs.ims.service.gql.ServiceStatusCodes;
import com.threeaxislabs.infinistack.persistence.Store;
import com.threeaxislabs.infinistack.service.Context;
import com.threeaxislabs.infinistack.service.ServiceException;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.crypto.spec.SecretKeySpec;
import java.io.InputStream;
import java.security.Key;
import java.time.Instant;
import java.util.*;

@Service
public class UserAuthService {

    private final static Logger logger = LoggerFactory.getLogger(UserAuthService.class);

    private final Key key;
    private final Store<User, UserQuery> store;

    private final Set<String> revokedTokens = new HashSet<>();

    @Autowired
    public UserAuthService(Store<User, UserQuery> store) throws Exception {
        Properties props = new Properties();

        try (InputStream stream = this.getClass().getClassLoader().getResourceAsStream("service.properties")) {
            props.load(stream);
        }

        this.key = new SecretKeySpec(
                Base64.getDecoder().decode(props.getProperty("service.jwt.key")),
                "HmacSHA256"
        );
        this.store = store;
    }


    public String sign(Context context, User user) {
        JwtBuilder jwtBuilder = Jwts.builder()
                .setSubject(user.getId())
                .setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256, key);

        return jwtBuilder.compact();
    }

    public User verify(Context context, Optional<String> token) {
        try {

            if (!token.isPresent()) {
                throw new ServiceException(ServiceStatusCodes.SC_AUTHORIZATION_MISSING);
            }

            if (isTokenRevoked(token.get())) {
                throw new ServiceException(ServiceStatusCodes.SC_AUTHORIZATION_INVALID);
            }


            Jws<Claims> claimsJws = Jwts.parser()
                    .setSigningKey(key)
                    .parseClaimsJws(token.get());

            Claims claims = claimsJws.getBody();

            if (claims.getExpiration() != null) {
                if (claims.getExpiration().toInstant().isBefore(new Date().toInstant())) {
                    throw new ServiceException(ServiceStatusCodes.SC_AUTHORIZATION_EXPIRED);
                }
            }

            String subject = claims.getSubject();

            Optional<User> userFound = store.queryOne(context.session(), subject);

            if (!userFound.isPresent()) {
                throw new ServiceException(ServiceStatusCodes.SC_ACCOUNT_DOES_NOT_EXIST);
            }

            User user = userFound.get();

            Optional<Long> lastPasswordChangeTime = user.getLastPasswordChangeTime();

            if (lastPasswordChangeTime.isPresent()) {
                if (claims.getIssuedAt().toInstant().isBefore(Instant.ofEpochMilli(lastPasswordChangeTime.get()))) {
                    throw new ServiceException(ServiceStatusCodes.SC_PASSWORD_CHANGE_REQUIRED);
                }
            }

            return user;
        } catch (JwtException e) {
            logger.error("Verification failed for [" + token + "]", e);
            throw new ServiceException(ServiceStatusCodes.SC_AUTHORIZATION_INVALID);
        }
    }

    public void revokeToken(String token) {
        revokedTokens.add(token);
    }

    public boolean isTokenRevoked(String token) {
        return revokedTokens.contains(token);
}
}
