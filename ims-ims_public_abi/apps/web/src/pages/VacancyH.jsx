import VacancycardH from "../components/VacancycardH";
import React from "react";
import "../css/Vacancycard.css"
import Navibarr from '../components/Navibarr';
import {gql, useQuery} from "@apollo/client";
import {Link} from "react-router-dom";

const jobtitle = gql`
query {
  queryVacancy(query: {hiringManager:{operator:eq,value:"001"}}) {
    id
    title
  }
}
`;

function VacancyH() {
    const {loading, data} = useQuery(jobtitle);
    if (loading) {
        return <p>loading....</p>
    }
    if (!data) {
        return null;
    }
    return (
        <React.Fragment>
            <Navibarr></Navibarr>
            <div className="row justify-content-xl-center mt-4 container ">
                {data.queryVacancy.map(x => (
                    <div className="col-md-8">
                            <VacancycardH
                                key={x.id}
                                data={x}
                            >
                            </VacancycardH>
                        {/*<div className="col-md-3"/>*/}
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
}

export default VacancyH;