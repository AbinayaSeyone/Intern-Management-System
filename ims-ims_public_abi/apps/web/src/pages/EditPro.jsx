import React from "react";
import NavBar from "../components/NavBar";
import  {useState} from 'react';
import {useMutation, gql} from '@apollo/client';
import SidebarI from "../components/SidebarI";
const CREATE_Intern =gql`
mutation createintern(
        $firstname:String!,
        $lastname:String!,
        $universityname:String!,
        $cgpa:String!,
        $contactnumber:String!,
        $othercontactnumber:String!,
        $facaulty:String!,
        $department:String!,
        $dob:String!,
        $linkedinlink:String!,
        $gitgublink:String!,
        $websitelink:String!,
        $facebooklink:String!,
        $field:String!,
        $address:String!,
        $mail:String!,
        $universitymail:String!,
        $skill:String!,
        $gender:String!
        ){

  createIntern(value:
       {
        firstname:$firstname,
        lastname:$lastname,
        universityname:$universityname,
        cgpa:$cgpa,
        contactnumber:$contactnumber,
        othercontactnumber:$othercontactnumber,
        facaulty:$facaulty,
        department:$department,
        dob:$dob,
        linkedinlink:$linkedinlink,
        gitgublink:$gitgublink,
        websitelink:$websitelink,
        facebooklink :$facebooklink,
        field:$field,
        address:$address,
        mail:  $mail,
        universitymail:$universitymail,
        skill: $skill,
        gender:$gender,

      })

  {
        id
        firstname
        lastname
        universityname
        cgpa
        contactnumber
        othercontactnumber
        facaulty
        department
        dob
        linkedinlink
        gitgublink
        websitelink
        facebooklink
        field
        address
        mail
        universitymail
        skill
        gender

  }
}`;

