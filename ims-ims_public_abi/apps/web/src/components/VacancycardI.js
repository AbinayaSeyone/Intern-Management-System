import {Link, useLocation} from "react-router-dom";
import companylogo from "../images/companylogo.jpg";


function Vacancycard(props) {

    const location = useLocation();

    const loginResponse = new URLSearchParams(location.search).get('loginResponse');
    const parsedLoginResponse = JSON.parse(loginResponse);

    // Extract the userId from the login response
    const userId = parsedLoginResponse.id;
    console.log(userId)

    return (
        <div className="card mt-5" style={{ backgroundColor: " rgba(80, 226, 204, 0.07)" }}>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <Link to={{
                            pathname: "/Apply/"+props.data.id,
                            search: `?loginResponse=${encodeURIComponent(
                            JSON.stringify(parsedLoginResponse)
                            )}`,
                        }}
                        ><img src={companylogo} alt="companyImage" className="rounded-circle" style={{ "width": "100px" }}></img></Link>
                    </div>
                    <div className="col-md-6 mt-3" >
                        <h4 className="card-title">{props.data.name}</h4>
                        <h5 className="card-title">{props.data.id}</h5>
                        <p className="card-title" style={{ color: "#1DD3B8" }}>{props.data.field}</p>
                    </div>
                </div>
            </div>
        </div>
    // to={"/Apply/"+props.data.id}

    );
}

export default Vacancycard;