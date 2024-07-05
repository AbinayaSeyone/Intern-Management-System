package com.threeaxislabs.ims.service.core;

import com.threeaxislabs.infinistack.persistence.Session;
import com.threeaxislabs.infinistack.service.Context;
import com.threeaxislabs.infinistack.service.EndpointType;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@SuppressWarnings("unchecked")
public class ContextImpl implements Context {
    private final String cid;
    private final String user;
    private final EndpointType endpoint;
    private final Session session;
    private final Map<String, Object> params;

    private Set<String> groups;

    public ContextImpl(String cid, String user, Set<String> groups, EndpointType endpoint, Session session) {
        this.cid = cid;
        this.user = user;
        this.groups = groups;
        this.endpoint = endpoint;
        this.params = new HashMap<>();
        this.session = session;
    }

    @Override
    public String cid() {
        return cid;
    }

    @Override
    public String user() {
        return user;
    }

    @Override
    public Set<String> groups() {
        return groups;
    }

    public void groups(Set<String> groups) {
        this.groups = groups;
    }

    @Override
    public EndpointType endpoint() {
        return endpoint;
    }

    @Override
    public Session session() {
        return session;
    }

    @Override
    public <T> T param(String key) {
        return (T) params.get(key);
    }

    @Override
    public <T> T param(String key, T value) {
        return (T) params.put(key, value);
    }
}
