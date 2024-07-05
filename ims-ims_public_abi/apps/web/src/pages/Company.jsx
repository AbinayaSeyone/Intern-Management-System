import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import SelBar from "../components/SelBar";
import SidebarI from "../components/SidebarI";



const ComPro = () => {
  return (
      <div>
        <div>
          {" "}
          <NavBar/>
        </div>
        <div>
          <div className="row">
            <div className="col-md-3">
              {" "}
              <SidebarI/>
            </div>
            <div className="col-md-9 mt-4">
              <div>
                <div className="row">
                  <div className="col-md-3">
                    {" "}
                    <SelBar/>
                  </div>
                  <div className="col-md-3">
                    {" "}
                    <SelBar />
                  </div>
                  <div className="col-md-3">
                    <SelBar />
                  </div>
                  <div className="col-md-3">
                    <form className="d-flex" role="search">
                      <input
                          className="form-control me-2"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                      />
                      <button className="btn btn-outline-success" type="submit">
                        Search
                      </button>
                    </form>
                  </div>
                </div>
                <div>
                  <div className="row">
                    <div className="col-md-6 mt-3">
                      <Link to="/ViewComp">
                        <div
                            className="card mt-1"
                            style={{ backgroundColor: " rgba(80, 226, 204, 0.07)" }}
                        >
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-3">
                                <img
                                    src="profile.jpeg"
                                    alt="companyImage"
                                    className="rounded-circle"
                                    style={{ width: "120px" }}
                                ></img>
                              </div>
                              <div className="col-md-6 mt-4">
                                <h4 className="card-title">Company's Name</h4>
                                <h5 className="card-title">Vacancies</h5>
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
                      </Link>
                      < Link to="/ViewComp">
                        <div
                            className="card mt-1"
                            style={{ backgroundColor: " rgba(80, 226, 204, 0.07)" }}
                        >
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-3">
                                <img
                                    src="profile.jpeg"
                                    alt="companyImage"
                                    className="rounded-circle"
                                    style={{ width: "120px" }}
                                ></img>
                              </div>
                              <div className="col-md-6 mt-4">
                                <h4 className="card-title">Company's Name</h4>
                                <h5 className="card-title">Vacancies</h5>
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
                      </Link>
                      <Link to="/ViewComp">
                        <div
                            className="card mt-1"
                            style={{ backgroundColor: " rgba(80, 226, 204, 0.07)" }}
                        >
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-3">
                                <img
                                    src="profile.jpeg"
                                    alt="companyImage"
                                    className="rounded-circle"
                                    style={{ width: "120px" }}
                                ></img>
                              </div>
                              <div className="col-md-6 mt-4">
                                <h4 className="card-title">Company's Name</h4>
                                <h5 className="card-title">Vacancies</h5>
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
                      </Link>

                    </div>

                    <div className="col-md-6 mt-3">
                      <div>
                        <Link to="/ViewComp">
                          <div
                              className="card mt-1"
                              style={{ backgroundColor: " rgba(80, 226, 204, 0.07)" }}
                          >
                            <div className="card-body">
                              <div className="row">
                                <div className="col-md-3">
                                  <img
                                      src="profile.jpeg"
                                      alt="companyImage"
                                      className="rounded-circle"
                                      style={{ width: "120px" }}
                                  ></img>
                                </div>
                                <div className="col-md-6 mt-4">
                                  <h4 className="card-title">Company's Name</h4>
                                  <h5 className="card-title">Vacancies</h5>
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
                        </Link>


                      </div>


                      <div>
                        <Link to="/ViewComp">
                          <div
                              className="card mt-1"
                              style={{ backgroundColor: " rgba(80, 226, 204, 0.07)" }}
                          >
                            <div className="card-body">
                              <div className="row">
                                <div className="col-md-3">
                                  <img
                                      src="profile.jpeg"
                                      alt="companyImage"
                                      className="rounded-circle"
                                      style={{ width: "120px" }}
                                  ></img>
                                </div>
                                <div className="col-md-6 mt-4">
                                  <h4 className="card-title">Company's Name</h4>
                                  <h5 className="card-title">Vacancies</h5>
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
                        </Link>
                      </div>
                      <div>
                        <Link to="/ViewComp">
                          <div
                              className="card mt-1"
                              style={{ backgroundColor: " rgba(80, 226, 204, 0.07)" }}
                          >
                            <div className="card-body">
                              <div className="row">
                                <div className="col-md-3">
                                  <img
                                      src="profile.jpeg"
                                      alt="companyImage"
                                      className="rounded-circle"
                                      style={{ width: "120px" }}
                                  ></img>
                                </div>
                                <div className="col-md-6 mt-4">
                                  <h4 className="card-title">Company's Name</h4>
                                  <h5 className="card-title">Vacancies</h5>
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
                        </Link>
                      </div>
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

export default ComPro;
