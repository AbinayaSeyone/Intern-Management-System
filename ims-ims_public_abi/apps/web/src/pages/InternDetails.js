import React from "react";
import Internpoolcard from "../components/Internpoolcard";
import NaviBar from "../components/NaviBar";
import {useParams} from "react-router-dom";

function InternDetails() {
    const institutionId = useParams("institutionId").institutionId;

    return (
        <React.Fragment>
            <NaviBar></NaviBar>
            <div className="container mt-4">
                <h1>Intern Details</h1>
                <h1>{institutionId} </h1>
                <Internpoolcard
                    iname="Abinaya Seyone"
                    skills="Javascript"
                    img="https://i.pravatar.cc/150?img=1"
                ></Internpoolcard>

                <Internpoolcard
                    iname="Abinaya Seyone"
                    skills="Javascript"
                    img="https://i.pravatar.cc/150?img=2"
                ></Internpoolcard>
            </div>
        </React.Fragment>

    );

}
export default InternDetails;