// import home from "../images/home.jpg";
// import "../index.css";
// import {Link} from "react-router-dom";
// import React from "react";
//
//
// function Home() {
//     return (
//         <div>
//             <div className="row">
//                 <div className="col-md-2"><h1 style={{color: "#00967F", textAlign: "center"}}>IMS</h1></div>
//                 <div className="col-md-2"></div>
//                 <div className="col-md-8">
//                     <img src={home} alt="" className="image"></img>
//                 </div>
//             </div>
//             <div className="row justify-content-center mt-1">
//                 <div className="col-md-3">
//                     <Link to="/vacancy">
//                         <button type="submit" className="btn form-control btn-lg btn-success border border-secondary"
//                                 style={{backgroundColor: "#50E2CC"}}>
//                             <h4> View Vacancy {"   "}
//                                 <i className="bi bi-chevron-double-right"></i></h4>
//                         </button>
//                     </Link>
//                 </div>
//                 <div className="col-md-1"></div>
//                 <div className="col-md-3">
//                     <Link to="institution">
//                         <button type="submit" className="btn form-control btn-lg btn-success border border-secondary"
//                                 style={{backgroundColor: "#50E2CC"}}>
//                             <h4> View Intern pool{"   "}
//                                 <i className="bi bi-chevron-double-right"></i></h4>
//                         </button>
//                     </Link>
//                 </div>
//                 <div className="col-md-1"></div>
//                 <div className="col-md-3">
//                     <Link to="postinternpool">
//                         <button type="submit" className="btn form-control btn-lg btn-success border border-secondary"
//                                 style={{backgroundColor: "#50E2CC", borderColor: "#CCCCCC"}}>
//                             <h4> Post Intern pool {"   "}
//                                 <i className="bi bi-chevron-double-right"></i></h4>
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default Home;


import im1 from "../images/ims_gif.gif";

import {Link} from "react-router-dom";

import {FaUniversity} from "react-icons/fa";
import {BsSearch} from "react-icons/bs";

import {MdOutlineEditNote} from "react-icons/md"
import Nav1 from "../components/Nav1";
import NaviP from "../components/NaviP";

function HomeSample() {
    return (
        <div style={{position: "relative", minHeight: "100vh"}}>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "80%",
                    backgroundImage: `url(${im1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderBottomLeftRadius: "50%",
                    borderBottomRightRadius: "50%"

                }}
            ></div>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "80%",
                    background: "linear-gradient(to top, rgba(0, 255, 237, 0.4), rgba(255, 255, 255, 0.8))",
                    borderBottomLeftRadius: "50%",
                    borderBottomRightRadius: "50%"

                }}
            ></div>
            <div>
                <NaviP/>
            </div>

            <div className="row justify-content-lg-center" style={{ position: "absolute", bottom: 0, left: 0, width: "100%" ,padding:"40px"}}>
                <div className="col-md-2"></div>
                <div className="col-md-3 justify-content-center">
                    <Link to="/vacancy">
                    <div
                        style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            background: "rgba(80, 226, 204, 1)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}

                    >

                        <BsSearch style={{ color: "white", fontSize: "24px" }} />
                    </div>
                    </Link>
                    <h5> View Vacancies</h5>
                </div>
                <div className="col-md-3 justify-content-center">
                    <Link to="institution">
                    <div
                        style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            background: "rgba(80, 226, 204, 1)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <FaUniversity style={{ color: "white", fontSize: "24px" }} />
                    </div>
                    </Link>
                    <h5> View Intern Pool</h5>
                </div>
                <div className="col-md-3 justify-content-center">
                    <Link to="postinternpool">
                    <div
                        style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            background: "rgba(80, 226, 204, 1)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        < MdOutlineEditNote style={{ color: "white", fontSize: "24px" }} />
                    </div>
                    </Link>

                    {/*<FaSearch style={{color: "rgba(0, 255, 237, 0.4)", fontSize: '50px'}}/>*/}
                    <h5> Post Intern Pool Opening</h5>
                </div>
            </div>

        </div>





    )
        ;
}

export default HomeSample;
