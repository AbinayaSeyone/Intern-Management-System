import React from 'react';
import { Link } from 'react-router-dom';
const ProTag = () => {
    return (


        <Link to="/Apply" className="card mt-1" style={{ backgroundColor: " rgba(80, 226, 204, 0.07)" }}>
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
                </div>
            </div>
        </Link>

    );
}



export default ProTag;
