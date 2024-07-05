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
        name = "internPoolOpening",
        query = InternPoolOpeningQuery.class
)
public class InternPoolOpening implements Entity, Referable {

    @Id
    private String id;
    private String name;
    private String institution;
    private String openingDate;
    private String faculty;
    private String department;
    private String field;
    private String role;
    private String description;
    private String duration;
    private String url;
    private String publisherMail;
    private String otp="false";
    private String generatedOtp;
    private String publisherName;
    private String publisherMobile;

    private Boolean otpVerify;

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

    public String getGeneratedOtp() {
        return generatedOtp;
    }

    public void setGeneratedOtp(String generatedOtp) {
        this.generatedOtp = generatedOtp;
    }

    public String getPublisherMail() {
        return publisherMail;
    }

    public void setPublisherMail(String publisherMail) {
        this.publisherMail = publisherMail;
    }

    public String getOtp() {
        return otp;
    }

    public void setOtp(String otp) {
        this.otp = otp;
    }

    public String getPublisherName() {
        return publisherName;
    }

    public void setPublisherName(String publisherName) {
        this.publisherName = publisherName;
    }

    public String getPublisherMobile() {
        return publisherMobile;
    }

    public void setPublisherMobile(String publisherMobile) {
        this.publisherMobile = publisherMobile;
    }

    public Boolean getOtpVerify() {
        return otpVerify;
    }

    public void setOtpVerify(Boolean otpVerify) {
        this.otpVerify = otpVerify;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    private Set<String> interns;

    public Set<String> getInterns() {
        return interns;
    }

    public void setInterns(Set<String> interns) {
        this.interns = interns;
    }

    public String getInstitution() {
        return institution;
    }

    public void setInstitution(String institution) {
        this.institution = institution;
    }

    public String getOpeningDate() {
        return openingDate;
    }

    public void setOpeningDate(String openingDate) {
        this.openingDate = openingDate;
    }

    public String getFaculty() {
        return faculty;
    }

    public void setFaculty(String faculty) {
        this.faculty = faculty;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
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
        return "InternPoolOpening{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", institution='" + institution + '\'' +
                ", openingDate='" + openingDate + '\'' +
                ", faculty='" + faculty + '\'' +
                ", department='" + department + '\'' +
                ", field='" + field + '\'' +
                ", role='" + role + '\'' +
                ", description='" + description + '\'' +
                ", duration='" + duration + '\'' +
                ", url='" + url + '\'' +
                ", publisherMail='" + publisherMail + '\'' +
                ", otp='" + otp + '\'' +
                ", generatedOtp='" + generatedOtp + '\'' +
                ", publisherName='" + publisherName + '\'' +
                ", publisherMobile='" + publisherMobile + '\'' +
                ", otpVerify=" + otpVerify +
                ", status1=" + status1 +
                ", verification=" + verification +
                ", suspendReason='" + suspendReason + '\'' +
                ", reverify='" + reverify + '\'' +
                ", interns=" + interns +
                ", createdTime=" + createdTime +
                ", createdBy='" + createdBy + '\'' +
                ", modifiedTime=" + modifiedTime +
                ", modifiedBy='" + modifiedBy + '\'' +
                ", version=" + version +
                '}';
    }
}
