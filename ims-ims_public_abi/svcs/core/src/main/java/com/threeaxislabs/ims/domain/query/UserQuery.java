package com.threeaxislabs.ims.domain.query;


import com.threeaxislabs.ims.domain.type.UserStatus;
import com.threeaxislabs.infinistack.graphql.annotation.type.GraphQLType;
import com.threeaxislabs.infinistack.persistence.EntityQuery;
import com.threeaxislabs.infinistack.persistence.annotation.Filter;
import com.threeaxislabs.infinistack.persistence.annotation.IndexType;
import com.threeaxislabs.infinistack.persistence.annotation.Limit;
import com.threeaxislabs.infinistack.persistence.annotation.UniqueKey;
import com.threeaxislabs.infinistack.persistence.parameter.type.DocParameter;
import com.threeaxislabs.infinistack.persistence.parameter.type.EnumParameter;
import com.threeaxislabs.infinistack.persistence.parameter.type.LongParameter;
import com.threeaxislabs.infinistack.persistence.parameter.type.StringParameter;

import java.util.List;
import java.util.Optional;

import static com.threeaxislabs.infinistack.persistence.annotation.IndexType.field_regex;
import static java.util.Collections.emptyList;

@GraphQLType
@UniqueKey(path = "username")
public class UserQuery implements EntityQuery {
    @Filter(path = "id")
    private List<StringParameter> id = emptyList();

    @Filter(path = "username", index = field_regex)
    private List<StringParameter> username = emptyList();

    @Filter(path = "emailId", index = field_regex)
    private List<StringParameter> emailId = emptyList();

    @Filter(path = "status")
    private List<EnumParameter<UserStatus>> status = emptyList();

    @Filter(path = "userRole", index = field_regex)
    private List<StringParameter> userRole = emptyList();

    @Filter(path = "mobileNo", index = field_regex)
    private List<StringParameter> mobileNo = emptyList();

    @Filter(path = "groups", index = IndexType.object)
    private List<DocParameter> groups = emptyList();

    @Filter(path = "createdTime")
    private List<LongParameter> createdTime = emptyList();

    @Filter(path = "modifiedTime")
    private List<LongParameter> modifiedTime = emptyList();

    @Filter(path = "createdBy")
    private List<StringParameter> createdBy = emptyList();

    @Filter(path = "modifiedBy")
    private List<StringParameter> modifiedBy = emptyList();

    @Limit
    protected Optional<Integer> limit = Optional.of(128);

    public List<StringParameter> getId() {
        return id;
    }

    public void setId(List<StringParameter> id) {
        this.id = id;
    }

    public List<StringParameter> getUsername() {
        return username;
    }

    public void setUsername(List<StringParameter> username) {
        this.username = username;
    }

    public List<StringParameter> getEmailId() {
        return emailId;
    }

    public void setEmailId(List<StringParameter> emailId) {
        this.emailId = emailId;
    }

    public List<StringParameter> getUserRole() { return userRole; }

    public void setUserRole(List<StringParameter> userRole) { this.userRole = userRole; }

    public List<StringParameter> getMobileNo() { return mobileNo; }

    public void setMobileNo(List<StringParameter> mobileNo) { this.mobileNo = mobileNo; }

    public List<EnumParameter<UserStatus>> getStatus() {
        return status;
    }

    public void setStatus(List<EnumParameter<UserStatus>> status) {
        this.status = status;
    }

    public List<DocParameter> getGroups() {
        return groups;
    }

    public void setGroups(List<DocParameter> groups) {
        this.groups = groups;
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

    public Optional<Integer> getLimit() {
        return limit;
    }

    public void setLimit(Integer limit) {
        this.limit = Optional.ofNullable(limit);
    }

    @Override
    public String toString() {
        return "UserQuery{" +
                "id=" + id +
                ", username=" + username +
                ", emailId=" + emailId +
                ", userRole=" + userRole +
                ", mobileNo=" + mobileNo +
                ", status=" + status +
                ", groups=" + groups +
                ", createdTime=" + createdTime +
                ", modifiedTime=" + modifiedTime +
                ", createdBy=" + createdBy +
                ", modifiedBy=" + modifiedBy +
                ", limit=" + limit +
    '}';
    }
}
