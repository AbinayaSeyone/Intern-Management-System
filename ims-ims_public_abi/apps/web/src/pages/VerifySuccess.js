//
// import {useParams} from "react-router-dom";
// import {gql, useQuery} from "@apollo/client";
// import React from "react";
// import verified from "../images/Verified.png";
// import wrong from "../images/Wrong.png";
//
// function VerifySuccess() {
//     const {internPoolId} = useParams();
//     console.log(internPoolId);
//
//     const otpVerify1 = gql`
//     query {
//       queryInternPoolOpening(
//         query: { id: { operator: eq, value: "${internPoolId}" } }
//       ) {
//         id
//         institution
//         name
//         department
//         openingDate
//         description
//         url
//         publisherMail
//         publisherName
//         publisherMobile
//         otp
//         otpVerify
//       }
//     }
//   `;
//
//     const {loading, data} = useQuery(otpVerify1);
//     if (loading) return <p>Loading...</p>;
//     if (!data) return null;
//     const otpData = data?.queryInternPoolOpening[0];
//
//     return (
//         <div>
//
//             {otpData.otpVerify ? (
//                 <div className="col-md-12 text-center mt-xxl-5">
//                     <div className="row mt-xxl-5"></div>
//                     <h1 className="text-center fw-bold
//                             ">
//                         Verfication Successful! Yours will be posted soon..!
//                     </h1>
//                     <img src={verified} alt="Not Found" className="img-fluid m-auto" style={{maxWidth: "300px"}}/>
//                 </div>
//             ) : (
//                 <div className="col-md-12 text-center mt-xxl-5">
//                     <div className="row mt-xxl-5"></div>
//                     <h1 className="text-center fw-bold
//                             ">
//                         Verfication failed!
//                     </h1>
//                     <img src={wrong} alt="Not Found" className="img-fluid m-auto" style={{maxWidth: "300px"}}/>
//
//                     <div className="fw-normal text-muted mb-2">
//                          <a href={"/otp/"+internPoolId}" className=" fw-bold text-decoration-none"
//                                                         style={{color: "#27CFBE"}}>Resend</a>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }
//
// export default VerifySuccess;

import { useParams, Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import React from "react";
import verified from "../images/Verified.png";
import wrong from "../images/Wrong.png";

function VerifySuccess() {
    const { internPoolId } = useParams();
    console.log(internPoolId);

    const otpVerify1 = gql`
    query {
      queryInternPoolOpening(
        query: { id: { operator: eq, value: "${internPoolId}" } }
      ) {
        id
        institution
        name
        department
        openingDate
        description
        url
        publisherMail
        publisherName
        publisherMobile
        otp
        otpVerify
      }
    }
  `;

    const { loading, data } = useQuery(otpVerify1);
    if (loading) return <p>Loading...</p>;
    if (!data) return null;
    const otpData = data?.queryInternPoolOpening[0];

    return (
        <div>
            {otpData.otpVerify ? (
                <div className="col-md-12 text-center mt-xxl-5">
                    <div className="row mt-xxl-5"></div>
                    <h1 className="text-center fw-bold">
                        Verification Successful! Yours will be posted soon..!
                    </h1>
                    <img
                        src={verified}
                        alt="Not Found"
                        className="img-fluid m-auto"
                        style={{ maxWidth: "300px" }}
                    />
                </div>
            ) : (
                <div className="col-md-12 text-center mt-xxl-5">
                    <div className="row mt-xxl-5"></div>
                    <h1 className="text-center fw-bold">Verification failed!</h1>
                    <img
                        src={wrong}
                        alt="Not Found"
                        className="img-fluid m-auto"
                        style={{ maxWidth: "300px" }}
                    />
                    <div className="fw-normal text-muted mb-2">
                        <Link
                            to={"/otp/" + internPoolId}
                            className="fw-bold text-decoration-none"
                            style={{ color: "#27CFBE" }}
                        >
                            Resend
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default VerifySuccess;
