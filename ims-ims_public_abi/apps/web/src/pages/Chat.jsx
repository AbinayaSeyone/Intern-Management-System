import React from 'react';
import NavBar from '../components/NavBar';
const ComChat = () => {
    return ( 
        <div>
      <div>
        <NavBar/>
      </div>
      <div className="row">
        <div className="col-md-4">
          <React.Fragment>
            <div
              className="d-flex flex-column flex-shrink-0  p-3 "
              style={{
                width: "350px",

                background: "rgb(46, 102, 83)",
              }}
            >
              <h2
                className="d-flex justify-content-center"
                style={{ color: "white" }}
              >
                Chat with Company
              </h2>
              <hr />
              <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                  <div
                    className
                    style={{ backgroundColor: " rgba(80, 226, 204, 0.07)" }}
                  >
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            src="profile.jpeg"
                            alt="companyImage"
                            className="rounded-circle"
                            style={{ width: "60px" }}
                          ></img>
                        </div>
                        <div className="col-md-7 mt-2">
                          <h5 className="card-title">Company's Name</h5>
                          <h6 className="card-title">Location</h6>
                          <p
                            className="card-title"
                            style={{ color: "#1DD3B8" }}
                          >
                            Date
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                &nbsp;&nbsp;
                <li>
                  <div
                    className
                    style={{ backgroundColor: " rgba(80, 226, 204, 0.07)" }}
                  >
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            src="profile.jpeg"
                            alt="companyImage"
                            className="rounded-circle"
                            style={{ width: "60px" }}
                          ></img>
                        </div>
                        <div className="col-md-8 mt-2">
                          <h5 className="card-title">Company's Name</h5>
                          <h6 className="card-title">Vacancies</h6>
                          <p
                            className="card-title"
                            style={{ color: "#1DD3B8" }}
                          >
                            Date
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                &nbsp;&nbsp;
                <li>
                  <div
                    className
                    style={{ backgroundColor: " rgba(80, 226, 204, 0.07)" }}
                  >
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            src="profile.jpeg"
                            alt="companyImage"
                            className="rounded-circle"
                            style={{ width: "60px" }}
                          ></img>
                        </div>
                        <div className="col-md-8 mt-2">
                          <h5 className="card-title">Company's Name</h5>
                          <h6 className="card-title">Vacancies</h6>
                          <p
                            className="card-title"
                            style={{ color: "#1DD3B8" }}
                          >
                            Date
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                &nbsp;&nbsp;
                <li>
                  <div
                    className
                    style={{ backgroundColor: " rgba(80, 226, 204, 0.07)" }}
                  >
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            src="profile.jpeg"
                            alt="companyImage"
                            className="rounded-circle"
                            style={{ width: "60px" }}
                          ></img>
                        </div>
                        <div className="col-md-8 mt-2">
                          <h5 className="card-title">Company's Name</h5>
                          <h6 className="card-title">Vacancies</h6>
                          <p
                            className="card-title"
                            style={{ color: "#1DD3B8" }}
                          >
                            Date
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                &nbsp;&nbsp;
              </ul>
            </div>
          </React.Fragment>
        </div>
        
                </div>
              </div>
            
          
     );
}
 
export default ComChat;