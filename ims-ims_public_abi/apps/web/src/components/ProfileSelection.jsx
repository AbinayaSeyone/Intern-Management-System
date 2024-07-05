import { Link } from "react-router-dom";

function ProfileSelection(props) {
    return (
        <div className="card mt-3" style={{ backgroundColor: " rgba(80, 226, 204, 0.07)" }}>
            <div className="card-body">
                <div className="row align-items-center">

                    <div className="col-md-6 mt-3">
                        <Link to="/clickonecompany"><img src={props.img} alt="companyImage" className="rounded-circle" style={{ "width": "100px" }}></img></Link>
                    </div>
                    {/* <div className="col-md-3"></div> */}
                    <div className="col-md-6 mt-3" >
                        <h4 className="card-title">{props.InternName}</h4>
                        <h5 className="card-title">{props.institutionName}</h5>
                        <p className="card-title" >{props.fieldName}</p>
                        <h5 className="card-title">{props.CGPA}</h5>

                    </div>
                    <div className="col-md-3">
                        <button type="button" class="btn btn-outline-info"><i class="bi bi-suit-heart">Add to Wishlist</i></button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProfileSelection;