import AnimatedImage from "./AnimatedImage";
import im1 from "../images/ims_gif.gif";
import NavbarC from "../components/NavbarC";

import {FaUniversity} from "react-icons/fa";
import {BsSearch} from "react-icons/bs";

import {MdOutlineEditNote} from "react-icons/md"

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
                <NavbarC/>
            </div>

            <div className="row justify-content-lg-center" style={{ position: "absolute", bottom: 0, left: 0, width: "100%" ,padding:"40px"}}>
                <div className="col-md-2"></div>
                <div className="col-md-3 justify-content-center">
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
                    <h5> View Vacancies</h5>
                </div>
                <div className="col-md-3 justify-content-center">
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
                    <h5> View Intern Pool</h5>
                </div>
                <div className="col-md-3 justify-content-center">
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

                    {/*<FaSearch style={{color: "rgba(0, 255, 237, 0.4)", fontSize: '50px'}}/>*/}
                    <h5> Post Intern Pool Opening</h5>
                </div>
            </div>

</div>





)
    ;
}

export default HomeSample;