const EdtPro = () => {
  const [values,setValues] = useState({
    firstname :'',
    lastname:'',
    universityname:'',
    cgpa:'',
    contactnumber:'',
    othercontactnumber:'',
    facaulty:'',
    department:'',
    dob:'',
    linkedinlink:'',
    gitgublink:'',
    websitelink:'',
    facebooklink:'',
    field:'',
    address:'',
    mail:'',
    universitymail:'',
    skill:'',
    gender:'',
  });
  const [createIntern] = useMutation(CREATE_Intern, {
    onCompleted: (data) => {
      console.log('Resource created successfully:', data.createIntern);
    },
  });

  const [formSubmitted, setFormSubmitted] = useState(false); // added state variable

  const handleChange = (e) => {
    e.persist();
    setValues(values => ({
      ...values, [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createIntern({
      variables: {
        firstname:values.firstname,
        lastname:values.lastname,
        universityname:values.universityname,
        cgpa:values.cgpa,
        contactnumber:values.contactnumber,
        othercontactnumber:values.othercontactnumber,
        department:values.department,
        dob:values.dob,
        linkedinlink:values.linkedinlink,
        gitgublink:values.gitgublink,
        websitelink:values.websitelink,
        facebooklink:values.facebooklink,
        field:values.field,
        address:values.address,
        facaulty:values.facaulty,
        mail:values. mail,
        universitymail:values.universitymail,
        skill:values.skill,
        gender:values.gender,
      },
    });
    setFormSubmitted(true); // set formSubmitted to true
  };

  if (formSubmitted) {

    return (<div className="add-resource">
      <section className="h-100">
        <div className="container h-200">
          <div className="row justify-content-md-center h-100">
            <div className="card-wrapper">
              <div className="card fat">
                <div className="card-body">
                  <h4 className="card-title">Resource added successfully!</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);
  }

  return (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <div className="row">
            <div className="col-md-1">


            </div>
            <div className="col-md-10 mt-4">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div>
                      <label htmlFor="firstname" className="form-label">
                        FirstName
                      </label>
                      <input
                          type="text"
                          className="form-control"
                          id="firstname"
                          placeholder="Enter First Name "
                          onChange={handleChange} name="firstname" value={values.firstname} required
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="lastname" className="form-label">
                        LastName
                      </label>
                      <input
                          type="text"
                          className="form-control"
                          id="lastname"
                          placeholder="Enter Last Name "
                          onChange={handleChange} name="lastname" value={values.lastname} required
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="contactNumber" className="form-label">
                        ContactNumber
                      </label>
                      <input
                          type="text"
                          className="form-control"
                          id="contactNumber"
                          placeholder="Enter Your Contact Number "
                          onChange={handleChange} name="contactnumber" value={values.contactnumber} required
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="othercontactnumber" className="form-label">
                        Other ContactNumber
                      </label>
                      <input
                          type="text"
                          className="form-control"
                          id="othercontactnumber"
                          placeholder="Enter Your 2nd Contact Number "
                          onChange={handleChange} name="othercontactnumber" value={values.othercontactnumber} required
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="mail" className="form-label">
                        Email
                      </label>
                      <input
                          type="text"
                          className="form-control"
                          id="mail"
                          placeholder="Enter Your Email ID "
                          onChange={handleChange} name="mail" value={values.mail} required
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="universitymail" className="form-label">
                        UniversityEmail
                      </label>
                      <input
                          type="text"
                          className="form-control"
                          id="universitymail"
                          placeholder="Enter Your UniversityEmail ID "
                          onChange={handleChange} name="universitymail" value={values.universitymail} required
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="gender" className="form-label">
                        Gender
                      </label>

                      <select
                          className="form-select"
                          aria-label="Default select example"
                      >
                        <option selected>Select your gender</option>
                        <option value={values.gender}>Male</option>
                        <option value={values.gender}>Female</option>
                        <option value={values.gender}>Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="1234 Main St"
                          onChange={handleChange} name="address" value={values.address} required
                      ></input>
                    </div>

                    <div>
                      <label htmlFor="universityname" className="form-label">
                        University
                      </label>
                      <input
                          type="text"
                          className="form-control"
                          id="universityname"
                          placeholder="Enter Your university Name "
                          onChange={handleChange} name="universityname" value={values.universityname} required
                      ></input>
                    </div>

                    <div>
                      <label htmlFor="department" className="form-label">
                        Department
                      </label>
                      <input
                          type="text"
                          className="form-control"
                          id="department"
                          placeholder="Enter Your department Name "
                          onChange={handleChange} name="department" value={values.department} required
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div>
                      <label htmlFor="dob" className="form-label">
                        D.O.B
                      </label>
                      <input
                          type="date"
                          className="form-control"
                          id="dob"
                          placeholder="Enter Your Faculty Name "
                          onChange={handleChange} name="dob" value={values.dob} required
                      ></input>
                    </div>


                    <div>
                      <label htmlFor="facaulty" className="form-label">
                        Faculty
                      </label>
                      <input
                          type="text"
                          className="form-control"
                          id="facaulty"
                          placeholder="Enter Your Faculty Name "
                          onChange={handleChange} name="facaulty" value={values.facaulty} required
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="skill" className="form-label">
                        About Skils
                      </label>
                      <textarea
                          className="form-control"
                          placeholder="Tel About Your Skils"
                          id="skill"
                          onChange={handleChange} name="skill" value={values.skill} required
                      ></textarea>

                    </div>
                    <div>
                      <label htmlFor="field" className="form-label">
                        Field
                      </label>
                      <input
                          type="text"
                          className="form-control"
                          id="field"
                          placeholder="Enter Your Field "
                          onChange={handleChange} name="field" value={values.field} required
                      ></input>
                    </div>

                    <div>
                      <label htmlFor="gitgublink" className="form-label">
                        Gitgub
                      </label>
                      <input
                          type="text"
                          className="form-control"
                          id="gitgublink"
                          placeholder="Enter Your gitgub link "
                          onChange={handleChange} name="gitgublink" value={values.gitgublink} required
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="websitelink" className="form-label">
                        Website
                      </label>
                      <input
                          type="text"
                          className="form-control"
                          id="websitelink"
                          placeholder="Enter Your website link "
                          onChange={handleChange} name="websitelink" value={values.websitelink} required
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="linkedinlink" className="form-label">
                        Linkedin
                      </label>
                      <input
                          type="text"
                          className="form-control"
                          id="linkedinlink"
                          placeholder="Enter Your Linkedin ID "
                          onChange={handleChange} name="linkedinlink" value={values.linkedinlink} required
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="facebooklink" className="form-label">
                        FaceBook
                      </label>
                      <input
                          type="text"
                          className="form-control"
                          id="facebooklink"
                          placeholder="Enter Your Face book ID "
                          onChange={handleChange} name="facebooklink" value={values.facebooklink} required
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="cgpa" className="form-label">
                        GPA
                      </label>
                      <input
                          type="text"
                          className="form-control"
                          id="cgpa"
                          placeholder="Enter Your Current Total GPA "
                          onChange={handleChange} name="cgpa" value={values.cgpa} required
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="Upload CV" className="form-label">
                        Upload CV
                      </label>
                      <input
                          className="form-control form-control-sm"
                          id="Upload CV"
                          type="file"
                          onChange={handleChange} name="Upload CV" value={values.institution} required
                      ></input>
                    </div>
                    <div>
                      <div className="row">
                        <div className="col-md-9"></div>
                        <div className="col-md-3">
                          <div className="col-md-3 mt-3">
                            <button variant="success" type="submit" className="btn btn-primary">
                              submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default EdtPro;
