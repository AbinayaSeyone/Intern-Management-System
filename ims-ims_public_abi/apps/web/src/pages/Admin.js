import React from 'react';
import Nav1 from '../components/Nav1';
import intern from '../images/intern.svg'
import company from '../images/company.svg'
import post from '../images/postv.svg'
import {Link} from "react-router-dom";

function Admin() {
    return(
        <div >
            <Nav1></Nav1>
            <div className=" container mt-5 ">
                <div  className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card shadow">
                            <Link to="/student1" className="btn btn-outline-info">
                                <center>
                                    <img src={intern} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
                                </center>
                                <div className="card-body">
                                    <h6>Intern Verification </h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card shadow">
                            <Link to="/Company1" className="btn btn-outline-info">
                                <center>
                                    <img src={company} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
                                </center>
                                <div className="card-body">
                                    <h6>Company Verification </h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card shadow">
                            <Link to="/Internpoolverification" className="btn btn-outline-info">
                                <center>
                                    <img src={post} className="card-img-top" style={{ "width": "100px" ,"height":"100px" }} alt="card" ></img>
                                </center>
                                <div className="card-body">
                                    <h6>Internpool opening Verification </h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}
export default Admin;
