package com.threeaxislabs.ims.domain;

import com.threeaxislabs.infinistack.graphql.annotation.type.GraphQLType;
import com.threeaxislabs.infinistack.persistence.EntityQuery;
import com.threeaxislabs.infinistack.persistence.annotation.Filter;
import com.threeaxislabs.infinistack.persistence.annotation.IndexType;
import com.threeaxislabs.infinistack.persistence.parameter.type.DocParameter;
import com.threeaxislabs.infinistack.persistence.parameter.type.LongParameter;
import com.threeaxislabs.infinistack.persistence.parameter.type.StringParameter;

import java.util.List;

import static java.util.Collections.emptyList;

@GraphQLType
public class HiringManagerQuery implements EntityQuery {
    @Filter(path = "id")
    private List<StringParameter> id = emptyList();

    @Filter(path = "vacancies", index = IndexType.object)
    private List<DocParameter> vacancies = emptyList();

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

    public List<DocParameter> getVacancies() {
        return vacancies;
    }

    public void setVacancies(List<DocParameter> vacancies) {
        this.vacancies = vacancies;
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
