import NaviBar from "../components/NaviBar";
import React, {useState} from 'react';
import '../index.css';
import {useMutation, gql} from '@apollo/client';
import swal from "sweetalert";
import validator from "validator"
import '../App.css';
import {storage} from "../FireBase config/firebase";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid";


const CREATE_Internpool = gql`
         mutation createInternPoolOpening($institution:String!,$department:String!,$name:String!,$role:String!,$openingDate:String!,$duration:String!,$description:String!,$url:String!){
         createInternPoolOpening(value:{institution:$institution,department:$department,name:$name,role:$role,openingDate:$openingDate,duration:$duration,description:$description,url:$url}){
         id,
         institution,
         department,
         name,
         role,
         openingDate,
         duration,
         description
         url
        }
        }
         `;

function Postinternpool() {

    const [values, setValues] = useState({
        institution: '',
        department: '',
        name: '',
        role: '',
        openingDate: '',
        duration: '',
        description: '',
        url: ''

    });

    // for the image upload

    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState("");
    // const imagesListRef = ref(storage, "images/");

    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images1/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                // setImageUrls((prev) => [...prev, url]);
                setImageUrls(url);
            });
        });

    };

    const [data, setData] = useState(null);

    const [createInternPoolOpening] = useMutation(CREATE_Internpool, {
        onCompleted: (data) => {
            console.log('Resource created successfully:', data.createInternPoolOpening);
            setData(data.createInternPoolOpening);
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
            const regex = /^[A-Z][A-Za-z\s]+$/; //contains alphabet,space
            if (!validator.matches(values.institution, regex)) {
                swal({
                    icon: "warning",
                    text: "Institution name must start with a capital letter and contain only alphabet letters.",
                });
                return;
            }
            if (!validator.matches(values.department, regex)) {
                swal({
                    icon: "warning",
                    text: "Department name must start with a capital letter and contain only alphabet letters.",
                });
                return;
            }
            const regexDuration = /^(0?[1-9]|1[0-2])$/;
            if (!validator.matches(values.duration, regexDuration)) {
                swal({
                    icon: "warning",
                    text: "Duration must be a 2-digit month without spaces or dashes.",
                });
                return;
            }
            if (!validator.matches(values.name, regex)) {
                swal({
                    icon: "warning",
                    text: "Course name must start with a capital letter and contain only alphabet letters.",
                });
                return;
            }

            if (!validator.matches(values.role, regex)) {
                swal({
                    icon: "warning",
                    text: "Role name must start with a capital letter and contain only alphabet letters.",
                });
                return;
            }
            // if (!validator.matches(values.description, regex)) {
            //     swal({
            //         icon: "warning",
            //         text: "Description name must start with a capital letter and contain only alphabet letters.",
            //     });
            //     return;
            // }

            createInternPoolOpening({
                variables: {
                    institution: values.institution,
                    department: values.department,
                    name: values.name,
                    role: values.role,
                    openingDate: values.openingDate,
                    duration: values.duration,
                    description: values.description,
                    url: imageUrls
                },
            });
            setFormSubmitted(true); // set formSubmitted to true
        }
    ;

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
                window.location.href = `/detailsofpublisher/${data.id}`;
            }
        });
    }


    // Render a success message after the form is submitted
    if (formSubmitted) {
        handleClick()
    }


    return (
        <React.Fragment>
            <NaviBar></NaviBar>

            <div className="card " style={{
                backgroundColor: "rgba(39, 207, 190, 0.47)", borderBlock: "2px solid #CCCCCC", boxSizing: "border-box"
            }}>
                <div className="card-body">
                    <h1 className="text-center">Post an Intern Pool Opening</h1>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center ">
                    {/*form started*/}
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-md-1"></div>
                        {/*//institution*/}
                        <div className="col-md-2">
                            <label htmlFor="institution" className="form-label">Institute/University</label>
                        </div>
                        <div className="col-md-2">
                            <input id="institution" type="text" className="form-control "
                                   style={{borderColor: "rgba(39, 207, 190, 0.47)"}}
                                   onChange={handleChange} name="institution" value={values.institution} required/>
                        </div>
                        {/*<p className="errorMessage">{errors.institution?.message}</p>*/}
                        {/*date*/}
                        <div className="col-md-2"></div>
                        <div className="col-md-2"
                        >
                            <label htmlFor="OpeningDate" className="form-label">Opening Date</label>
                        </div>

                        <div className="col-md-2">
                            <input id="OpeningDate" type="date" className="form-control" min={minDate} max={maxDate}
                                   onChange={handleChange} name="openingDate" value={values.openingDate} required/>
                        </div>
                        {/*<p classNme="ui-state-error-text">{errors.openingDate?.message}</p>*/}
                        <div className="col-md-1"></div>
                        {/* Next label */}
                        {/*//department*/}
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="Department" className="form-label">Department</label>
                        </div>
                        <div className="col-md-2">
                            <input id="Department" type="text" className="form-control" onChange={handleChange}
                                   name="department" value={values.department} required/>
                        </div>
                        {/*<p className="ui-state-error-text">{errors.department?.message}</p>*/}
                        {/*duration*/}
                        <div className="col-md-2"></div>
                        <div className="col-md-2">
                            <label htmlFor="duration" className="form-label">Duration</label>
                        </div>

                        <div className="col-md-2">
                            <input id="duration" type="text" className="form-control" onChange={handleChange}
                                   name="duration" value={values.duration} required/>
                        </div>
                        {/*<p className="ui-state-error-text">{errors.duration?.message}</p>*/}
                        <div className="col-md-1"></div>
                        {/* Next label */}
                        {/*course*/}
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <label htmlFor="course" className="form-label">Course</label>
                        </div>
                        <div className="col-md-2">
                            <input id="course" type="text" className="form-control" onChange={handleChange} name="name"
                                   value={values.name} required/>
                        </div>

                        {/*location*/}
                        <div className="col-md-2"></div>
                        <div className="col-md-2">
                            <label htmlFor="role" className="form-label">Role</label>
                        </div>
                        <div className="col-md-2">
                            <input id="role" type="text" className="form-control" onChange={handleChange} name="role"
                                   value={values.role} required/>
                        </div>

                        {/*description*/}
                        <div className="col-md-2"></div>

                        <div className="row mt-3">
                            <div className="col-md-1"></div>
                            <div className="col-md-2">
                                <label htmlFor="description" className="form-label">Description</label>
                            </div>

                            <div className="col-md-8">
                                {/* <input type="text" className="form-control" rows="3" id="inputPassword4" /> */}
                                <textarea id="description" className="form-control" rows="3" onChange={handleChange}
                                          name="description" value={values.description} required></textarea>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-1"></div>
                            <div className="col-md-2">
                                <label htmlFor="inputPassword4" className="form-label">Cover Image</label>
                            </div>
                            <div className="col-md-8">
                                <div className="input-group mb-3">
                                    {/*<input type="file" className="form-control" id="inputGroupFile02"/>*/}
                                    <input
                                        type="file"
                                        className="form-control"
                                        onChange={(event) => {
                                            setImageUpload(event.target.files[0]);
                                        }}
                                    />

                                    <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9"></div>
                        <div className="col-md-9"></div>
                        <div className="col-3">
                            <button variant="success" type="submit" className="btn btn-primary "
                                    onClick={uploadFile}
                                    style={{
                                        backgroundColor: "rgba(39, 207, 190, 0.47)", borderColor: "#CCCCCC"
                                    }}>Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>);
}

export default Postinternpool;