package com.threeaxislabs.ims.domain;

import com.threeaxislabs.ims.domain.entity.Referable;
import com.threeaxislabs.infinistack.graphql.annotation.type.GraphQLType;
import com.threeaxislabs.infinistack.persistence.Entity;
import com.threeaxislabs.infinistack.persistence.annotation.EntityType;
import com.threeaxislabs.infinistack.persistence.annotation.Id;
import java.util.Date;
import java.util.Optional;


@GraphQLType
@EntityType(
        name = "vacancy",
        query = VacancyQuery.class
)
public class Vacancy implements Entity, Referable {

    @Id
    private String id;
    private String name;
    private String title;
    private String type;
    private String field;
    private String postdate;
    private String description;
    private String location;
    private String skills;
    private String noofposition;
    private String status;
    private Boolean verification;
    private String coverImage;
    private String workPlace;
    private String closingdate;
    private String hiringManager;
    private Long createdTime;
    private String createdBy;
    private Long modifiedTime;
    private String modifiedBy;
    private Long version;

    public String getClosingdate() {
        return closingdate;
    }

    public void setClosingdate(String closingdate) {
        this.closingdate = closingdate;
    }

    public Boolean getVerification() {
        return verification;
    }

    public void setVerification(Boolean verification) {
        this.verification = verification;
    }

    public String getPostdate() {
        return postdate;
    }

    public void setPostdate(String postdate) {
        this.postdate = postdate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getNoofposition() {
        return noofposition;
    }

    public void setNoofposition(String noofposition) {
        this.noofposition = noofposition;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public String getCoverImage() {
        return coverImage;
    }

    public void setCoverImage(String coverImage) {
        this.coverImage = coverImage;
    }

    public String getWorkPlace() {
        return workPlace;
    }

    public void setWorkPlace(String workPlace) {
        this.workPlace = workPlace;
    }

    public String getHiringManager() {
        return hiringManager;
    }

    public void setHiringManager(String hiringManager) {
        this.hiringManager = hiringManager;
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
        return "Vacancy{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", title='" + title + '\'' +
                ", type='" + type + '\'' +
                ", field='" + field + '\'' +
                ", postdate=" + postdate +
                ", description='" + description + '\'' +
                ", location='" + location + '\'' +
                ", skills='" + skills + '\'' +
                ", noofposition=" + noofposition +
                ", status='" + status + '\'' +
                ", verification=" + verification +
                ", coverImage='" + coverImage + '\'' +
                ", workPlace='" + workPlace + '\'' +
                ", closingdate='" + closingdate + '\'' +
                ", hiringManager='" + hiringManager + '\'' +
                ", createdTime=" + createdTime +
                ", createdBy='" + createdBy + '\'' +
                ", modifiedTime=" + modifiedTime +
                ", modifiedBy='" + modifiedBy + '\'' +
                ", version=" + version +
                '}';
    }
}