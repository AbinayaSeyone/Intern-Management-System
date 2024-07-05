import React, {useState}from "react";
import NavbarC from "../components/NavbarC";
import {gql, useMutation} from "@apollo/client";
import swal from "sweetalert";
import {useLocation} from "react-router-dom";

const CREATE_PostVacancy = gql`
         mutation createVacancy($title:String!,$type:String!,$field:String!,$workPlace:String!,$location:String!,$noofposition:String!,$skills:String!,$description:String!,$createdBy:String!,$closingdate:String!){
         createVacancy(value:{title:$title,type:$type,field:$field,workPlace:$workPlace,location:$location,noofposition:$noofposition,skills:$skills,description:$description,createdBy:$createdBy,closingdate:$closingdate}){
         id,
         title,
         type,
         field,
         workPlace,
         location,
         noofposition,
         skills,
         description,
         closingdate,
         createdBy
        }
        }
         `;


function PostVacancyC() {
    const location = useLocation();

    const loginResponse = new URLSearchParams(location.search).get('loginResponse');
    const parsedLoginResponse = JSON.parse(loginResponse);

    // Extract the username from the login response
    const userId = parsedLoginResponse.id;


    const [values, setValues] = useState({
        title:'',
        type:'',
        field:'',
        workPlace:'',
        location:'',
        noofposition:'',
        skills:'',
        closingdate:'',
        description:''
    });




    const [postVacancy] = useMutation(CREATE_PostVacancy, {
        onCompleted: (data) => {

            console.log('Resource created successfully:', data.postVacancy);
        },
    });

    const [formSubmitted, setFormSubmitted] = useState(false); // added state variable

    // to set calender's maximum and minimum date
    const currentYear = new Date().getFullYear();
    const maxDate = `${currentYear}-12-31`; // Set maximum date to last day of current year
    // const minDate = new Date(); // Set minimum date to first day of previous year
    const minDate = new Date().toISOString().split("T")[0];

    const handleChange = (e) => {
        e.persist();

        setValues(values => ({
            ...values, [e.target.name]: e.target.value

        }));

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        postVacancy({
            variables: {
                title:values.title,
                type:values.type,
                field:values.field,
                workPlace:values.workPlace,
                location:values.location,
                noofposition:values.noofposition,
                skills:values.skills,
                description:values.description,
                closingdate:values.closingdate,
                createdBy: userId
            },
        });
        setFormSubmitted(true); // set formSubmitted to true
    };
    function handleClick() {
        swal({
            title: "Record Created!",
            text: "Your Internpool opening will be posted soon!",
            icon: "success",
            buttons: {
                enter: {
                    text: "Okay",
                    value: true,
                },
                // cancel: "Cancel",
            },
        }).then((value) => {
            if (value) {
                window.location.href = "/ComapnyHome";
            }
        });
    }
    // Render a success message after the form is submitted
    if (formSubmitted) {
        handleClick();
    }


    return (
        <React.Fragment>
            <div>
                <NavbarC/>
                <div className="row m-0">

                    <div className="col-md-10">
                        <div className="row justify-content-center mt-5"  style={{marginLeft: "250px"}}>
                            <div className="col-md-10" style={{backgroundColor:"#50E2CC17",borderRadius:"10px"}}>
                                <h1 align="center">Post Vacancy </h1>
                            </div>
                        </div>
                        <form className="row g-3 mt-lg-5" onSubmit={handleSubmit}>
                            <div className="col-md-3"></div>
                            <div className="col-md-2">
                                <label htmlFor="title" className="form-label">Title</label>
                            </div>
                            <div className="col-md-2">
                                <input id="title" type="text" className="form-control"  onChange={handleChange} name="title" value={values.title} required />
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-2">
                                <label htmlfor="type" className="form-label">Type</label>
                            </div>
                            <div className="col-md-2">
                                <input id="type" type="text" className="form-control"  onChange={handleChange} name="type" value={values.type} required />                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-1"></div>
                            <div className="col-md-2">
                                <label htmlfor="field" className="form-label">Field</label>
                            </div>
                            <div className="col-md-2">
                                <input id="field" type="text" className="form-control"  onChange={handleChange} name="field" value={values.field} required />
                            </div>

                            <div className="col-md-1"></div>
                            <div className="col-md-2">
                                <label htmlfor="workplace" className="form-label">Work place Type</label>
                            </div>

                            <div className="col-md-2">
                                <input id="workplace" type="text" className="form-control"  onChange={handleChange} name="workPlace" value={values.workPlace} required />
                            </div>
                            <div className="col-md-2"></div>
                            {/* Next label */}

                            <div className="col-md-1"></div>
                            <div className="col-md-2">
                                <label htmlfor="location" className="form-label">Region</label>
                            </div>
                            <div className="col-md-2">
                                <input id="location" type="text" className="form-control"  onChange={handleChange} name="location" value={values.location} required />
                            </div>

                            <div className="col-md-1"></div>
                            <div className="col-md-2">
                                <label htmlfor="noofposition" className="form-label">No Of Positions</label>
                            </div>

                            <div className="col-md-2">
                                <input id="noofposition" type="text" className="form-control"  onChange={handleChange} name="noofposition" value={values.noofposition} required />

                            </div>
                            <div className="col-md-2"></div>
                            {/* Next label */}

                            <div className="col-md-1"></div>
                            <div className="col-md-2">
                                <label htmlfor="postdate" className="form-label">Closing date</label>
                            </div>
                            <div className="col-md-2">
                                <input id="closingdate" type="date" className="form-control" min={minDate} max={maxDate}
                                       onChange={handleChange} name="closingdate" value={values.closingdate} required/>
                            </div>


                            <div className="col-md-1"></div>
                            <div className="col-md-2">
                                <label htmlFor="skills" className="form-label">Skills</label>
                            </div>
                            <div className="col-md-2">
                                <input id="skills" type="text" className="form-control"  onChange={handleChange} name="skills" value={values.skills} required />
                            </div>



                            <div className="row mt-3">
                                <div className="col-md-3"></div>
                                <div className="col-md-2">
                                    <label htmlFor="description" className="form-label">Description</label>
                                </div>

                                <div className="col-md-7">
                                    {/* <input type="text" className="form-control" rows="3" id="inputPassword4" /> */}
                                    <textarea id="description" className="form-control" rows="3" onChange={handleChange}
                                              name="description" value={values.description} required></textarea>
                                </div>
                            </div>

                            {/*<div className="col-md-2"></div>*/}
                            {/*<div className="col-md-1"></div>*/}
                            {/*<div className="col-md-2">*/}
                            {/*    <label htmlFor="inputEmail4" className="form-label">Short Description</label>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-2">*/}
                            {/*    <input type="text" className="form-control" id="inputEmail4"/>*/}
                            {/*</div>*/}



                            {/*<div className="col-md-1"></div>*/}
                            {/*<div className="col-md-2">*/}
                            {/*    <label for="inputPassword4" className="form-label">Long Description</label>*/}
                            {/*</div>*/}

                            {/*<div className="col-md-2">*/}
                            {/*    <textarea className="form-control" id="inputPassword4" rows="3"onChange={handleChange} name="skills" value={values.skills} required/>*/}
                            {/*</div>*/}



                            <div className="col-md-9"></div>
                            <div className="col-3"></div>
                            <div className="col-md-9"></div>
                            <div className="col-3">


                                <button type="submit" className="btn btn-primary " style={{
                                    backgroundColor: "rgba(39, 207, 190, 0.47)",
                                    borderColor: "#CCCCCC"
                                }}>Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}
export default PostVacancyC;
