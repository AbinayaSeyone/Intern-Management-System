import React from "react";
import { Link } from "react-router-dom";
const VerOtp = () => {
  return (
    <div className="OTP">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="  col-md-5 mt-5 ">
          <div className="  mt-5 ">
            <h4 style={{ color: "white" }}>
              OTP has already been sent to the Email address
            </h4>
          </div>
          
        </div>
        <div className="d-flex justify-content-center">
          <h4 style={{ color: "white" }}>
              _-_-_-_-_-_-_-_-_-_-_-
            </h4>
          </div>
      </div>
      <Link to="/DisplayMassage01" className="text-end">
        
        <button type="button" className="btn btn-primary">
                          submit
                        </button>
        </Link>
      </div>
    
  );
};

export default VerOtp;
