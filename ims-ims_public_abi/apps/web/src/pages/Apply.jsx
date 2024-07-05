// import React, {useState} from "react";
// import {Link, useLocation, useParams} from "react-router-dom";
// import NavBar from "../components/NavBar";
// import SidebarI from "../components/SidebarI";
// import {gql, useMutation, useQuery} from "@apollo/client";
// import companylogo from "../images/companylogo.jpg";
// import {SocialIcon} from "react-social-icons";
// import descriptioncompany from "../images/descriptioncompany.jpg";
// import addtowishlist from "../images/addtowishlist.png";
// import applynow from "../images/applynow.png";
// import swal from "sweetalert";
//
// const AplyVac = () => {
//
//     const location = useLocation();
//
//     const loginResponse = new URLSearchParams(location.search).get('loginResponse');
//     const parsedLoginResponse = JSON.parse(loginResponse);
//
//     // Extract the username from the login response
//     const userId = parsedLoginResponse.id;
//
//     const vacancyId = (useParams("vacancyId")).vacancyId;
//
//
//     const createWishlist = gql`
//    mutation createApplicant($vacancyId:String!,$internId:String!,$isApplied:Boolean!,$isSelected:Boolean!,$isRejected:Boolean!,$wishlist:Boolean!){
//         createApplicant(
//             value: {
//             vacancyId:$vacancyId
//             internId:$internId
//             isApplied:$isApplied
//             isSelected:$isSelected
//             isRejected:$isRejected
//             wishlist:$wishlist
//         }
//     ) {
//             id
//             vacancyId
//             internId
//             isApplied
//             isSelected
//             isRejected
//             wishlist
//         }
//     }
//    `;
//
//     const [values, setValues] = useState({
//         vacancyId: '',
//         internId: '',
//         isApplied: null,
//         isSelected: null,
//         isRejected: null,
//         wishlist: null
//
//     });
//
//     const [createApplicant] = useMutation(createWishlist, {
//         onCompleted: (data) => {
//             console.log('Resource created successfully:', data.createApplicant);
//         },
//     });
//
//     const [formSubmitted, setFormSubmitted] = useState(false);
//
//
//     const handleClick = () => {
//         createApplicant({
//             variables: {
//                 vacancyId: vacancyId,
//                 internId: userId,
//                 isApplied: false,
//                 isSelected: false,
//                 isRejected: false,
//                 wishlist: true
//             },
//         });
//         setFormSubmitted(true);
//     };
//
//
//     function handleClickWishlist() {
//         swal({
//             title: "Added to wishlist!",
//             text: "The vacancy has been added to the wishlist!",
//             icon: "success",
//             buttons: {
//                 enter: {
//                     text: "Okay",
//                     value: true,
//                 },
//                 // cancel: "Cancel",
//             },
//         }).then((value) => {
//             if (value) {
//                 // window.location.href = "/Apply/:vacancyId";
//             }
//         });
//     }
//
//     function handleClickApply() {
//
//
//         swal({  //Displaying an alert message using Sweetalert library
//             title: "Confirm",
//             text: "Are you absolutely sure you want to permanently delete this Department and all the Jobtitles it contains?",
//             icon: "warning",
//             buttons: true,
//             dangerMode: true,
//         })
//             .then((willDelete) => {
//                 if (willDelete) {
//                     createApplicant({
//                         variables: {
//                             vacancyId: vacancyId,
//                             internId: userId,
//                             isApplied: true,
//                             isSelected: false,
//                             isRejected: false,
//                             wishlist: false
//                         },
//                     });
//                     swal({
//                         title: "Vacancy Applied All the best!",
//                         text: "The vacancy has been applied!",
//                         icon: "success",
//                     });
//                 } else {
//                     swal({
//                         title: "Try Again!",
//                         icon: "warning",
//                     });
//                 }
//             });
//     }
//
//
//     // Render a success message after the form is submitted
//     if (formSubmitted) {
//         handleClickWishlist()
//     }
//
//
//
//     const clickOneVacancy_Company = gql`
//                     query {
//                     queryVacancy(query: {id:{operator:eq,value:"${vacancyId}"}}) {
//                     id,
//                     name,
//                     noofposition,
//                     field,
//                     description,
//                     skills
//                     __externalRef{
//                     ... on Company {
//                     id,
//                     name,
//                     address,
//                     email,
//                     websiteLink,
//                     instagramLink,
//                     facebookLink,
//                     twitterLink,
//                     linkedInLink
//                 }
//                 }
//                 }
//                 }
//                     `;
//
//
//     const {loading, data} = useQuery(clickOneVacancy_Company);
//
//     if (loading) return <p>Loading...</p>
//     const companyData = data?.queryVacancy[0].__externalRef[0];
//     const vacancyData = data?.queryVacancy[0];
//     if (!data) return null;
//     return (
//         <div>
//             <div>
//                 {" "}
//                 <NavBar/>
//             </div>
//             <div className="row">
//                 <div className="col-md-2">
//                     {" "}
//                     <SidebarI/>
//                 </div>
//                 <div className="col-md-10 mt-5">
//                     <div className="card " style={{
//                         backgroundColor: " rgba(80, 226, 204, 0.92)",
//                         borderBlock: "2px solid #CCCCCC",
//                         boxSizing: "border-box"
//                     }}>
//                         <div className="card-body">
//                             <h1 className="text-center" style={{color: "white"}}>{companyData?.name}</h1>
//                             <h1 className="text-center" style={{color: "white"}}>{vacancyData.name}</h1>
//
//                         </div>
//                     </div>
//
//                     <div className="row">
//
//                         <div className="col-md-6">
//                             <div className="card mt-5"
//                                  style={{backgroundColor: " rgba(80, 226, 204, 0.07)", borderColor: "#CCCCCC"}}>
//                                 <div className="card-body">
//                                     <div className="row">
//                                         <div className="col-md-4 mt-3">
//                                             <img src={companylogo} alt="companyImage" className="rounded-circle"
//                                                  style={{"width": "140px"}}></img>
//                                         </div>
//                                         <div className="col-md-8 mt-3">
//                                             <h4 className="card-title">{vacancyData.name}</h4>
//                                             <h5 className="card-title">{companyData.name}</h5>
//                                             <p className="card-title" style={{color: "#1DD3B8"}}>{vacancyData.field}</p>
//                                             <p className="card-title">No of positions:{vacancyData.noofposition}</p>
//
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//
//                         <div className="col-md-1"></div>
//                         <div className="col-md-5">
//                             <div className="card mt-5" style={{borderColor: " rgba(80, 226, 204, 0.92)"}}>
//                                 <div className="card-body">
//                                     <div className="row justify-content-center">
//                                         <div className="col-md-10">
//                                             <h6 className="card-title"
//                                                 style={{color: "#CCCCCC", textAlign: "center"}}>Contact
//                                                 Details</h6>
//                                             <h3></h3>
//                                         </div>
//
//                                         <div className="col-md-10 justify-content-center">
//                                             <center><a className="card-title" style={{color: "#CCCCCC",}}
//                                                        href={companyData.websiteLink}><h6 style={{
//                                                 background: "rgba(80, 226, 204, 0.24)",
//                                                 borderRadius: "10px",
//                                                 Align: "center"
//                                             }}>Visit to company page</h6></a></center>
//                                             <h3></h3>
//                                         </div>
//                                         <div className="col-md-10 mt-1">
//                                             <h6 className="card-title" style={{
//                                                 color: "#CCCCCC",
//                                                 background: "rgba(80, 226, 204, 0.24)",
//                                                 borderRadius: "10px",
//                                                 textAlign: "center"
//                                             }}>{companyData.email}</h6>
//
//                                         </div>
//
//                                     </div>
//                                     <div className="row justify-content-center mt-2">
//                                         <div className="col-md-2">
//                                             <SocialIcon url={companyData.twitterLink}/>
//                                         </div>
//                                         <div className="col-md-2">
//                                             <SocialIcon url={companyData.instagramLink}/>
//                                         </div>
//                                         <div className="col-md-2">
//                                             <SocialIcon url={companyData.facebookLink}/>
//                                         </div>
//                                         <div className="col-md-2">
//                                             <SocialIcon url={companyData.linkedInLink}/>
//                                         </div>
//                                         <h3></h3>
//                                     </div>
//
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//
//                     <div className="row">
//                         <div className="col-md-6">
//                             <div className="card mt-5"
//                                  style={{backgroundColor: " rgba(80, 226, 204, 0.07)", borderColor: "#CCCCCC"}}>
//                                 <img className="card-img" src={descriptioncompany} alt="Card image"
//                                      style={{opacity: "20%"}}></img>
//                                 <div className="card-img-overlay">
//                                     <div className="card-body">
//                                         <h4 className="card-title">Description</h4>
//                                         <p className="card-text">{vacancyData.description}</p>
//                                         <h4 className="card-text">Skills</h4>
//                                         <ul className="card-text" style={{listStyleType: "disc"}}>
//                                             <li>{vacancyData.skills}</li>
//                                             <li>{vacancyData.skills}</li>
//                                             <li>{vacancyData.skills}</li>
//                                             <li>{vacancyData.skills}</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-1"></div>
//                         <div className="col-md-5 ">
//                             <div className="card mt-5" style={{borderColor: " rgba(80, 226, 204, 0.92)"}}>
//                                 <div className="card-body">
//                                     <div className="row justify-content-center mt-1">
//                                         <div className="col-md-4 mt-3">
//                                             <img src={addtowishlist} alt="companyImage"
//                                                  style={{"width": "100px"}}></img>
//                                         </div>
//                                     </div>
//                                     <div className="row justify-content-center ">
//                                         <div className="col-md-6 mt-3">
//                                             <button type="submit" onClick={handleClick}
//                                                     className="btn form-control  border border-secondary "
//                                                     style={{background: "#000000"}}>
//                                                 <h6 style={{color: "#FFFFFF"}}>Add to wishlist</h6>
//                                             </button>
//                                         </div>
//                                     </div>
//                                     <div className="row justify-content-center mt-4">
//                                         <div className="col-md-4 mt-3">
//                                             <img src={applynow} alt="companyImage" className="rounded-circle"
//                                                  style={{"width": "100px"}}></img>
//                                         </div>
//                                     </div>
//                                     <div className="row justify-content-center ">
//                                         <div className="col-md-6 mt-3">
//                                             <button type="submit" onClick={handleClickApply}
//                                                     className="btn form-control greenborder"
//                                                     style={{borderColor: "#45B8AC"}}>
//                                                 <h6>Apply Now</h6>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//
//     );
// };
//
// export default AplyVac;

