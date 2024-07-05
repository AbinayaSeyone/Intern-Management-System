import React from "react";
import AnalysisFH from "../components/AnalysisFH";
import Navibarr from "../components/Navibarr";
import HiringprocessNavi from "../components/HiringprocessNavi";

function hirLast(){
    return(
        <div>
            <React.Fragment>
                <Navibarr></Navibarr>
                <HiringprocessNavi/>
                <AnalysisFH></AnalysisFH>
            </React.Fragment>
        </div>
    );
}
export default hirLast;