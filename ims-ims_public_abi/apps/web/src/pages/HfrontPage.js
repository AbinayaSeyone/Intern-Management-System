import React from "react";
import ADL from "../images/vacancy.png"
import upd from "../images/update.png"
import find from "../images/find.png"
import chat from "../images/chat.png"
import edit from "../images/edit.png"
import view from "../images/view.png"
import lo from "../images/logout.png"



import Hire from "../images/Hiring.png"

import {Link} from "react-router-dom";
import Navibarr from "../components/Navibarr";

function HfrontPage() {
    return (

        <div>
            <Navibarr></Navibarr>

            <div className="container mt-5">

                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card shadow">
                            <Link to="/Jobcard" className="btn btn-outline-primary">
                                <center>
                                    <img src={ADL} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
                                </center>
                                <div className="card-body">
                                    <h6>Post Job-Openings </h6>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card shadow">
                            <Link to="/vacancyH" className="btn btn-outline-primary">
                                <center>
                                    <img src={Hire} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
                                </center>
                                <div className="card-body">
                                    <h6>Track Hiring Process </h6>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/*<div className="col-md-4 mb-3">*/}
                    {/*    <div className="card shadow">*/}
                    {/*        <Link to="/HireUpdate/" className="btn btn-outline-primary">*/}
                    {/*            <center>*/}
                    {/*                <img src={upd} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>*/}
                    {/*            </center>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h6>Update Hiring Process </h6>*/}
                    {/*            </div>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="col-md-4 mb-3">
                        <div className="card shadow">
                            <Link to="/editprofile" className="btn btn-outline-primary">
                                <center>
                                    <img src={edit} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
                                </center>
                                <div className="card-body">
                                    <h6>Edit Profile </h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card shadow">
                            <Link to="/intern1" className="btn btn-outline-primary">
                                <center>
                                    <img src={find} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
                                </center>
                                <div className="card-body">
                                    <h6>View Intern Details </h6>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/*<div className="col-md-4 mb-3">*/}
                    {/*    <div className="card shadow">*/}
                    {/*        <Link to="/Jobcard" className="btn btn-outline-primary">*/}
                    {/*            <center>*/}
                    {/*                <img src={chat} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>*/}
                    {/*            </center>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h6>Chat With interns </h6>*/}
                    {/*            </div>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="col-md-4 mb-3">
                        <div className="card shadow">
                            <Link to="/Hprofile" className="btn btn-outline-primary">
                                <center>
                                    <img src={view} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
                                </center>
                                <div className="card-body">
                                    <h6>View  Profile </h6>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card shadow">
                            <Link to="/" className="btn btn-outline-primary">
                                <center>
                                    <img src={lo} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
                                </center>
                                <div className="card-body">
                                    <h6>Log_out </h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/*<div className="col-md-4 mb-3">*/}
                    {/*    <div className="card shadow">*/}
                    {/*        <Link to="/Jobcard" className="btn btn-outline-primary">*/}
                    {/*            <center>*/}
                    {/*                <img src={lo} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>*/}
                    {/*            </center>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h6>Log_out </h6>*/}
                    {/*            </div>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

                <div className="row">

                    {/*<div className="col-md-4 mb-3">*/}
                    {/*    <div className="card shadow">*/}
                    {/*        <Link to="/Hprofile" className="btn btn-outline-primary">*/}
                    {/*            <center>*/}
                    {/*                <img src={view} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>*/}
                    {/*            </center>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h6>View  Profile </h6>*/}
                    {/*            </div>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="col-md-4 mb-3">*/}
                    {/*    <div className="card shadow">*/}
                    {/*        <Link to="/Jobcard" className="btn btn-outline-primary">*/}
                    {/*            <center>*/}
                    {/*                <img src={lo} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>*/}
                    {/*            </center>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h6>Log_out </h6>*/}
                    {/*            </div>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )}

export default HfrontPage;
