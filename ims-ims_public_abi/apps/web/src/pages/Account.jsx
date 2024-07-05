import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
function CreAcc() {
  return (
    <div className="account">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="mt-5">
            <div>
              <h1 className="d-flex justify-content-center" style={{color:"white"}}>
                Create Account As a Intern
              </h1>
              <div className="mt-5">
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      aria-label="First name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      ariaLabel="Last name"
                    />
                  </div>
                

                <form className="row g-3">
                  <div className="col-md-6" style={{color:"white"}}>
                    <label for="inputEmail4" className="form-label">
                      {" "}
                      Personal Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                    ></input>
                  </div>
                  <div className="col-md-6" style={{color:"white"}}>
                    <label for="inputEmail4" className="form-label">
                      University Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                    ></input>
                  </div>
                  <div className="col-12" style={{color:"white"}}>
                    <label for="inputPassword4" className="form-label">
                      password{" "}
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Should contain lower&Uper Case "
                    ></input>
                  </div>
                  <div className="col-12" style={{color:"white"}}>
                    <label for="inputPassword4" className="form-label">
                      Retype Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Type above password correctly"
                    ></input>
                  </div>
                 <div className="mt-5" style={{color:"white"}}>
                  <div className="row">
                    <div className="col-md-9">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                        ></input>
                        <label className="form-check-label" for="gridCheck">
                          I agree your terms and condition
                        </label>
                      </div>
                    </div>

                    <Link to="/OTP verify" className="col-md-3">
                      <button type="button" className="btn btn-primary">
                        submit
                      </button>
                    </Link>
                  </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default CreAcc;
