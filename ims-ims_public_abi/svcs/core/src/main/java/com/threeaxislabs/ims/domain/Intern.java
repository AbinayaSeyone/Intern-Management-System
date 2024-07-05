//package com.threeaxislabs.ims.domain;
//
//import com.threeaxislabs.ims.domain.entity.Referable;
//import com.threeaxislabs.infinistack.graphql.annotation.type.GraphQLType;
//import com.threeaxislabs.infinistack.persistence.Entity;
//import com.threeaxislabs.infinistack.persistence.annotation.EntityType;
//import com.threeaxislabs.infinistack.persistence.annotation.Id;
//import java.util.Date;
//import java.util.Optional;
//
//
//@GraphQLType
//@EntityType(
//        name = "interns",
//        query = InternQuery.class
//)
//public class Intern implements Entity, Referable {
//
//    @Id
//    private String id;
//    private String name;
//    private float cgpa;
//    private String gender;
//    private String address;
//    private Date dob;
//    private String uniname;
//    private String unimail;
//    private String course;
//    private String achievement;
//    private String skill;
//    private String linkedin;
//    private String internPoolName;
//
//    private Long createdTime;
//    private String createdBy;
//
//    private Long modifiedTime;
//    private String modifiedBy;
//
//    private Long version;
//
//    public String getInternPoolName() {
//        return internPoolName;
//    }
//
//    public void setInternPoolName(String internPoolName) {
//        this.internPoolName = internPoolName;
//    }
//
//    public String getGender() {
//        return gender;
//    }
//
//    public void setGender(String gender) {
//        this.gender = gender;
//    }
//
//    public String getAddress() {
//        return address;
//    }
//
//    public void setAddress(String address) {
//        this.address = address;
//    }
//
//    public Date getDob() {
//        return dob;
//    }
//
//    public void setDob(Date dob) {
//        this.dob = dob;
//    }
//
//    public String getUniname() {
//        return uniname;
//    }
//
//    public void setUniname(String uniname) {
//        this.uniname = uniname;
//    }
//
//    public String getUnimail() {
//        return unimail;
//    }
//
//    public void setUnimail(String unimail) {
//        this.unimail = unimail;
//    }
//
//    public String getCourse() {
//        return course;
//    }
//
//    public void setCourse(String course) {
//        this.course = course;
//    }
//
//    public String getAchievement() {
//        return achievement;
//    }
//
//    public void setAchievement(String achievement) {
//        this.achievement = achievement;
//    }
//
//    public String getSkill() {
//        return skill;
//    }
//
//    public void setSkill(String skill) {
//        this.skill = skill;
//    }
//
//    public String getLinkedin() {
//        return linkedin;
//    }
//
//    public void setLinkedin(String linkedin) {
//        this.linkedin = linkedin;
//    }
//
//    @Override
//    public void setId(String id) {
//        this.id = id;
//    }
//
//    @Override
//    public String getId() {
//        return id;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public float getCgpa() {
//        return cgpa;
//    }
//
//    public void setCgpa(float cgpa) {
//        this.cgpa = cgpa;
//    }
//
//    @Override
//    public void setCreatedTime(Long time) {
//        this.createdTime = time;
//    }
//
//    @Override
//    public Optional<Long> getCreatedTime() {
//        return Optional.ofNullable(createdTime);
//    }
//
//    @Override
//    public void setCreatedBy(String user) {
//        this.createdBy = user;
//    }
//
//    @Override
//    public Optional<String> getCreatedBy() {
//        return Optional.ofNullable(createdBy);
//    }
//
//    @Override
//    public void setModifiedTime(Long time) {
//        this.modifiedTime = time;
//    }
//
//    @Override
//    public Optional<Long> getModifiedTime() {
//        return Optional.ofNullable(modifiedTime);
//    }
//
//    @Override
//    public void setModifiedBy(String user) {
//        this.modifiedBy = user;
//    }
//
//    @Override
//    public Optional<String> getModifiedBy() {
//        return Optional.ofNullable(modifiedBy);
//    }
//
//    @Override
//    public void setVersion(Long version) {
//        this.version = version;
//    }
//
//    @Override
//    public Optional<Long> getVersion() {
//        return Optional.ofNullable(version);
//    }
//
//    @Override
//    public String toString() {
//        return "Task{" +
//                "id='" + id + '\'' +
//                ", name='" + name + '\'' +
//                ", gender='" + gender + '\'' +
//                ", address='" + address + '\'' +
//                ", dob='" + dob + '\'' +
//                ", uniname='" + uniname + '\'' +
//                ", unimail='" + unimail + '\'' +
//                ", course='" + course + '\'' +
//                ", achievement='" + achievement + '\'' +
//                ", skill='" + skill + '\'' +
//                ", cgpa='" + cgpa + '\'' +
//                ", linkedin='" + linkedin + '\'' +
//                ", internPoolName='" + internPoolName + '\'' +
//                ", createdTime=" + createdTime +
//                ", createdBy='" + createdBy + '\'' +
//                ", modifiedTime=" + modifiedTime +
//                ", modifiedBy='" + modifiedBy + '\'' +
//                ", version=" + version +
//                '}';
//    }
//}

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
        name = "interns",
        query = InternQuery.class
)
public class Intern implements Entity, Referable {

