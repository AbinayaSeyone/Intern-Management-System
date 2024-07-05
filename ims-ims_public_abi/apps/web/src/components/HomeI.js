// import React from "react";
// import vpro from "../images/view4.png"
// import vac from "../images/vacancies.png"
// import myapp from "../images/myapplication.png"
// import log from "../images/log.png"
// import epro from "../images/editprofile.png"
// import wishlist from "../images/addtowishlist.png"
// import comLogo from "../images/company.png"
// // import { Link } from "react-router-dom";
//
//
//
//
// import {Link, useLocation, useNavigate} from "react-router-dom";
//
//
//
//
// function InternHome() {
//     const location = useLocation();
//
//     const loginResponse = new URLSearchParams(location.search).get('loginResponse');
//     const parsedLoginResponse = JSON.parse(loginResponse);
//
//     // Extract the userId from the login response
//     const userId = parsedLoginResponse.id;
//     console.log(userId)
//
//     // const navigate = useNavigate();
//     // const handleLogout = () => {
//     //     // Clear user session or remove authentication token
//     //     // Example: Removing the token from local storage
//     //     localStorage.removeItem('authToken');
//
//     // Redirect to the login page or any other desired action
//     // Example: Redirecting to the login page
//     // navigate('/login');}
//
//     // const location = useLocation();
//     //
//     // const loginResponse = new URLSearchParams(location.search).get('loginResponse');
//     // const parsedLoginResponse = JSON.parse(loginResponse);
//     //
//     // // Extract the userId from the login response
//     // const userId = parsedLoginResponse.id;
//     // console.log(userId)
//
//     return (
//
//         <div>
//
//
//             <div className="container mt-5">
//
//                 <div className="row mt-3">
//                     <div className="col-md-4 mb-3">
//                         <div className="card shadow" style={{  backgroundColor: 'rgb(229, 250, 227)' }}>
//                             <Link to="/VewProfile" className="btn btn-outline-info" >
//                                 <center>
//                                     <img src={vpro} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
//                                 </center>
//                                 <div className="card-body">
//                                     <h6>View Profile </h6>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//
//                     <div className="col-md-4 mb-3">
//                         <div className="card shadow"style={{ backgroundColor: 'rgb(229, 250, 227)' }} >
//                             <Link to="/EditPro" className="btn btn-outline-info">
//                                 <center>
//                                     <img src={epro} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
//                                 </center>
//                                 <div className="card-body">
//                                     <h6>Edit Profile </h6>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//
//                     <div className="col-md-4 mb-3">
//                         <div className="card shadow" style={{ backgroundColor: 'rgb(229, 250, 227)' }}>
//                             <Link to="/Company" className="btn btn-outline-info">
//
//                                 <center>
//                                     <img src={comLogo} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
//                                 </center>
//                                 <div className="card-body">
//                                     <h6>Companies </h6>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="row mt-3">
//                     <div className="col-md-4 mb-3">
//                         <div className="card shadow" style={{ backgroundColor: 'rgb(229, 250, 227)' }}>
//                             <Link  to={{
//                                 pathname: "/Vacancies",
//                                 search: `?loginResponse=${encodeURIComponent(
//                                     JSON.stringify(parsedLoginResponse)
//                                 )}`,
//                             }} className="btn btn-outline-info">
//
//                                 <center>
//                                     <img src={vac} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
//                                 </center>
//                                 <div className="card-body">
//                                     <h6>Vacancies </h6>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//
//                     <div className="col-md-4 mb-3">
//                         <div className="card shadow" style={{ backgroundColor: 'rgb(229, 250, 227)' }} >
//                             <Link to={{
//                                 pathname: "/Wishlist",
//                                 search: `?loginResponse=${encodeURIComponent(
//                                     JSON.stringify(parsedLoginResponse)
//                                 )}`,
//                             }}
//                                   className="btn btn-outline-info">
//
//                                 <center>
//                                     <img src={wishlist} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
//                                 </center>
//                                 <div className="card-body">
//                                     <h6>Wish List </h6>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//
//                     <div className="col-md-4 mb-3">
//                         <div className="card shadow" style={{ backgroundColor: 'rgb(229, 250, 227)' }}>
//                             <Link to="/MyApp" className="btn btn-outline-info">
//
//                                 <center>
//                                     <img src={myapp} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
//                                 </center>
//                                 <div className="card-body">
//                                     <h6>My Applications </h6>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="row mt-3">
//                     <div className="col-md-4 mb-3">
//
//                     </div>
//
//                     <div className="col-md-4 mb-3">
//                         <div className="card shadow" style={{ backgroundColor: 'rgb(229, 250, 227)' }}>
//                             <Link to="/" className="btn btn-outline-info">
//                                 <center>
//                                     <img src={log} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
//                                 </center>
//                                 <div className="card-body" >
//                                     <h6>LOG OUT </h6>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//
//
//             </div>
//         </div>
//     )}
//
// export default InternHome;

