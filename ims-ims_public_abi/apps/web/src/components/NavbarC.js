import React, {useState} from "react";
import {useLocation} from "react-router-dom";

function NavbarC() {
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
            style={{ background: "#08979d", borderRadius: "3px", borderColor: "#08979d", borderWidth: "0.1px", borderStyle: "solid" ,boxShadow: "0px 0px 5px 2px rgba(8, 151, 157, 0.5)" }}
        >
          <div className="container-fluid">
            <div className="col-md-1"></div>
            <div className="col-md-1">
              <a className="navbar-brand text-white" href="/">
                IMS
              </a>
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
              <div className="col-md-1"></div>
              <div className="col-md-3">
                {/* <li className="nav-item"> */}
                <a className="nav-link text-white " aria-current="page" href="/CompanyHome">
                  <i className="bi bi-house " style={{ color: "white" }}></i>
                  {"  "}
                  Home
                </a>
                {/* </li> */}
              </div>
              <div className="col-md-3">
                {/* <li className="nav-item"> */}
                <a className="nav-link disabled text-white ">
                  <i className="bi bi-bell " style={{ color: "white" }}></i>
                  {"  "}
                  Notification
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

export default NavbarC;
