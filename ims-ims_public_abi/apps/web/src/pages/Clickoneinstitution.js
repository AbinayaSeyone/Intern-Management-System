import React from "react";
import NaviBar from "../components/NaviBar";
import uom from "../images/uom.png";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import intern2 from "../images/home.jpg";

function Clickoneinstitution() {
    const institutionId = useParams("institutionId").institutionId;
    const MY_QUERY2 = gql`
    query {
      queryInternPoolOpening(query: { id: { operator: eq, value: "${institutionId}" } }) {
        id
        name
        institution
        department
        duration
        role
        openingDate
        description
        url
      }
    }
  `;

    const { loading, error, data } = useQuery(MY_QUERY2);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data || !data.queryInternPoolOpening) return null;

    const { name, institution, department, description, duration, role, openingDate, url } =
        data.queryInternPoolOpening[0];

    return (
        <React.Fragment>
            <NaviBar />
            <div
                className="card "
                style={{
                    backgroundColor: "rgba(80, 226, 204, 0.92)",
                    borderBlock: "2px solid #CCCCCC",
                    boxSizing: "border-box",
                }}
            >
                <div className="card-body">
                    <h1 className="text-center" style={{ color: "white" }}>
                        {institutionId}
                    </h1>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-6">
                        <div
                            className="card"
                            style={{
                                backgroundColor: "rgba(80, 226, 204, 0.07)",
                                borderColor: "#CCCCCC",
                            }}
                        >
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4 mt-3">
                                        <img
                                            src={uom}
                                            alt="companyImage"
                                            className="rounded-circle"
                                            style={{ width: "140px" }}
                                        />
                                    </div>
                                    <div className="col-md-8 mt-5">
                                        <h4 className="card-title">{name}</h4>
                                        <h5 className="card-title">{institution}</h5>
                                        <p className="card-title" style={{ color: "#1DD3B8" }}>
                                            {department}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="card mt-3"
                            style={{
                                backgroundColor: "rgba(80, 226, 204, 0.07)",
                                borderColor: "#CCCCCC",

                            }}
                        >
                            <img
                                className="card-img"
                                src={intern2}
                                alt="Card image"
                                style={{ opacity: "20%", height:"320px"
                            }}
                            />
                            <div className="card-img-overlay">
                                <div className="card-body">
                                    <h4 className="card-title">Description</h4>
                                    <p className="card-text">{description}</p>
                                    <h4 className="card-text">Other Details</h4>
                                    <ul className="card-text" style={{ listStyleType: "disc" }}>
                                        <li>{duration}</li>
                                        <li>{role}</li>
                                        <li>{openingDate}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                            <img src={url} className="card-img-top" style={{height:"533px" ,width:"500px",float:"right"}} alt="Company" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Clickoneinstitution;



// import React, { useEffect, useState } from "react";
// import NaviBar from "../components/NaviBar";
// import uom from "../images/uom.png";
// import { useParams } from "react-router-dom";
// import { gql, useQuery } from "@apollo/client";
// import intern2 from "../images/home.jpg";
//
// function Clickoneinstitution() {
//     const institutionId = useParams("institutionId").institutionId;
//     const MY_QUERY2 = gql`
//     query {
//       queryInternPoolOpening(query: { id: { operator: eq, value: "${institutionId}" } }) {
//         id
//         name
//         institution
//         department
//         duration
//         role
//         openingDate
//         description
//         url
//       }
//     }
//   `;
//
//     const { loading, error, data } = useQuery(MY_QUERY2);
//
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error.message}</p>;
//     if (!data || !data.queryInternPoolOpening) return null;
//
//     const { id, name, role, institution, department, duration, url, openingDate, description } =
//         data.queryInternPoolOpening[0];
//
//     return (
//         <React.Fragment>
//             <NaviBar />
//             <div
//                 className="card "
//                 style={{
//                     backgroundColor: "rgba(80, 226, 204, 0.92)",
//                     borderBlock: "2px solid #CCCCCC",
//                     boxSizing: "border-box",
//                 }}
//             >
//                 <div className="card-body">
//                     <h1 className="text-center" style={{ color: "white" }}>
//                         {institutionId}
//                     </h1>
//                 </div>
//             </div>
//
//             <div className="container mt-5">
//                 <div className="row">
//                     <div className="col-md-7">
//                         <div
//                             className="card"
//                             style={{
//                                 backgroundColor: "rgba(80, 226, 204, 0.07)",
//                                 borderColor: "#CCCCCC",
//                             }}
//                         >
//                             <div className="card-body">
//                                 <div className="row">
//                                     <div className="col-md-4 mt-3">
//                                         <img
//                                             src={uom}
//                                             alt="companyImage"
//                                             className="rounded-circle"
//                                             style={{ width: "140px" }}
//                                         />
//                                     </div>
//                                     <div className="col-md-8 mt-5">
//                                         <h4 className="card-title">{name}</h4>
//                                         <h5 className="card-title">{institution}</h5>
//                                         <p className="card-title" style={{ color: "#1DD3B8" }}>
//                                             {department}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-5">
//                         <div className="card">
//                             <img src={url} className="card-img-top" alt="Company" />
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="row nav-justified">
//                     <div className="col-md-7">
//                         <div
//                             className="card"
//                             style={{
//                                 backgroundColor: "rgba(80, 226, 204, 0.07)",
//                                 borderColor: "#CCCCCC",
//                             }}
//                         >
//                             <img
//                                 className="card-img"
//                                 src={intern2}
//                                 alt="Card image"
//                                 style={{ opacity: "20%" }}
//                             />
//                             <div className="card-img-overlay">
//                                 <div className="card-body">
//                                     <h4 className="card-title">Description</h4>
//                                     <p className="card-text">{description}</p>
//                                     <h4 className="card-text">Skills</h4>
//                                     <ul className="card-text" style={{ listStyleType: "disc" }}>
//                                         <li>{duration}</li>
//                                         <li>{role}</li>
//                                         <li>{openingDate}</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </React.Fragment>
//     );
// }
//
// export default Clickoneinstitution;

