import React from "react";
import Radios from "../components/Radios";
const MyApp = () => {
  return (
    <div>
      <div>
      <nav className="navbar navbar-expand-lg " style={{"background":"#1d1d1d"}} >
            <div className="container-fluid ">
                 <a className="navbar-brand text-white " href="../../../../../../../AppData/Local/Temp#">
                    IMS <br></br>
                </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="../../../../../../../AppData/Local/Temp#">
                                <i class="bi bi-house"></i> &nbsp;
                                Home
                            </a>
                        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <li className="nav-item">
                            <a className="nav-link active text-white" href="../../../../../../../AppData/Local/Temp#">
                                <i class="bi bi-bell"></i> &nbsp;
                                Notification
                                </a>


                        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <li className="nav-item">

                            <a className="nav-link active text-white"><i class="bi bi-chat-dots"></i> &nbsp;chat&nbsp;</a>

                        </li>
                    </ul>
                    {/*<form className="d-flex" role="search">*/}
                    {/*    <input*/}
                    {/*        className="form-control me-2"*/}
                    {/*        type="search"*/}
                    {/*        placeholder="Search"*/}
                    {/*        aria-label="Search"*/}
                    {/*    />*/}
                    {/*    <button className="btn btn-outline-success" type="submit"> */}
                    {/*        Search*/}
                    {/*    </button>*/}
                    {/*</form>*/}
                </div>
            </div>

        </nav>
      </div>

      <div className="row">
        <div className="col-md-1">
        {/*<React.Fragment>*/}
        {/*<div className="d-flex flex-column flex-shrink-0  p-3 " style={{"width":"280px","height":"94vh","background":"rgb(46, 102, 83)"}}>*/}
        {/*     <img src="profile.jpeg" alt="company logo" width="42" height="42" className="rounded-circle me-2"  />*/}

        {/*        /!*<a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none text-white" style={{"textColor":"#"}}>*!/*/}

        {/*            /!*User Name*!/*/}
        {/*        /!*</a> *!/*/}
        {/*        /!*<hr />*!/*/}

        {/*        &nbsp;&nbsp;*/}
        {/*        <hr />*/}
        {/*        */}

        {/*                <a href="../../../../../../../AppData/Local/Temp#" className="nav-link text-white">*/}
        {/*                <i class="bi bi-box-arrow-right"></i>&nbsp;*/}
        {/*                logout*/}
        {/*                </a>*/}
        {/*           */}
        {/*    </div> */}

        

        {/*        </React.Fragment >*/}
        </div>
        <div className="col-md-10">
          <div className="mt-5">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-9">
                <div>
                <div className="card mt-1" style={{ backgroundColor: " rgba(80, 226, 204, 0.07)" }}>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3">
                        <img src ="profile.jpeg" alt="companyImage" className="rounded-circle" style={{ "width": "120px" }}></img>
                    </div>
                    <div className="col-md-6 mt-4" >
                        <h4 className="card-title">Company's Name</h4>
                        <h5 className="card-title">Location</h5>
                        <p className="card-title" style={{ color: "#1DD3B8" }}>Date</p>
                    </div>
                    <div className="col-md-3 mt-4">
                      <Radios/>
                    </div>
                </div>

            </div>
            </div>

                </div>
                <div>
                <div className="card mt-1" style={{ backgroundColor: " rgba(80, 226, 204, 0.07)" }}>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3">
                        <img src ="profile.jpeg" alt="companyImage" className="rounded-circle" style={{ "width": "120px" }}></img>
                    </div>
                    <div className="col-md-6 mt-4" >
                        <h4 className="card-title">Company's Name</h4>
                        <h5 className="card-title">Location</h5>
                        <p className="card-title" style={{ color: "#1DD3B8" }}>Date</p>
                    </div>
                    <div className="col-md-3 mt-4">
                      <Radios/>
                    </div>
                    
                </div>

            </div>
            </div>
                </div>
                <div>
                <div className="card mt-1" style={{ backgroundColor: " rgba(80, 226, 204, 0.07)" }}>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3">
                        <img src ="profile.jpeg" alt="companyImage" className="rounded-circle" style={{ "width": "120px" }}></img>
                    </div>
                    <div className="col-md-6 mt-4" >
                        <h4 className="card-title">Company's Name</h4>
                        <h5 className="card-title">Location</h5>
                        <p className="card-title" style={{ color: "#1DD3B8" }}>Date</p>
                    </div>
                    <div className="col-md-3 mt-4">
                      <Radios/>
                    </div>
                </div>

            </div>
            </div>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyApp;
