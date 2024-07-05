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
public class ApplicantQuery implements EntityQuery{
    @Filter(path = "id")
    private List<StringParameter> id = emptyList();
    @Filter(path = "vacancyId")
    private List<StringParameter> vacancyId = emptyList();
    @Filter(path = "internId")
    private List<StringParameter> internId = emptyList();
    @Filter(path = "isApplied")
    private List<BooleanParameter> isApplied = emptyList();
    @Filter(path = "wishlist")
    private List<BooleanParameter> wishlist = emptyList();
    @Filter(path = "isRejected")
    private List<BooleanParameter> isRejected = emptyList();

    @Filter(path="isSelected")
    private List<BooleanParameter> isSelected=emptyList();


    public List<BooleanParameter> getIsRejected() {
        return isRejected;
    }

    public void setIsRejected(List<BooleanParameter> isRejected) {
        this.isRejected = isRejected;
    }

    public List<BooleanParameter> getIsSelected() {
        return isSelected;
    }

    public void setIsSelected(List<BooleanParameter> isSelected) {
        this.isSelected = isSelected;
    }

    public List<StringParameter> getVacancyId() {
        return vacancyId;
    }

    public void setVacancyId(List<StringParameter> vacancyId) {
        this.vacancyId = vacancyId;
    }

    public List<StringParameter> getInternId() {
        return internId;
    }

    public void setInternId(List<StringParameter> internId) {
        this.internId = internId;
    }

    public List<BooleanParameter> getIsApplied() {
        return isApplied;
    }

    public void setIsApplied(List<BooleanParameter> isApplied) {
        this.isApplied = isApplied;
    }

    public List<BooleanParameter> getWishlist() {
        return wishlist;
    }

    public void setWishlist(List<BooleanParameter> wishlist) {
        this.wishlist = wishlist;
    }

    @Filter(path = "createdTime")
    private List<LongParameter> createdTime = emptyList();

    @Filter(path = "modifiedTime")
    private List<LongParameter> modifiedTime = emptyList();

    @Filter(path = "createdBy")
    private List<StringParameter> createdBy = emptyList();

    @Filter(path = "modifiedBy")
    private List<StringParameter> modifiedBy = emptyList();

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