    @Id
    private String id;

    private String name;


    private String firstname;
    private String lastname;
    private Long createdTime;
    private String createdBy;

    private Long modifiedTime;
    private String modifiedBy;

    private Long version;
    private String gender;
    private String address;
    private String facaulty;
    private String department;
    private String dob;
    private String universityname;
    private String  universitymail;
    private String mail;
    private String coursename;
    private String gitgublink;
    private String skill;
    private String cgpa;
    private String linkedinlink;
    private String websitelink;
    private String facebooklink;
    private String internPoolName;

    private Boolean status1=true;
    private Boolean verification=false;
    private String reasonSuspend;
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

    public String getReasonSuspend() {
        return reasonSuspend;
    }

    public void setReasonSuspend(String reasonSuspend) {
        this.reasonSuspend = reasonSuspend;
    }

    public String getReverify() {
        return reverify;
    }

    public void setReverify(String reverify) {
        this.reverify = reverify;
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    public String getInternPoolName() {
        return internPoolName;
    }

    public void setInternPoolName(String internPoolName) {
        this.internPoolName = internPoolName;
    }

    public String getFacebooklink() {
        return facebooklink;
    }

    public void setFacebooklink(String facebooklink) {
        this.facebooklink = facebooklink;
    }

    private String mobileNo;
    private String othercontactnumber;
    private String field;

    @Override
    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getUniversityname() {
        return universityname;
    }

    public void setUniversityname(String universityname) {
        this.universityname = universityname;
    }

    public String getUniversitymail() {
        return universitymail;
    }

    public void setUniversitymail(String universitymail) {
        this.universitymail = universitymail;
    }

    public String getCoursename() {
        return coursename;
    }

    public void setCoursename(String coursename) {
        this.coursename = coursename;
    }




    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    public String getCgpa() {
        return cgpa;
    }

    public void setCgpa(String cgpa) {
        this.cgpa = cgpa;
    }

    public String getLinkedinlink() {
        return linkedinlink;
    }

    public void setLinkedinlink(String linkedinlink) {
        this.linkedinlink = linkedinlink;
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





    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getFacaulty() {
        return facaulty;
    }

    public void setFacaulty(String facaulty) {
        this.facaulty = facaulty;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getGitgublink() {
        return gitgublink;
    }

    public void setGitgublink(String gitgublink) {
        this.gitgublink = gitgublink;
    }

    public String getWebsitelink() {
        return websitelink;
    }

    public void setWebsitelink(String websitelink) {
        this.websitelink = websitelink;
    }

    public String getContactnumber() {
        return mobileNo;
    }

    public void setContactnumber(String contactnumber) {
        this.mobileNo = contactnumber;
    }

    public String getOthercontactnumber() {
        return othercontactnumber;
    }

    public void setOthercontactnumber(String othercontactnumber) {
        this.othercontactnumber = othercontactnumber;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }


    @Override
    public String toString() {
        return "Intern{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", createdTime=" + createdTime +
                ", createdBy='" + createdBy + '\'' +
                ", modifiedTime=" + modifiedTime +
                ", modifiedBy='" + modifiedBy + '\'' +
                ", version=" + version +
                ", gender='" + gender + '\'' +
                ", address='" + address + '\'' +
                ", facaulty='" + facaulty + '\'' +
                ", department='" + department + '\'' +
                ", dob='" + dob + '\'' +
                ", universityname='" + universityname + '\'' +
                ", universitymail='" + universitymail + '\'' +
                ", mail='" + mail + '\'' +
                ", coursename='" + coursename + '\'' +
                ", gitgublink='" + gitgublink + '\'' +
                ", skill='" + skill + '\'' +
                ", cgpa='" + cgpa + '\'' +
                ", linkedinlink='" + linkedinlink + '\'' +
                ", websitelink='" + websitelink + '\'' +
                ", facebooklink='" + facebooklink + '\'' +
                ", internPoolName='" + internPoolName + '\'' +
                ", status1=" + status1 +
                ", verification=" + verification +
                ", reasonSuspend='" + reasonSuspend + '\'' +
                ", reverify='" + reverify + '\'' +
                ", mobileNo='" + mobileNo + '\'' +
                ", othercontactnumber='" + othercontactnumber + '\'' +
                ", field='" + field + '\'' +
                '}';
    }
}