import React from "react";
import vpro from "../images/view4.png"
import vac from "../images/vacancies.png"
import myapp from "../images/myapplication.png"
import log from "../images/log.png"
import epro from "../images/editprofile.png"
import wishlist from "../images/addtowishlist.png"
import comLogo from "../images/company.png"
// import { Link } from "react-router-dom";




import {Link, useLocation, useNavigate} from "react-router-dom";




function InternHome() {
    const location = useLocation();

    const loginResponse = new URLSearchParams(location.search).get('loginResponse');
    const parsedLoginResponse = JSON.parse(loginResponse);

    // Extract the userId from the login response
    const userId = parsedLoginResponse.id;
    console.log(userId)

    // const navigate = useNavigate();
    // const handleLogout = () => {
    //     // Clear user session or remove authentication token
    //     // Example: Removing the token from local storage
    //     localStorage.removeItem('authToken');

    // Redirect to the login page or any other desired action
    // Example: Redirecting to the login page
    // navigate('/login');}

    // const location = useLocation();
    //
    // const loginResponse = new URLSearchParams(location.search).get('loginResponse');
    // const parsedLoginResponse = JSON.parse(loginResponse);
    //
    // // Extract the userId from the login response
    // const userId = parsedLoginResponse.id;
    // console.log(userId)

    return (

        <div>


            <div className="container mt-5">

                <div className="row mt-3">
                    <div className="col-md-4 mb-3">
                        <div className="card shadow" style={{  backgroundColor: 'rgb(229, 250, 227)' }}>
                            <Link to="/VewProfile" className="btn btn-outline-info" >
                                <center>
                                    <img src={vpro} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
                                </center>
                                <div className="card-body">
                                    <h6>View Profile </h6>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card shadow"style={{ backgroundColor: 'rgb(229, 250, 227)' }} >
                            <Link to={{
                                pathname: "/EditPro",
                                search: `?loginResponse=${encodeURIComponent(
                                    JSON.stringify(parsedLoginResponse)
                                )}`,
                            }} className="btn btn-outline-info">
                                <center>
                                    <img src={epro} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
                                </center>
                                <div className="card-body">
                                    <h6>Edit Profile </h6>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card shadow" style={{ backgroundColor: 'rgb(229, 250, 227)' }}>
                            <Link to="/Company" className="btn btn-outline-info">

                                <center>
                                    <img src={comLogo} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
                                </center>
                                <div className="card-body">
                                    <h6>Companies </h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-4 mb-3">
                        <div className="card shadow" style={{ backgroundColor: 'rgb(229, 250, 227)' }}>
                            <Link  to={{
                                pathname: "/Vacancies",
                                search: `?loginResponse=${encodeURIComponent(
                                    JSON.stringify(parsedLoginResponse)
                                )}`,
                            }} className="btn btn-outline-info">

                                <center>
                                    <img src={vac} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
                                </center>
                                <div className="card-body">
                                    <h6>Vacancies </h6>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card shadow" style={{ backgroundColor: 'rgb(229, 250, 227)' }} >
                            <Link to={{
                                pathname: "/Wishlist",
                                search: `?loginResponse=${encodeURIComponent(
                                    JSON.stringify(parsedLoginResponse)
                                )}`,
                            }}
                                  className="btn btn-outline-info">

                                <center>
                                    <img src={wishlist} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
                                </center>
                                <div className="card-body">
                                    <h6>Wish List </h6>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card shadow" style={{ backgroundColor: 'rgb(229, 250, 227)' }}>
                            <Link to="/MyApp" className="btn btn-outline-info">

                                <center>
                                    <img src={myapp} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
                                </center>
                                <div className="card-body">
                                    <h6>My Applications </h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-4 mb-3">

                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card shadow" style={{ backgroundColor: 'rgb(229, 250, 227)' }}>
                            <Link to="/" className="btn btn-outline-info">
                                <center>
                                    <img src={log} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
                                </center>
                                <div className="card-body" >
                                    <h6>LOG OUT </h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )}

export default InternHome;
