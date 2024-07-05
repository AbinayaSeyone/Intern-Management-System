
import user from "../images/user.png"

function Profilecard(props) {
    return (
        <div className="card mt-3" style={{ backgroundColor: " rgba(80, 226, 204, 0.07)" }}>
            <div className="card-body">
                <div className="row align-items-center">

                    <div className="col-md-2 mt-2">
                        <img src={user} alt="companyImage" className="rounded-circle" style={{ "width": "100px" }}></img>
                    </div>
                    <div className="col-md-4 mt-3" >
                        <h4 className="card-title">{props.data?.__externalRef[0].firstname}</h4>
                        <h5 className="card-title">{props.data?.__externalRef[0].universityname}</h5>
                        <p className="card-title" >{props.data?.__externalRef[0].cgpa}</p>
                        <h5 className="card-title">{props.data?.__externalRef[0].skill}</h5>
                        {/*<p className="card-title" >{props.data?.__externalRef[0].name}</p>*/}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Profilecard;