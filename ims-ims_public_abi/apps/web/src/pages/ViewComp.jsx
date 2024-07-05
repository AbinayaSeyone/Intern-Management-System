import React from "react";
import NavBar from "../components/NavBar";
import SidebarI from "../components/SidebarI";

const ComView = () => {
  return (
      <div>
        <div>
          {" "}
          <NavBar />
        </div>
        <div className="row">
          <div className="col-md-3">
            {" "}
            <SidebarI/>
          </div>
          <div className="col-md-9 mt-5">
            <div
                className="card mt-5"
                style={{ backgroundColor: " rgba(80, 226, 204, 0.07)" }}
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3 mt-4">
                    <img
                        src="profile.jpeg"
                        alt="companyImage"
                        className="rounded-circle"
                        style={{ width: "120px" }}
                    ></img>
                  </div>
                  <div className="col-md-9 mt-4">
                    <h4 className="card-title">Company's Name</h4>
                    <h5 className="card-title">Vacancies</h5>
                    <p className="card-title" style={{ color: "#1DD3B8" }}>
                      Date
                    </p>

                    <textarea
                        className="form-control"
                        placeholder=" Describe About Company"
                        id="floatingTextarea"
                    ></textarea>
                    <div className="row">
                      <div className="col-md-3 mt-5">
                        <p>
                          <a href="http://www.google.com">www.Web.org</a>
                        </p>
                      </div>
                      <div className="col-md-3 mt-5"><p>
                        <a href="http://www.google.com"> <img src="Twitter.png" className="imgstyle"></img></a>
                      </p></div>
                      <div className="col-md-3 mt-5"><p>
                        <a href="http://www.google.com"><img src="Linkedin.png" className="imgstyle"></img></a>
                      </p></div>
                      <div className="col-md-3 mt-5"><p>
                        <a href="http://www.google.com"><img src="Youtube.png" className="imgstyle"></img></a>
                      </p></div>

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

export default ComView;
