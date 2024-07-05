import React from "react";
import Jobtable from "../components/Jobtable";
import Navibarr from "../components/Navibarr";
import {Link} from "react-router-dom";
import NavbarC from "../components/NavbarC";

function Jobcard(){

    return(
        <React.Fragment>
            {/*<Navibarr></Navibarr>*/}
            {/*<NavbarC></NavbarC>*/}
            <Link to="/Jobcreation">
                <div className="btn green btn-outline-primary"> Create</div>
            </Link>
            <Jobtable></Jobtable>

        </React.Fragment>
    );
}
export default Jobcard;
