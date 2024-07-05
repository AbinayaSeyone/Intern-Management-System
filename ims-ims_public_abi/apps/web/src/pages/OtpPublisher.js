// import "../index.css"
// import React, {useState} from 'react';
// import {useMutation, gql, useQuery} from '@apollo/client';
// import NaviBar from '../components/NaviBar';
// import {Link, useParams} from "react-router-dom";
// import swal from "sweetalert";
//
// function OtpPublisher() {
//
//     const {internPoolId} = useParams();
//     console.log(internPoolId);
//
//
//     const otpOfPublisher = gql`
//     mutation patchInternPoolOpening(
//       $id: String!
//       $otp: ObjectScalar
//     ) {
//       patchInternPoolOpening(
//         id: $id
//         patch: [
//           {
//             from: "null"
//             path: "/otp"
//             value: $otp
//           }
//         ]
//       ) {
//         id
//         otp
//       }
//     }
//   `;
//
//     const [otp, setOtp] = useState('');
//
//     const [patchInternPoolOpening] = useMutation(otpOfPublisher, {
//         onCompleted: (data) => {
//             console.log('Resource created successfully:', data.patchInternPoolOpening);
//         },
//     });
//
//     const handleClick = (e) => {
//         e.preventDefault()
//         swal({
//             title: 'Are you sure?',
//             text: 'Do you want to post this intern pool opening?',
//             icon: 'warning',
//             buttons: true,
//             dangerMode: true,
//         }).then((willDelete) => {
//             if (willDelete) {
//                 const pid = internPoolId;
//                 const patches = [
//                     {
//                         op: 'replace',
//                         path: '/otp',
//                         value: otp,
//                     },
//                 ];
//                 patchInternPoolOpening({
//                     variables: {
//                         id: pid,
//                         patches: patches,
//                         otp
//                     },
//                 });
//                 swal('Details of the publisher Saved Successfully!', {
//                     icon: 'success',
//                 });
//                 window.location.href = `/verify/${internPoolId}`;
//             } else {
//                 swal("Details didn't save");
//             }
//         });
//     };
//
//
//
//
//
//     return (
//
//         <React.Fragment>
//             <NaviBar></NaviBar>
//
//
//             <div className="card " style={{
//                 backgroundColor: "rgba(39, 207, 190, 0.47)",
//                 borderBlock: "2px solid #CCCCCC",
//                 boxSizing: "border-box"
//             }}>
//                 <div className="card-body">
//                     <h1 className="text-center">Pls enter the OTP number</h1>
//                 </div>
//             </div>
//
//             <div className="container">
//
//                     <div className="row justify-content-center mt-5">
//                         <div className="col-md-5">
//                             <form onSubmit={handleClick}>
//                                 <div className="otp_input text-start mb-5">
//                                     <label for="digit">Type your 6 digit security code</label>
//                                     <div class="d-flex align-items-center justify-content-between mt-5">
//                                         <input type="text" className="form-control" placeholder=""
//                                                onChange={(e) => {
//                                                    setOtp(e.target.value);
//                                                }}
//                                         />
//                                         {/*<input type="text" className="form-control" placeholder="" />*/}
//                                         {/*<input type="text" className="form-control" placeholder="" />*/}
//                                         {/*<input type="text" className="form-control" placeholder="" />*/}
//                                         {/*<input type="text" className="form-control" placeholder="" />*/}
//                                         {/*<input type="text" className="form-control" placeholder="" />*/}
//                                     </div>
//
//                                 </div>
//                                 <button variant="success" type="submit" className="btn btn-primary submit_btn my-4"
//                                         style={{
//                                             backgroundColor: " rgba(80, 226, 204, 0.92)",
//                                             borderColor: "#CCCCCC"
//                                         }}>Submit
//                                 </button>
//                             </form>
//                             <div className="fw-normal text-muted mb-2">
//                                 <p>Didn't get the code ?</p>
//                                 <Link
//                                     to={"/otp/" + internPoolId}
//                                     className="fw-bold text-decoration-none"
//                                     style={{ color: "#27CFBE" }}
//                                 >
//                                     Resend
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//             </div>
//         </React.Fragment>
//
//     );
// }
//
// export default OtpPublisher;

import "../index.css";
import React, { useState } from "react";
import { useMutation, gql, useQuery } from "@apollo/client";
import NaviBar from "../components/NaviBar";
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert";

function OtpPublisher() {
    const { internPoolId } = useParams();
    console.log(internPoolId);

    const otpOfPublisher = gql`
    mutation patchInternPoolOpening($id: String!, $otp: ObjectScalar) {
      patchInternPoolOpening(
        id: $id
        patch: [
          {
            from: "null"
            path: "/otp"
            value: $otp
          }
        ]
      ) {
        id
        otp
      }
    }
  `;

    const [otp, setOtp] = useState("");

    const [patchInternPoolOpening] = useMutation(otpOfPublisher, {
        onCompleted: (data) => {
            console.log("Resource created successfully:", data.patchInternPoolOpening);
        },
    });

    const handleClick = (e) => {
        e.preventDefault();
        swal({
            title: "Are you sure?",
            text: "Do you want to post this intern pool opening?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                const pid = internPoolId;
                const patches = [
                    {
                        op: "replace",
                        path: "/otp",
                        value: otp,
                    },
                ];
                patchInternPoolOpening({
                    variables: {
                        id: pid,
                        patches: patches,
                        otp,
                    },
                });
                swal("Details of the publisher Saved Successfully!", {
                    icon: "success",
                });
                window.location.href = `/verify/${internPoolId}`;
            } else {
                swal("Details didn't save");
            }
        });
    };

    const handleInputChange = (e, index) => {
        const newOtp = otp.split("");
        newOtp[index] = e.target.value;
        setOtp(newOtp.join(""));
    };

    return (
        <React.Fragment>
            <NaviBar></NaviBar>

            <div
                className="card"
                style={{
                    backgroundColor: "rgba(39, 207, 190, 0.47)",
                    borderBlock: "2px solid #CCCCCC",
                    boxSizing: "border-box",
                }}
            >
                <div className="card-body">
                    <h1 className="text-center">Please enter the OTP number</h1>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-5">
                        <form onSubmit={handleClick}>
                            <div className="otp_input text-start mb-5">
                                <label htmlFor="digit">Type your 6-digit security code</label>
                                <div className="d-flex align-items-center justify-content-between mt-5">
                                    {[0, 1, 2, 3, 4, 5].map((index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            className="form-control"
                                            maxLength="1"
                                            value={otp[index] || ""}
                                            onChange={(e) => handleInputChange(e, index)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <button
                                variant="success"
                                type="submit"
                                className="btn btn-primary submit_btn my-4"
                                style={{
                                    backgroundColor: "rgba(80, 226, 204, 0.92)",
                                    borderColor: "#CCCCCC",
                                }}
                            >
                                Submit
                            </button>
                        </form>
                        <div className="fw-normal text-muted mb-2">
                            <p>Didn't get the code?</p>
                            <Link
                                to={"/otp/" + internPoolId}
                                className="fw-bold text-decoration-none"
                                style={{ color: "#27CFBE" }}
                            >
                                Resend
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default OtpPublisher;
