import { Link } from "react-router-dom";
import React, {useState} from "react";
import {useLocation} from "react-router-dom";




function NavBar() {

    const location = useLocation();

    const [selected, setSelected] = useState(0);
    const [expanded, setExpaned] = useState(true);

    const loginResponse = new URLSearchParams(location.search).get('loginResponse');
    const parsedLoginResponse = JSON.parse(loginResponse);

    // Extract the username from the login response
    const username = parsedLoginResponse.username;
    const emailId = parsedLoginResponse.emailId;
    const mobileNo = parsedLoginResponse.mobileNo;
    console.log(loginResponse);
    return (
        <div className="row m-0 justify-content-center">
            <nav
                className="navbar navbar-expand-lg"
                style={{ background: "#08979d" }}
            >
                <div className="container-fluid">
                    <div className="col-md-1"></div>
                    <div className="col-md-1">
                        <Link  to={{
                            pathname: "/",
                            search: `?loginResponse=${encodeURIComponent(
                                JSON.stringify(parsedLoginResponse)
                            )}`,
                        }}className="btn btn-outline-info">

                            <a className="navbar-brand text-white" href="#">
                                IMS
                            </a>
                        </Link>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
                        <div className="col-md-1"></div>
                        <div className="col-md-3">
                            <Link  to={{
                                pathname: "/Intern",
                                search: `?loginResponse=${encodeURIComponent(
                                    JSON.stringify(parsedLoginResponse)
                                )}`,
                            }}className="btn btn-outline-info">
                                <a className="nav-link text-white " aria-current="page" href="#">
                                    <i class="bi bi-house " style={{ color: "white" }}></i>
                                    {"  "}
                                    Home
                                </a>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            {/* <li className="nav-item"> */}
                            <a className="nav-link disabled text-white" aria-current="page" href="#">
                                <i class="bi bi-bell " style={{ color: "white" }}></i>
                                {"  "}
                                Notification
                            </a>
                            {/* </li> */}
                        </div>
                        <div className="col-md-3">
                            {/* <li className="nav-item"> */}
                            <a className="nav-link disabled text-white " aria-current="page" href="#">
                                <i className="bi bi-chat " style={{color: "white"}}></i>
                                {"  "}
                                Chat
                            </a>
                            {/* </li> */}
                        </div>
                        {/* </ul> */}
                    </div>
                    <div className="justify-content-center user-name-div">{username}</div>
                    {/*<div className="justify-content-center user-name-div">{emailId}</div>*/}
                    {/*<div className="justify-content-center user-name-div">{mobileNo}</div>*/}

                    <div className="col-md-1">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAA3Mjnj_kK1eJBW4-SXFHNw66st83PzwDcHefksnyZcLM0Dn-DcR1Kb_2BP14BvaTj2k&usqp=CAU"
                             className="rounded"
                             style={{ height: "30px",
                                 width: "30px",
                                 marginTop: "5px",
                                 marginBottom: "5px",
                                 marginLeft: "51px",
                                 border: '1px solid #08979d',
                                 borderRadius:"61% !important"
                             }}
                        />
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default NavBar;
