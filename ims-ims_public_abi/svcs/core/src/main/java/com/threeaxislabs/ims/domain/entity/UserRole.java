package com.threeaxislabs.ims.domain.entity;

import com.threeaxislabs.ims.domain.query.UserRoleQuery;
import com.threeaxislabs.infinistack.graphql.annotation.type.GraphQLType;
import com.threeaxislabs.infinistack.persistence.Entity;
import com.threeaxislabs.infinistack.persistence.annotation.EntityType;
import com.threeaxislabs.infinistack.persistence.annotation.Id;

import javax.validation.constraints.NotBlank;
import java.util.Optional;

@GraphQLType
@EntityType(
        name = "user_roles",
        query = UserRoleQuery.class
)
@SuppressWarnings("OptionalUsedAsFieldOrParameterType")
public class UserRole implements Entity, Referable {
    @Id
    @NotBlank
    private String id;

    private Optional<Long> version = Optional.empty();

    private Optional<Long> createdTime = Optional.empty();

    private Optional<Long> modifiedTime = Optional.empty();

    private Optional<String> createdBy = Optional.empty();

    private Optional<String> modifiedBy = Optional.empty();

    public UserRole() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Optional<Long> getVersion() {
        return version;
    }

    public void setVersion(Long version) {
        this.version = Optional.ofNullable(version);
    }

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
        return "UserRole{" +
                "id='" + id + '\'' +
                ", version=" + version +
                ", createdTime=" + createdTime +
                ", modifiedTime=" + modifiedTime +
                ", createdBy=" + createdBy +
                ", modifiedBy=" + modifiedBy +
                '}';
    }
}