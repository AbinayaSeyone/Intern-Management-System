package com.threeaxislabs.ims.domain;

import com.threeaxislabs.infinistack.graphql.annotation.type.GraphQLType;
import com.threeaxislabs.infinistack.persistence.Entity;
import com.threeaxislabs.infinistack.persistence.annotation.EntityType;
import com.threeaxislabs.infinistack.persistence.annotation.Id;

import java.util.Optional;


@GraphQLType
@EntityType(
        name = "hiringProcess",
        query = HiringProcessQuery.class
)
public class HiringProcess implements Entity {

    @Id
    private String id;


    private int noOfApplicants;
    private String status;
    private int selectedInterns;
    private int rejectedInterns;
    private String jobTitle;
    private String jobType;

    public int getNoOfApplicants() {
        return noOfApplicants;
    }

    public void setNoOfApplicants(int noOfApplicants) {
        this.noOfApplicants = noOfApplicants;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getSelectedInterns() {
        return selectedInterns;
    }

    public void setSelectedInterns(int selectedInterns) {
        this.selectedInterns = selectedInterns;
    }

    public int getRejectedInterns() {
        return rejectedInterns;
    }

    public void setRejectedInterns(int rejectedInterns) {
        this.rejectedInterns = rejectedInterns;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getJobType() {
        return jobType;
    }

    public void setJobType(String jobType) {
        this.jobType = jobType;
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
        return "Task{" +
                "id='" + id + '\'' +
                ", noOfApplicants='" + noOfApplicants + '\'' +
                ", status='" + status + '\'' +
                ", selectedInterns='" + selectedInterns + '\'' +
                ", rejectedInterns='" + rejectedInterns + '\'' +
                ", jobTitle='" + jobTitle + '\'' +
                ", jobType='" + jobType + '\'' +

                ", createdTime=" + createdTime +
                ", createdBy='" + createdBy + '\'' +
                ", modifiedTime=" + modifiedTime +
                ", modifiedBy='" + modifiedBy + '\'' +
                ", version=" + version +
                '}';
    }
}
