package com.threeaxislabs.ims.domain;

import com.threeaxislabs.ims.domain.entity.Referable;
import com.threeaxislabs.infinistack.graphql.annotation.type.GraphQLType;
import com.threeaxislabs.infinistack.persistence.Entity;
import com.threeaxislabs.infinistack.persistence.annotation.EntityType;
import com.threeaxislabs.infinistack.persistence.annotation.Id;

import java.util.Optional;
import java.util.Set;


@GraphQLType
@EntityType(
        name = "hiringManager",
        query = HiringManagerQuery.class
)
public class HiringManager implements Entity, Referable {

    @Id
    private String id;

    private String name;
    private String mobileNo;
    private String password;
    private String email;
    private Set<String> vacancies;

    public Set<String> getVacancies() {
        return vacancies;
    }

    public void setVacancies(Set<String> vacancies) {
        this.vacancies = vacancies;
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    private Long createdTime;
    private String createdBy;

    private Long modifiedTime;
    private String modifiedBy;

    private Long version;

    @Override
    public void setId(String id) {
        this.id = id;
    }

    @Override
    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public void setCreatedTime(Long time) {
        this.createdTime = time;
    }

    @Override
    public Optional<Long> getCreatedTime() {
        return Optional.ofNullable(createdTime);
    }

    @Override
    public void setCreatedBy(String user) {
        this.createdBy = user;
    }

    @Override
    public Optional<String> getCreatedBy() {
        return Optional.ofNullable(createdBy);
    }

    @Override
    public void setModifiedTime(Long time) {
        this.modifiedTime = time;
    }

    @Override
    public Optional<Long> getModifiedTime() {
        return Optional.ofNullable(modifiedTime);
    }

    @Override
    public void setModifiedBy(String user) {
        this.modifiedBy = user;
    }

    @Override
    public Optional<String> getModifiedBy() {
        return Optional.ofNullable(modifiedBy);
    }

    @Override
    public void setVersion(Long version) {
        this.version = version;
    }

    @Override
    public Optional<Long> getVersion() {
        return Optional.ofNullable(version);
    }

    @Override
    public String toString() {
        return "HiringManager{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", mobileNo='" + mobileNo + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", vacancies=" + vacancies +
                ", createdTime=" + createdTime +
                ", createdBy='" + createdBy + '\'' +
                ", modifiedTime=" + modifiedTime +
                ", modifiedBy='" + modifiedBy + '\'' +
                ", version=" + version +
                '}';
    }

}
