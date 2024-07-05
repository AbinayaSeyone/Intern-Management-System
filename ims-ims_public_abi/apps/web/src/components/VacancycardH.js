import React from "react";
import "../css/Vacancycard.css"
import {Link} from "react-router-dom";
import companylogo from "../images/companylogo.jpg";
function VacancycardH(props){
    return(
        <div className=" green">
            <Link to={"/profilecard/"+props.data.id}>
                <h3 style={{textAlign:"center"}}>{props.data.title} </h3>
            </Link>
                <h3 style={{textAlign:"center"}}>{props.data.id} </h3>
        </div>

    );
}
export default VacancycardH;