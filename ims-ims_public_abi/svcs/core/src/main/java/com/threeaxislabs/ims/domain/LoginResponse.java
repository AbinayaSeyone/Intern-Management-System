package com.threeaxislabs.ims.domain;

import com.threeaxislabs.ims.domain.entity.User;

public class LoginResponse {
    private final String token;
    private final User user;

    public LoginResponse(String token, User user) {
        this.token = token;
        this.user = user;
    }

    public String getToken() {
        return token;
    }


    public User getUser() {
        return user;
}
}