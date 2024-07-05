package com.threeaxislabs.ims.domain.entity;

import com.threeaxislabs.ims.domain.query.UserQuery;
import com.threeaxislabs.ims.domain.type.UserStatus;
import com.threeaxislabs.infinistack.graphql.annotation.type.GraphQLType;
import com.threeaxislabs.infinistack.persistence.Entity;
import com.threeaxislabs.infinistack.persistence.annotation.EntityType;
import com.threeaxislabs.infinistack.persistence.annotation.Id;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.xml.transform.sax.SAXResult;
import java.util.Optional;
import java.util.Set;

@GraphQLType
@EntityType(
        name = "users",
        query = UserQuery.class
)
@SuppressWarnings("OptionalUsedAsFieldOrParameterType")
public class User implements Entity, Referable {
    @Id
//    @NotNull
    private String id;

    @NotBlank
    private String username;

    @NotBlank
    private String password;

    //    @NotNull
    private String userRole = "COMPANY_USER";

    private String mobileNo;

    //    @NotBlank
    private String emailId;

    private Set<String> groups;

    @NotNull
    private UserStatus status = UserStatus.INITIAL;

    private boolean locked = false;

    private Integer loginAttempts = 0;

    private Optional<Long> lastLoginTime = Optional.empty();

    private Optional<Long> lastPasswordChangeTime = Optional.empty();

    private Optional<Long> version = Optional.empty();

    private Optional<Long> createdTime = Optional.empty();

    private Optional<Long> modifiedTime = Optional.empty();

    private Optional<String> createdBy = Optional.empty();

    private Optional<String> modifiedBy = Optional.empty();

    @Override
    public String getId() {
        return id;
    }

    @Override
    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    public Set<String> getGroups() {
        return groups;
    }

    public void setGroups(Set<String> groups) {
        this.groups = groups;
    }

    public UserStatus getStatus() {
        return status;
    }

    public void setStatus(UserStatus status) {
        this.status = status;
    }

    public boolean isLocked() {
        return locked;
    }

    public void setLocked(boolean locked) {
        this.locked = locked;
    }

    public Optional<Long> getLastPasswordChangeTime() {
        return lastPasswordChangeTime;
    }

    public void setLastPasswordChangeTime(Long lastPasswordChangeTime) {
        this.lastPasswordChangeTime = Optional.ofNullable(lastPasswordChangeTime);
    }

    public Integer getLoginAttempts() {
        return loginAttempts;
    }

    public void setLoginAttempts(Integer loginAttempts) {
        this.loginAttempts = loginAttempts;
    }

    public Optional<Long> getLastLoginTime() {
        return lastLoginTime;
    }

    public void setLastLoginTime(Long lastLoginTime) {
        this.lastLoginTime = Optional.ofNullable(lastLoginTime);
    }

    @Override
    public Optional<Long> getVersion() {
        return version;
    }

    public void setVersion(Long version) {
        this.version = Optional.ofNullable(version);
    }

    @Override
    public Optional<Long> getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(Long createdTime) {
        this.createdTime = Optional.ofNullable(createdTime);
    }

    public Optional<Long> getModifiedTime() {
        return modifiedTime;
    }

    public void setModifiedTime(Long modifiedTime) {
        this.modifiedTime = Optional.ofNullable(modifiedTime);
    }

    @Override
    public Optional<String> getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = Optional.ofNullable(createdBy);
    }

    public Optional<String> getModifiedBy() {
        return modifiedBy;
    }

    public void setModifiedBy(String modifiedBy) {
        this.modifiedBy = Optional.ofNullable(modifiedBy);
    }


    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", username='" + username + '\'' +
                ", emailId='" + emailId + '\'' +
                ", password='" + password + '\'' +
                ", userRole='" + userRole + '\'' +
                ", mobileNo='" + mobileNo + '\'' +
                ", groups=" + groups +
                ", status=" + status +
                ", locked=" + locked +
                ", loginAttempts=" + loginAttempts +
                ", lastLoginTime=" + lastLoginTime +
                ", lastPasswordChangeTime=" + lastPasswordChangeTime +
                ", version=" + version +
                ", createdTime=" + createdTime +
                ", modifiedTime=" + modifiedTime +
                ", createdBy=" + createdBy +
                ", modifiedBy=" + modifiedBy +
                '}';
    }
}
