package com.threeaxislabs.ims.service.gql;

import org.jooq.lambda.Seq;

import java.util.Set;

public class GraphQLRoles {

    public static final Set<String> PUBLIC_ACCESS = Seq.of(
            "loginUser", "__externalRef"
            ).toSet();
}