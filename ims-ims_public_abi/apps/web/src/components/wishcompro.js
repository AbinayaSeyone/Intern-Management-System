import React from 'react';
import { Link } from 'react-router-dom';
const WishCom = (props) => {


    return (
        <div className style={{ backgroundColor: " rgba(80, 226, 204, 0.07)" }}
        >
            <div className="card-body">
                <div className="row">
                    <div className="col-md-4">
                        <img
                            src="profile.jpeg"
                            alt="companyImage"
                            className="rounded-circle"
                            style={{ width: "60px" }}
                        ></img>
                    </div>
                    <div className="col-md-8 mt-2">
                        <h5 className="card-title">{props.data?.__externalRef[0].__externalRef[0].name}</h5>
                        <h6 className="card-title">{props.data?.__externalRef[0].name}</h6>
                        <h6 className="card-title">{props.data?.__externalRef[0].id}</h6>
                        <p className="card-title" style={{ color: "#1DD3B8" }}>{props.data?.__externalRef[0].__externalRef[0].email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WishCom;
