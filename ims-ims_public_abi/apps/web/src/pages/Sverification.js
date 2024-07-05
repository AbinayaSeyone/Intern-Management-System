import React, { useState } from 'react';
import {useMutation, gql, useQuery} from '@apollo/client';
import {useNavigate, useParams} from "react-router-dom";
import internverification from "../images/internverification.png";
import  Nav from "../components/Nav1"
import studentimg from "../images/sa.jpg";
import swal from "sweetalert";


function Sverification() {
    const{id}=useParams();
    console.log(id);


    const GET_STUDENT_DATA_QUERY = gql`
query{
  queryIntern(query:{
id:[{value:"${id}"}]
  
})
{
  id,
  name,
  uniname,
  unimail,
  course,
  linkedin
  verification
  status1
  reasonSuspend
  reverify
}
}
`;
    const ASSIGN_VERIFY_VARIABLE  = gql`
  mutation PatchIntern($id: String!) {
    patchIntern(
      id: $id,
      patch: [
      {
        from: "null",
        path: "/verification",
        value: "true"
      }, 
         
      ]
      
    ) {
      id
      verification
    
    }
  }
`;

    const ASSIGN_SUSPEND_VARIABLE  = gql`
  mutation PatchIntern($id: String!,$reasonSuspend: ObjectScalar) {
    patchIntern(
      id: $id,
      patch: [ 
      {
        from: "null",
        path: "/status1",
        value: "false"
      },
        {
        from: "null",
        path: "/reasonSuspend",
        value: $reasonSuspend
      }
         
      ]
      
    ) {
      id
      status1
      reasonSuspend
    }
  }
`;
    const [reasonSuspend, setreasonSuspend] = useState("");
    const [verification, setverification] = useState(false);
    const [patchIntern] = useMutation(ASSIGN_VERIFY_VARIABLE, {
        onCompleted: (data) => {
            console.log('Resource created successfully:', data.patchIntern);
        },
    });
    const navigate = useNavigate();

    // Function to handle verify button
    const handleClick = () => {
        swal({
            title: "Are you sure?",
            text: "Do you want to verify this intern ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const sid = id;
                    const patches = [
                        {
                            op: 'replace',
                            path: '/verification',
                            value: true,
                        },
                    ];
                    patchIntern({
                        variables: {
                            id: sid,
                            patches: patches,
                        },
                    });
                    swal("Intern Verified Successfully", {
                        icon: "success",
                    });
                    navigate("/student1")
                } else {
                    swal("Verification Cancelled");
                }
            });
        // setverification(true);
    };



    const [status2, setstatus2] = useState(false);
    const [patchIntern1] = useMutation(ASSIGN_SUSPEND_VARIABLE, {
        onCompleted: (data) => {
            console.log('Resource created successfully:', data.patchIntern1);
        },
    });


    // Function to handle suspend button
    const handleClicksuspend = () => {
        swal({
            title: "Are you sure?",
            text: "Do you want to suspend this intern ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((suspend) => {
                if (suspend) {
                    const sid = id;
                    const patches = [
                        {
                            op: 'replace',
                            path: '/status1',
                            value: false,
                        },
                        {
                            op: 'replace',
                            path: '/reasonSuspend',
                            value: reasonSuspend,
                        },
                    ];
                    patchIntern1({
                        variables: {
                            id: sid,
                            patches: patches,
                            reasonSuspend
                        },
                    });
                    swal("Intern suspended successfully", {
                        icon: "success",
                    });
                    navigate("/student1")
                } else {
                    swal("Suspending the intern is cancelled");
                }
            });


        setstatus2(true);
        setreasonSuspend(reasonSuspend);
    };



    const {data} = useQuery(GET_STUDENT_DATA_QUERY);
    console.log(data?.queryIntern[0])
    return (
        <div className="cardb">
            <Nav> </Nav>
            <div >

                <div className="row justify-content-center mt-3">
                    <div className=" col-md-9 ">
                        <div className="card1 row"style={{
                            backgroundColor: "#ffffff",
                            borderRadius: "10px",
                            borderColor: "#ffffff",
                            borderWidth: "0.5px",
                            borderStyle: "solid" ,
                            boxShadow: "0px 0px 5px 2px rgba(8, 151, 157, 0.4)",
                            fillOpacity:"1"


                        }}>
                            <div className="col-md-6 mt-3"> <div className="col-md-3 "><img src={studentimg} class="rounded-image" style={{"width": "150px", "height": "100px  "}} className="card-img-top" alt="..."/></div>
                            </div>
                            <div className="col-md-12 mt-3">
                                <div className="col-md-3 text-bg-success">
                                    {data?.queryIntern[0].reverify != null && (
                                        <h6 className="p-2 text-right">Reverify Reason: {data?.queryIntern[0].reverify}</h6>
                                    )}
                                </div>

                            </div>
                            <div className="border1 col-md-12 mt-3 ">
                                <h6 className="p-2 text-right  " > Intern Name     :  {data?.queryIntern[0].name}</h6>

                                <h6 className="p-2 text-right">  University Name   :  {data?.queryIntern[0].uniname}</h6>
                                <h6 className=" p-2 text-right"> University Mail   :  {data?.queryIntern[0].unimail}</h6>
                                <h6 className=" p-2 text-right">
                                    <a className="btn btn-primary btn-lg" href={data && data.queryIntern && data.queryIntern[0] && data.queryIntern[0].linkedin} role="button">Linkedin</a>
                                </h6>
                            </div>
                            <button className="verify" onClick={handleClick} >Verify the intern</button>
                            {verification && <p>Verification is successfull!!</p>}

                            <br></br>
                            <form>

                                <div className=" mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Reason For Suspend</label>
                                    <input type="text" onChange={(e)=>{setreasonSuspend((e.target.value))}} className="form-control" />
                                </div>

                                <button type="button" onClick={handleClicksuspend}className="suspend btn-lg">Suspend the Intern</button> {status2 && <p>suspended successful!!!</p>}
                            </form>
                            <p>{reasonSuspend}</p>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );

}

export default Sverification;
