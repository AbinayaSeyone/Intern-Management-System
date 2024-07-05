// import React from 'react';
// import "../index.css"
//
// function Nav1() {
//   return (
//     <nav class="navbar  navbar-expand-lg navbar-success bg-success">
//     <a class="navbar-brand" href="#"> IMS</a>
//     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul class="navbar-nav">
//         <li class="nav-item ">
//           <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Internverification</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Companyverification</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Postverification</a>
//         </li>
//
//       </ul>
//     </div>
//   </nav>
//   )
// }
//
// export default Nav1;


import React from 'react';
import "../index.css"

function Nav1() {

  return (
      <nav className="navbar navbar-expand-lg " style={{"background":"#1d1d1d"}} >
        <div className="container-fluid ">
          <a className="navbar-brand text-white " href="/">
            IMS
          </a>

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
                <a className="nav-link active text-white" aria-current="page" href="/admin">
                  <i class="bi bi-house"></i> &nbsp;
                  Home
                </a>
              </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link active text-white" href="/InternSuccess">
                  <i class="bi bi-bell"></i> &nbsp;
                  Internship Success
                </a>
              </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item dropdown ">
                <a
                    className="nav-link active dropdown-toggle text-white"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                  <i class="bi bi-card-list "></i> &nbsp;
                  Actions
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item " href="/SuspendedInterns">
                      Suspended Interns
                    </a>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                  </li>
                  <li>
                    <a className="dropdown-item " href="/SuspendedCompany">Suspended Company</a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item " href="SuspendedPost">Suspended PostDetails</a>
                  </li>
                </ul>
              </li>
            </ul>


          </div>
        </div>

      </nav>
  );
}

export default Nav1;
