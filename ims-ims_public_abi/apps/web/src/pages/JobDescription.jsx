// import React from "react";
// import Navibarr from "../components/Navibarr";
// import {gql, useQuery} from "@apollo/client";
// // import SidebarC from "../components/SidebarC";
//
//
//
// const jobdetail=gql`
// query{
//     queryVacancy(query:{id:{operator:eq,value:"010"}}){
//         id,
//             title,
//             type,
//             skills,
//             postdate,
//             skills,
//             description
//     }
// }`;
// function JobDescription(){
//     const {loading,data}=useQuery(jobdetail);
//     if(loading){
//         return <p>loading.....</p>
//     }
//     if(!data){
//         return null;
//     }
//     return(
//         <React.Fragment>
//             <Navibarr></Navibarr>
//             {/*<SidebarC></SidebarC>*/}
//             <div className="container mt-5 col-md-7">
//                 <div className="card ">
//                     <div className="card-header ">
//                         Job Details
//                     </div>
//                     {data.queryVacancy.map(x=>(
//                         <div className="card-body green" key={x.id}>
//
//                             <h3 className="job-title text-center">{x.title}</h3>
//                             <h6>ID: </h6>
//
//                             <h6>Company Name:{x.id}</h6>
//                             <h6>Fielid Posistion:{x.title}</h6>
//                             <h6>Job type:{x.type}</h6>
//                             <h6>Skills:{x.skills}</h6>
//                             <h6>location:{x.location}</h6>
//                             <h6>Posted Date:{x.postdate}</h6>
//                             <h6>Description:{x.description}</h6>
//                             <h6> Status:{x.status}</h6>
//                         </div>
//                     ))}
//                     <div className="table ">
//                         <tr>
//                             <th>Total Applicants:.......... </th>
//
//                         </tr>
//                     </div>
//                     <div className="card-footer text-muted">
//                         <a href="#" className="btn  justify-content-center green btn-outline-dark">Back</a>
//                     </div>
//
//                 </div>
//             </div>
//         </React.Fragment>
//     );
// }

// export default JobDescription;

import React from "react";
import Navibarr from "../components/Navibarr";
import {gql, useQuery} from "@apollo/client";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
function JobDescription(){

    const  vacancyId  = (useParams("vacancyId")).vacancyId;


    const jobdetail=gql`
query{

    queryVacancy(query:{id:{operator:eq,value:"${vacancyId}"}}){
            id,
            title,
            type,
            skills,
            postdate,
            
            description,
            status
            
    }
}`;

    const {loading,data}=useQuery(jobdetail);
    const x= data?.queryVacancy[0];
    if(loading){
        return <p>loading.....</p>
    }
    // const x= data?.queryVacancy[0];

    if(!data){
        return null;
    }




    return(
        <React.Fragment>
            <Navibarr></Navibarr>

            <div className="container mt-5 col-md-7">
                <div className="card ">
                    <div className="card-header ">
                        Job Details
                    </div>


                    <h6>ID: {x.id}</h6>

                    {/*<h6>Company Name:{x.id}</h6>*/}
                    <h6>Fielid Posistion:{x.title}</h6>
                    <h6>Job type:{x.type}</h6>
                    <h6>Skills:{x.skills}</h6>
                    <h6>location:{x.location}</h6>
                    <h6>Posted Date:{x.postdate}</h6>
                    <h6>Description:{x.description}</h6>
                    <h6> Status:{x.status}</h6>
                    <Link to="/Jobcard">
                        <div className="card-footer text-muted">
                            <a href="#" className="btn  justify-content-center green btn-outline-dark">Back</a>
                        </div>
                    </Link>

                </div>



            </div>
            {/*</div>*/}
        </React.Fragment>
    );
}
export default JobDescription;
