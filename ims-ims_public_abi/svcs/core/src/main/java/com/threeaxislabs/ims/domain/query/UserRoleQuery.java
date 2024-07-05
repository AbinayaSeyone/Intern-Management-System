package com.threeaxislabs.ims.domain.query;

import com.threeaxislabs.infinistack.graphql.annotation.type.GraphQLType;
import com.threeaxislabs.infinistack.persistence.EntityQuery;
import com.threeaxislabs.infinistack.persistence.annotation.Filter;
import com.threeaxislabs.infinistack.persistence.parameter.type.LongParameter;
import com.threeaxislabs.infinistack.persistence.parameter.type.StringParameter;

import java.util.List;

import static java.util.Collections.emptyList;

@GraphQLType
public class UserRoleQuery implements EntityQuery {
    @Filter(path = "id")
    private List<StringParameter> id = emptyList();

    @Filter(path = "createdTime")
    private List<LongParameter> createdTime = emptyList();

    @Filter(path = "modifiedTime")
    private List<LongParameter> modifiedTime = emptyList();

    @Filter(path = "createdBy")
    private List<StringParameter> createdBy = emptyList();

    @Filter(path = "modifiedBy")
    private List<StringParameter> modifiedBy = emptyList();

    public List<StringParameter> getId() {
        return id;
    }

    public void setId(List<StringParameter> id) {
        this.id = id;
    }

    public List<LongParameter> getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(List<LongParameter> createdTime) {
        this.createdTime = createdTime;
    }

    public List<LongParameter> getModifiedTime() {
        return modifiedTime;
    }

    public void setModifiedTime(List<LongParameter> modifiedTime) {
        this.modifiedTime = modifiedTime;
    }

    public List<StringParameter> getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(List<StringParameter> createdBy) {
        this.createdBy = createdBy;
    }

    public List<StringParameter> getModifiedBy() {
        return modifiedBy;
    }

    public void setModifiedBy(List<StringParameter> modifiedBy) {
        this.modifiedBy = modifiedBy;
    }

    @Override
    public String toString() {
        return "UserRoleQuery{" +
                "id=" + id +
                ", createdTime=" + createdTime +
                ", modifiedTime=" + modifiedTime +
                ", createdBy=" + createdBy +
                ", modifiedBy=" + modifiedBy +
                '}';
    }
}
