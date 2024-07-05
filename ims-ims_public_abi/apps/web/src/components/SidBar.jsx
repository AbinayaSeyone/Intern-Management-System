import React from "react";

function SideBar() {
  return (
    <React.Fragment>
      <div
        className="d-flex flex-column flex-shrink-0  p-3 "
        style={{
          width: "280px",
         
          background: "rgb(46, 102, 83)",
        }}
      >
        <img
          src="profile.jpeg"alt="company logo"
          width="42"
          height="42"
          className="rounded-circle me-2"
        />
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none text-white"
          style={{ textColor: "#" }}
        >
          User Name
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link  text-white" aria-current="page">
              View profile
            </a>
          </li>
          &nbsp;&nbsp;
          <li>
            <a href="#" className="nav-link text-white">
              Edit Profile
            </a>
          </li>
          &nbsp;&nbsp;
          <li>
            <a href="#" className="nav-link text-white">
              Companies
            </a>
          </li>
          &nbsp;&nbsp;
          <li>
            <a href="#" className="nav-link text-white">
              Vacancies
            </a>
          </li>
          &nbsp;&nbsp;
          <li>
            <a href="#" className="nav-link text-white">
              My Application
            </a>
          </li>
          &nbsp;&nbsp;
          <li>
            <a href="#" className="nav-link text-white">
              Wish List
            </a>
          </li>
          &nbsp;&nbsp;
        </ul>
        &nbsp;&nbsp;
        <hr />
        <button className="btn btn-dark">
          {" "}
          <a href="#" className="nav-link text-white">
            <i class="bi bi-box-arrow-right"></i>&nbsp; logout
          </a>
        </button>
      </div>
    </React.Fragment>
  );
}
export default SideBar;
