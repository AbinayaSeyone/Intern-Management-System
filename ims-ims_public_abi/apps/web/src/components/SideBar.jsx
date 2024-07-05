import React from "react";

function SideBar() {
    return (
        <React.Fragment>
             <div className="d-flex flex-column flex-shrink-0  p-3 " style={{"width":"280px","height":"94vh","background":"linear-gradient(to bottom, #1d1d1d -10%, #008b8b 80%)"}}>
             <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324" alt="company logo" width="42" height="42" className="rounded-circle me-2"  />

                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none text-white" style={{"textColor":"#"}}>
                   
                    ABC Company<br/>Hiring Manager Name
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="#" className="nav-link  text-white" aria-current="page">

                            Edit  profile
                        </a>
                    </li>&nbsp;&nbsp;
                    <li>
                        <a href="#" className="nav-link text-white">

                            Track Hiring process
                        </a>
                    </li>&nbsp;&nbsp;
                    <li>
                        <a href="#" className="nav-link text-white">

                            job Openings
                        </a>
                    </li>&nbsp;&nbsp;
                    <li>
                        <a href="#" className="nav-link text-white">

                            Chat with interns
                        </a>
                    </li>&nbsp;&nbsp;
                    <li>
                        <a href="#" className="nav-link text-white">

                            View intern profile
                        </a>
                    </li>&nbsp;&nbsp;
                    <li>
                        <a href="#" className="nav-link text-white">

                            Update details
                        </a>
                    </li>&nbsp;&nbsp;
                </ul>
                &nbsp;&nbsp;
                <hr />
                
                 
                        <a href="#" className="nav-link text-white">
                        <i class="bi bi-box-arrow-right"></i>&nbsp;
                        logout
                        </a>
                   
            </div> 

        

                </React.Fragment >
                );
}
                export default SideBar;