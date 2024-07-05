import React from "react";
import { Link } from "react-router-dom";
const DisMes = () => {
  return (
    <div className="displaymessage">
      <div>
        <div className="d-flex flex-column align-items-center vh-100 justify-content-center">
          <h4 style={{ color: "white" }}>
            Your account has successfully created
          </h4>
          <Link to="/" className="text-end mt-5 ">
            <button type="button" className="btn btn-primary">
              Login
            </button>
            
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DisMes;
