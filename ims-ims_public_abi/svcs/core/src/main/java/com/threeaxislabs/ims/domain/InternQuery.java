package com.threeaxislabs.ims.domain;

import com.threeaxislabs.infinistack.graphql.annotation.type.GraphQLType;
import com.threeaxislabs.infinistack.persistence.EntityQuery;
import com.threeaxislabs.infinistack.persistence.annotation.Filter;
import com.threeaxislabs.infinistack.persistence.parameter.type.BooleanParameter;
import com.threeaxislabs.infinistack.persistence.parameter.type.LongParameter;
import com.threeaxislabs.infinistack.persistence.parameter.type.StringParameter;

import java.util.List;

import static java.util.Collections.emptyList;

@GraphQLType
public class InternQuery implements EntityQuery {
    @Filter(path = "id")
    private List<StringParameter> id = emptyList();

    @Filter(path = "status1")
    private List<BooleanParameter> status1 = emptyList();
    @Filter(path = "verification")
    private List<BooleanParameter> verification= emptyList();

    @Filter(path = "createdTime")
    private List<LongParameter> createdTime = emptyList();

    @Filter(path = "modifiedTime")
    private List<LongParameter> modifiedTime = emptyList();

    @Filter(path = "createdBy")
    private List<StringParameter> createdBy = emptyList();

    @Filter(path = "modifiedBy")
    private List<StringParameter> modifiedBy = emptyList();

    public List<BooleanParameter> getStatus1() {
        return status1;
    }

    public void setStatus1(List<BooleanParameter> status1) {
        this.status1 = status1;
    }

    public List<BooleanParameter> getVerification() {
        return verification;
    }

    public void setVerification(List<BooleanParameter> verification) {
        this.verification = verification;
    }

    @Override
    public List<StringParameter> getId() {
        return id;
    }

    @Override
    public void setId(List<StringParameter> id) {
        this.id = id;
    }

    @Override
    public List<LongParameter> getCreatedTime() {
        return createdTime;
    }

    @Override
    public void setCreatedTime(List<LongParameter> createdTime) {
        this.createdTime = createdTime;
    }

    @Override
    public List<LongParameter> getModifiedTime() {
        return modifiedTime;
    }

    @Override
    public void setModifiedTime(List<LongParameter> modifiedTime) {
        this.modifiedTime = modifiedTime;
    }

    @Override
    public List<StringParameter> getCreatedBy() {
        return createdBy;
    }

    @Override
    public void setCreatedBy(List<StringParameter> createdBy) {
        this.createdBy = createdBy;
    }

    @Override
    public List<StringParameter> getModifiedBy() {
        return modifiedBy;
    }

    @Override
    public void setModifiedBy(List<StringParameter> modifiedBy) {
        this.modifiedBy = modifiedBy;
    }

}
