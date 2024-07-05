import React from "react";
import "../css/Vacancycard.css"

function HiringprocessNavi() {
    return (
        <div className="hirN">
        <div className="row justify-content-center mt-1 ">
            <div className="col-md-2">
                <button type="button" class="btn  btn-lg btn-outline-dark">Applicant's profile</button>
            </div>
            <div className="col-md-2">
                <button type="button" class="btn   btn-lg btn-outline-dark">Selection</button>
            </div>
            <div className="col-md-2">
                <button type="button" class="btn   btn-lg btn-outline-dark">Send notification</button>
            </div>
            <div className="col-md-2">
                <button type="button" class="btn   btn-lg btn-outline-dark">Interview</button>
            </div>
        </div>
        </div>
    );
}
export default HiringprocessNavi;