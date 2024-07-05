import {Link } from "react-router-dom";
import uom from "../images/uom.png";


function Institutioncard(props) {
    return (
        <div className="card mt-5" style={{ backgroundColor: " rgba(80, 226, 204, 0.07)" }}>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <Link to={"/clickoneinstitution/"+props.data.id}><img src={uom} alt="companyImage" className="rounded-circle" style={{ "width": "100px" }}></img></Link>
                    </div>
                    <div className="col-md-6 mt-3" >
                        <h4 className="card-title">{props.data.name}</h4>
                        <h5 className="card-title">{props.data.institution}</h5>
                        <p className="card-title" style={{ color: "#1DD3B8" }}>{props.data.department}</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Institutioncard;