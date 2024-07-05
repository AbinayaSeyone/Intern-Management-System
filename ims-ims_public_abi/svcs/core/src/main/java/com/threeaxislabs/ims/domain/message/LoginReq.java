package com.threeaxislabs.ims.domain.message;

import com.threeaxislabs.infinistack.graphql.annotation.type.GraphQLType;

import javax.validation.constraints.NotBlank;

@GraphQLType
public class LoginReq {
    @NotBlank
    private String username;

    @NotBlank
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "LoginReq{" +
                "username='" + username + '\'' +
                ", password='" + "*****" + '\'' +
            '}';
}
}