import React, {useState} from "react";
import {Link, useLocation, useParams} from "react-router-dom";
import NavBar from "../components/NavBar";
import SidebarI from "../components/SidebarI";
import {gql, useMutation, useQuery} from "@apollo/client";
import companylogo from "../images/companylogo.jpg";
import {SocialIcon} from "react-social-icons";
import descriptioncompany from "../images/descriptioncompany.jpg";
import addtowishlist from "../images/addtowishlist.png";
import applynow from "../images/applynow.png";
import swal from "sweetalert";

const AplyVac = () => {

    const location = useLocation();

    const loginResponse = new URLSearchParams(location.search).get('loginResponse');
    const parsedLoginResponse = JSON.parse(loginResponse);

    // Extract the username from the login response
    const userId = parsedLoginResponse.id;

    const vacancyId = (useParams("vacancyId")).vacancyId;


    const createWishlist = gql`
   mutation createApplicant($vacancyId:String!,$internId:String!,$isApplied:Boolean!,$isSelected:Boolean!,$isRejected:Boolean!,$wishlist:Boolean!){
        createApplicant(
            value: {
            vacancyId:$vacancyId
            internId:$internId
            isApplied:$isApplied
            isSelected:$isSelected
            isRejected:$isRejected
            wishlist:$wishlist
        }
    ) {
            id
            vacancyId
            internId
            isApplied
            isSelected
            isRejected
            wishlist
        }
    }
   `;

    const [values, setValues] = useState({
        vacancyId: '',
        internId: '',
        isApplied: null,
        isSelected: null,
        isRejected: null,
        wishlist: null

    });

    const [createApplicant] = useMutation(createWishlist, {
        onCompleted: (data) => {
            console.log('Resource created successfully:', data.createApplicant);
        },
    });

    const [formSubmitted, setFormSubmitted] = useState(false);


    const handleClick = () => {
        createApplicant({
            variables: {
                vacancyId: vacancyId,
                internId: userId,
                isApplied: false,
                isSelected: false,
                isRejected: false,
                wishlist: true
            },
        });
        setFormSubmitted(true);
    };


    function handleClickWishlist() {
        swal({
            title: "Added to wishlist!",
            text: "The vacancy has been added to the wishlist!",
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
                // window.location.href = "/Apply/:vacancyId";
            }
        });
    }

    function handleClickApply() {


        swal({  //Displaying an alert message using Sweetalert library
            title: "Confirm",
            text: "Are you absolutely sure you want to apply the Vacancy?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    createApplicant({
                        variables: {
                            vacancyId: vacancyId,
                            internId: userId,
                            isApplied: true,
                            isSelected: false,
                            isRejected: false,
                            wishlist: false
                        },
                    });
                    swal({
                        title: "Vacancy Applied All the best!",
                        text: "The vacancy has been applied!",
                        icon: "success",
                    });
                } else {
                    swal({
                        title: "Try Again!",
                        icon: "warning",
                    });
                }
            });
    }


    // Render a success message after the form is submitted
    if (formSubmitted) {
        handleClickWishlist()
    }



    const clickOneVacancy_Company = gql`
                    query {
                    queryVacancy(query: {id:{operator:eq,value:"${vacancyId}"}}) {
                    id,
                    name,
                    noofposition,
                    field,
                    description,
                    skills
                    __externalRef{
                    ... on Company {
                    id,
                    name,
                    address,
                    email,
                    websiteLink,
                    instagramLink,
                    facebookLink,
                    twitterLink,
                    linkedInLink
                }
                }
                }
                }
                    `;


    const {loading, data} = useQuery(clickOneVacancy_Company);

    if (loading) return <p>Loading...</p>
    const companyData = data?.queryVacancy[0].__externalRef[0];
    const vacancyData = data?.queryVacancy[0];
    if (!data) return null;
    return (
        <div>
            <div>
                {" "}
                <NavBar/>
            </div>
            <div className="row">
                <div className="col-md-1">
                    {" "}

                </div>
                <div className="col-md-10 mt-5">
                    <div className="card " style={{
                        backgroundColor: " rgba(80, 226, 204, 0.92)",
                        borderBlock: "2px solid #CCCCCC",
                        boxSizing: "border-box"
                    }}>
                        <div className="card-body">
                            <h1 className="text-center" style={{color: "white"}}>{companyData?.name}</h1>
                            <h1 className="text-center" style={{color: "white"}}>{vacancyData.name}</h1>

                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-6">
                            <div className="card mt-5"
                                 style={{backgroundColor: " rgba(80, 226, 204, 0.07)", borderColor: "#CCCCCC"}}>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4 mt-3">
                                            <img src={companylogo} alt="companyImage" className="rounded-circle"
                                                 style={{"width": "140px"}}></img>
                                        </div>
                                        <div className="col-md-8 mt-3">
                                            <h4 className="card-title">{vacancyData.name}</h4>
                                            <h5 className="card-title">{companyData.name}</h5>
                                            <p className="card-title" style={{color: "#1DD3B8"}}>{vacancyData.field}</p>
                                            <p className="card-title">No of positions:{vacancyData.noofposition}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <div className="card mt-5" style={{borderColor: " rgba(80, 226, 204, 0.92)"}}>
                                <div className="card-body">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10">
                                            <h6 className="card-title"
                                                style={{color: "#CCCCCC", textAlign: "center"}}>Contact
                                                Details</h6>
                                            <h3></h3>
                                        </div>

                                        <div className="col-md-10 justify-content-center">
                                            <center><a className="card-title" style={{color: "#CCCCCC",}}
                                                       href={companyData.websiteLink}><h6 style={{
                                                background: "rgba(80, 226, 204, 0.24)",
                                                borderRadius: "10px",
                                                Align: "center"
                                            }}>Visit to company page</h6></a></center>
                                            <h3></h3>
                                        </div>
                                        <div className="col-md-10 mt-1">
                                            <h6 className="card-title" style={{
                                                color: "#CCCCCC",
                                                background: "rgba(80, 226, 204, 0.24)",
                                                borderRadius: "10px",
                                                textAlign: "center"
                                            }}>{companyData.email}</h6>

                                        </div>

                                    </div>
                                    <div className="row justify-content-center mt-2">
                                        <div className="col-md-2">
                                            <SocialIcon url={companyData.twitterLink}/>
                                        </div>
                                        <div className="col-md-2">
                                            <SocialIcon url={companyData.instagramLink}/>
                                        </div>
                                        <div className="col-md-2">
                                            <SocialIcon url={companyData.facebookLink}/>
                                        </div>
                                        <div className="col-md-2">
                                            <SocialIcon url={companyData.linkedInLink}/>
                                        </div>
                                        <h3></h3>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="card mt-5"
                                 style={{backgroundColor: " rgba(80, 226, 204, 0.07)", borderColor: "#CCCCCC"}}>
                                <img className="card-img" src={descriptioncompany} alt="Card image"
                                     style={{opacity: "20%"}}></img>
                                <div className="card-img-overlay">
                                    <div className="card-body">
                                        <h4 className="card-title">Description</h4>
                                        <p className="card-text">{vacancyData.description}</p>
                                        <h4 className="card-text">Skills</h4>
                                        <ul className="card-text" style={{listStyleType: "disc"}}>
                                            <li>{vacancyData.skills}</li>
                                            <li>{vacancyData.skills}</li>
                                            <li>{vacancyData.skills}</li>
                                            <li>{vacancyData.skills}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5 ">
                            <div className="card mt-5" style={{borderColor: " rgba(80, 226, 204, 0.92)"}}>
                                <div className="card-body">
                                    <div className="row justify-content-center mt-1">
                                        <div className="col-md-4 mt-3">
                                            <img src={addtowishlist} alt="companyImage"
                                                 style={{"width": "100px"}}></img>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center ">
                                        <div className="col-md-6 mt-3">
                                            <button type="submit" onClick={handleClick}
                                                    className="btn form-control  border border-secondary "
                                                    style={{background: "#000000"}}>
                                                <h6 style={{color: "#FFFFFF"}}>Add to wishlist</h6>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center mt-4">
                                        <div className="col-md-4 mt-3">
                                            <img src={applynow} alt="companyImage" className="rounded-circle"
                                                 style={{"width": "100px"}}></img>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center ">
                                        <div className="col-md-6 mt-3">
                                            <button type="submit" onClick={handleClickApply}
                                                    className="btn form-control greenborder"
                                                    style={{borderColor: "#45B8AC"}}>
                                                <h6>Apply Now</h6>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AplyVac;