package com.threeaxislabs.ims.domain.entity;

import com.threeaxislabs.ims.domain.query.CompanyQuery;
import com.threeaxislabs.infinistack.graphql.annotation.type.GraphQLType;
import com.threeaxislabs.infinistack.persistence.Entity;
import com.threeaxislabs.infinistack.persistence.annotation.EntityType;
import com.threeaxislabs.infinistack.persistence.annotation.Id;

import java.util.Optional;
import java.util.Set;


@GraphQLType
@EntityType(
        name = "company",
        query = CompanyQuery.class
)
@SuppressWarnings("OptionalUsedAsFieldOrParameterType")
public class Company implements Entity,Referable{

    @Id
    private String id;
    private String name;
    private String mobileNo;

    private String email;
    private String address;
    private String websiteLink;
    private String password;
    private String hiringManagerEmail;
    private String twitterLink;
    private String facebookLink;
    private String whatsappLink;
    private String instagramLink;
    private String linkedInLink;
    private Set<String> vacancies;

    private Boolean status1=true;
    private Boolean verification=false;
    private String suspendReason;
    private String reverify;

    public Boolean getStatus1() {
        return status1;
    }

    public void setStatus1(Boolean status1) {
        this.status1 = status1;
    }

    public Boolean getVerification() {
        return verification;
    }

    public void setVerification(Boolean verification) {
        this.verification = verification;
    }

    public String getSuspendReason() {
        return suspendReason;
    }

    public void setSuspendReason(String suspendReason) {
        this.suspendReason = suspendReason;
    }

    public String getReverify() {
        return reverify;
    }

    public void setReverify(String reverify) {
        this.reverify = reverify;
    }

    public Set<String> getVacancies() {
        return vacancies;
    }

    public void setVacancies(Set<String> vacancies) {
        this.vacancies = vacancies;
    }

    private Long createdTime;
    private String createdBy;
    private Long modifiedTime;
    private String modifiedBy;
    private Long version;

    public String getLinkedInLink() {
        return linkedInLink;
    }

    public void setLinkedInLink(String linkedInLink) {
        this.linkedInLink = linkedInLink;
    }

    public String getMobileNo() {
        return mobileNo;
    }
    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getWebsiteLink() {
        return websiteLink;
    }

    public void setWebsiteLink(String websiteLink) {
        this.websiteLink = websiteLink;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getHiringManagerEmail() {
        return hiringManagerEmail;
    }

    public void setHiringManagerEmail(String hiringManagerEmail) {
        this.hiringManagerEmail = hiringManagerEmail;
    }

    public String getTwitterLink() {
        return twitterLink;
    }

    public void setTwitterLink(String twitterLink) {
        this.twitterLink = twitterLink;
    }

    public String getFacebookLink() {
        return facebookLink;
    }

    public void setFacebookLink(String facebookLink) {
        this.facebookLink = facebookLink;
    }

    public String getWhatsappLink() {
        return whatsappLink;
    }

    public void setWhatsappLink(String whatsappLink) {
        this.whatsappLink = whatsappLink;
    }

    public String getInstagramLink() {
        return instagramLink;
    }

    public void setInstagramLink(String instagramLink) {
        this.instagramLink = instagramLink;
    }

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
        return "Company{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", mobileNo='" + mobileNo + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", websiteLink='" + websiteLink + '\'' +
                ", password='" + password + '\'' +
                ", hiringManagerEmail='" + hiringManagerEmail + '\'' +
                ", twitterLink='" + twitterLink + '\'' +
                ", facebookLink='" + facebookLink + '\'' +
                ", whatsappLink='" + whatsappLink + '\'' +
                ", instagramLink='" + instagramLink + '\'' +
                ", linkedInLink='" + linkedInLink + '\'' +
                ", vacancies=" + vacancies +
                ", status1=" + status1 +
                ", verification=" + verification +
                ", suspendReason='" + suspendReason + '\'' +
                ", reverify='" + reverify + '\'' +
                ", createdTime=" + createdTime +
                ", createdBy='" + createdBy + '\'' +
                ", modifiedTime=" + modifiedTime +
                ", modifiedBy='" + modifiedBy + '\'' +
                ", version=" + version +
                '}';
    }

}
