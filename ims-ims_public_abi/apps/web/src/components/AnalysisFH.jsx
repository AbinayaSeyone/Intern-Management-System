import React from "react";
function AnalysisFH(){
  return(
      <div className="container-fluid content-justify-center ">
        <div className=" align-middle mt-3"style={{ "color":"#000099" }}>
          <h2 className=" align-middle">Hiring Process Summary</h2>
        </div>
        <div class="row">
          <div class="col-sm-4 mt-5">
            <div class="card" style={{ "background-color":"#ffffb3" }}>
              <div class="card-body">
                <h3 class="card-title">Total Number of Applicants</h3>
                <h5>100</h5>
                <p class="card-text">There are 100 applicants are apply for Software engineering internship. </p>
                <a href="#" class="btn text-white btn-outline-dark" style={{ "background-color":" #e6e600" }}>View details</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mt-5">
            <div class="card" style={{ "background-color":" #50E2CC" }}>
              <div class="card-body">
                <h3 class="card-title">Selected Applicants</h3>
                <h5>25</h5>
                <p class="card-text">There are 25 applicants are Accepted for Software engineering internship.</p>
                <a href="#" class="btn text-white btn-outline-dark"style={{ "background-color":" #1daf99" }}>View Details</a>
              </div>
            </div>
          </div>

          <div class="col-sm-4  mt-5">
            <div class="card" style={{ "background-color":"  #ff8080" }}>
              <div class="card-body">
                <h3 class="card-title">Rejected Applicants</h3>
                <h5>75</h5>
                <p class="card-text">There are 75 applicants are rejected  for Software engineering internship..</p>
                <a href="#" class="btn text-white btn-outline-dark" style={{ "background-color":"  #e60000" }} >View Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default AnalysisFH;