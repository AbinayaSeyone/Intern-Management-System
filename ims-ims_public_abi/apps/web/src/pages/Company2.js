import React, {useState} from 'react';
import Nav from '../components/Nav1';
import {useNavigate, useParams} from "react-router-dom";
import {gql, useMutation, useQuery} from "@apollo/client";
import ADL from '../images/adl.jpg';
import swal from "sweetalert";


function Company2() {
    const {id} = useParams();
    console.log(id);
    const [suspendReason, setsuspendReason] = useState("");
    const [status1, setstatus1] = useState("true");
    const [verification, setverification] = useState("false");


    const GET_COMPANY_DATA_QUERY = gql`
query{
  queryCompany(query:{
id:[{value:"${id}"}]
  
})
{
id,
    name,
    address
    status1
    verification
    suspendReason
    starteddate
    mobileNo
    email
}
}
`;

    const ASSIGN_REASONSUSPEND_VARIABLE = gql`
      mutation PatchCompany($id: String!, $suspendReason: ObjectScalar) {
        patchCompany(
          id: $id,
          patch: [ 
            {
              path: "/suspendReason",
              value: $suspendReason
            },
            {
              path: "/status1",
              value: false
            }
          ]
        ) {
          id
          suspendReason
          status1
        }
      }
    `;


    const ASSIGN_VERIFICATION_VARIABLE = gql`
      mutation PatchCompany($id: String!) {
        patchCompany(
          id: $id,
          patch: [ 
            
            {
              path: "/verification",
              value: true
            }
          ]
        ) {
          id
        verification
        }
      }
    `;

    const [patchCompany] = useMutation(ASSIGN_REASONSUSPEND_VARIABLE, {
        onCompleted: (data) => {
            console.log('Resource created successfully:', data.patchCompany);
        },
    });

    const [patchCompany1] = useMutation(ASSIGN_VERIFICATION_VARIABLE, {
        onCompleted: (data) => {
            console.log('Resource created successfully:', data.patchCompany1);
        },
    });
    const navigate = useNavigate();
    // Function to handle suspend button
    const handleClick = (e) => {
        e.preventDefault();
        console.log(suspendReason)

        swal({
            title: "Are you sure?",
            text: "Do you want to suspend the Company?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const cid = id;
                    const patches =[
                        {
                            op: 'replace',
                            path: '/suspendReason',
                            value: suspendReason,
                        },
                        {
                            op: 'replace',
                            path: '/status1',
                            value: false,
                        }

                    ]

                    patchCompany({
                        variables: {
                            id: cid,
                            patch: patches,
                            suspendReason,
                            status1
                        },
                    });
                    swal("Company profile Suspended successfully!!", {
                        icon: "success",
                    });
                    navigate("/Company1")
                } else {
                    swal("suspending Company Cancelled");
                }
            });

        setstatus1(false);
    };


    const handleClickverify = (e) => {
        e.preventDefault();
        console.log(verification)
        swal({
            title: "Are you sure?",
            text: "Do you want to verify the company?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    const cid = id;
                    const patches =[

                        {
                            op: 'replace',
                            path: '/verification',
                            value: true,
                        }

                    ]; patchCompany1({
                        variables: {
                            id: cid,
                            patch: patches,
                            verification
                        },
                    });
                    swal("Company profile verified successfully", {
                        icon: "success",
                    });
                    navigate("/Company1")
                } else {
                    swal("company verification is cancelled!");
                }
            });



        setverification(false);
    };



    const { loading, error, data } = useQuery(GET_COMPANY_DATA_QUERY);
    console.log(data?.queryCompany[0]);

    return (
        <div>

            <div>
                <Nav></Nav>
                <div className='container mt-5'>
                    <div className="row border rounded border-success p-2 mb-5">
                        <div className='col-md-3  '>
                            <div className="card" style={{ "width": "250px", "height": "150px" }}>
                                <img className="card-img" src={ADL} alt="Card image cap" />
                            </div>
                        </div>
                        <div className='col-md-9'>
                            <div className="text-bg-info border rounded p-3"> Company Name:- {data?.queryCompany[0].name}</div>
                            <div className="text-bg-light border rounded p-3">Company Address:- {data?.queryCompany[0].address}</div>
                            <div className="text-bg-info border rounded p-3"> started date:- {data?.queryCompany[0].starteddate}</div>
                            <div className="text-bg-light border rounded p-3">Mobile No:- {data?.queryCompany[0].mobileNo}</div>
                            <div className="text-bg-info border rounded p-3"> Company-mail:- {data?.queryCompany[0].email}</div>

                            <button className="verify btn-lg" onClick={handleClickverify} >Verify the Company</button>
                            {!verification && <p>Verification is successfull!!</p>}
                            <br></br>
                        </div>
                        <div className='col-md-5 '>
                            <div className='row mt-3'>
                                <div className=' linkedin col-md-3'>
                                    <a className="btn  btn-lg" href={data?.queryCompany[0].linkedin} role="button">Linkedin</a>

                                </div>

                                <div className='website col-md-3'>
                                    <a className="btn  btn-lg" href={data?.queryCompany[0].websiteLink} role="button">Website</a>

                                </div>
                                <div className='facebook col-md-3'>
                                    <a className="btn text-white btn-lg" href={data?.queryCompany[0].facebooLink }role="button">facebook</a>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <form>

                        <div className=" mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Reason For Suspend</label>
                            <input type="text" onChange={(e)=>{setsuspendReason((e.target.value))}} className="form-control" />
                        </div>

                        <button type="button" onClick={handleClick}className="suspend btn-lg">Suspend the Intern</button> {!status1&& <p>suspended successful!!!</p>}
                    </form>


                </div>
            </div>
        </div>
    );
}

export default Company2;
