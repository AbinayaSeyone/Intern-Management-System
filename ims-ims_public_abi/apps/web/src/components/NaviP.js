import React from "react";

function NavbarP() {
    return (
        <div className="row m-0 justify-content-center ">
            <nav
                className="navbar navbar-expand-lg"
                style={{ backgroundColor: "rgba(255,255,255, 0.1)", borderRadius: "10px", borderColor: "#ffffff", borderWidth: "0.5px", borderStyle: "solid" ,boxShadow: "0px 0px 5px 2px rgba(8, 151, 157, 0.5)" }}
            >
                <div className="container-fluid">
                    <div className="col-md-1"></div>
                    <div className="col-md-1">
                        <a className="navbar-brand text-black" href="/">
                            IMS
                        </a>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
                        <div className="col-md-1"></div>
                        <div className="col-md-3">
                            {/* <li className="nav-item"> */}
                            <a className="nav-link text-black " aria-current="page" href="/AboutUs">
                                <i class="bi-people-fill " style={{ color: "black" }}></i>
                                {" "}
                                Aboutus
                            </a>
                            {/* </li> */}
                        </div>

                        {/* </ul> */}
                    </div>
                    <div className="col-md-1">

                            <a href="/login" className="btn btn-outline-dark" type="submit" >
                                LOGIN
                            </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarP;
