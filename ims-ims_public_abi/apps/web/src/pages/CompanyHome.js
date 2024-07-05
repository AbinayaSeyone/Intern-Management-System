import React from "react";
import ADL from "../images/abcd.png"
import upd from "../images/post2.png"
import find from "../images/vaca2.png"
import chat from "../images/intern4.png"
import edit from "../images/appli.png"
import view from "../images/mana.png"
import log from "../images/log.png"
import Hire from "../images/edit3.png"
import {Link, useLocation, useNavigate} from "react-router-dom";
import NavbarC from "../components/NavbarC";




function CompanyHome() {

    const navigate = useNavigate();
    const handleLogout = () => {
        // Clear user session or remove authentication token
        // Example: Removing the token from local storage
        localStorage.removeItem('authToken');

        // Redirect to the login page or any other desired action
        // Example: Redirecting to the login page
        navigate('/login');}

    const location = useLocation();

    const loginResponse = new URLSearchParams(location.search).get('loginResponse');
    const parsedLoginResponse = JSON.parse(loginResponse);

    // Extract the userId from the login response
    const userId = parsedLoginResponse.id;
    console.log(userId)

    return (

        <div >
            <NavbarC/>

            <div className="container mt-5">

                <div className="row mt-3">
                    <div className="col-md-4 mb-3">
                        <div className="card shadow">
                            <Link to="/Jobcard" className="btn btn-outline-info" >
                                <center>
                                    <img src={ADL} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
                                </center>
                                <div className="card-body">
                                    <h6>View Profile </h6>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card shadow">
                            <Link to={{
                                pathname: "/EditC",
                                search: `?loginResponse=${encodeURIComponent(
                                    JSON.stringify(parsedLoginResponse)
                                )}`,
                            }} className="btn btn-outline-info">
                                <center>
                                    <img src={Hire} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
                                </center>
                                <div className="card-body">
                                    <h6>Edit Profile </h6>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card shadow">
                            <Link to={{
                                pathname: "/PostvacancyC",
                                search: `?loginResponse=${encodeURIComponent(
                                    JSON.stringify(parsedLoginResponse)
                                )}`,
                            }}  className="btn btn-outline-info">
                                <center>
                                    <img src={upd} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
                                </center>
                                <div className="card-body">
                                    <h6>Post Vacancy </h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-4 mb-3">
                        <div className="card shadow">
                            <Link to={{
                                pathname: "/CompanyC",
                                search: `?loginResponse=${encodeURIComponent(
                                    JSON.stringify(parsedLoginResponse)
                                )}`,
                            }} className="btn btn-outline-info">
                                <center>
                                    <img src={find} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
                                </center>
                                <div className="card-body">
                                    <h6>Vacancies </h6>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card shadow">
                            <Link to={{
                                pathname: "/InternDetailC",
                                search: `?loginResponse=${encodeURIComponent(
                                    JSON.stringify(parsedLoginResponse)
                                )}`,
                            }} className="btn btn-outline-info">
                                <center>
                                    <img src={chat} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
                                </center>
                                <div className="card-body">
                                    <h6>Interns </h6>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card shadow">
                            <Link to={{
                                pathname: "/appC",
                                search: `?loginResponse=${encodeURIComponent(
                                    JSON.stringify(parsedLoginResponse)
                                )}`,
                            }} className="btn btn-outline-info">
                                <center>
                                    <img src={edit} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
                                </center>
                                <div className="card-body">
                                    <h6>Applications </h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-4 mb-3">
                        <div className="card shadow">
                            <Link to="/Jobcard" className="btn btn-outline-info">
                                <center>
                                    <img src={view} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
                                </center>
                                <div className="card-body">
                                    <h6>Manage Hiring Manager </h6>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card shadow">
                            <div className="btn btn-outline-info" onClick={handleLogout}>
                                <center>
                                    <img src={log} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
                                </center>
                                <div className="card-body" >
                                    <h6>LOG OUT </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )}

export default CompanyHome;
