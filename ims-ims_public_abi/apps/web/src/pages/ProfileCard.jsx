import React from "react";
import swal from "sweetalert";
// import Navibarr from "../components/Navibarr";
import Profilecard from "../components/Profilecard";
import user from "../images/userH.png";
import Hiringprocess1 from "./Hiringprocess1";
import {gql, useQuery, useMutation} from "@apollo/client";
import {useParams} from "react-router-dom";
import WishCom from "../components/wishcompro";


const Delete_Applicant_Mutation = gql`
mutation deleteApplicant($id: String!) {
    deleteApplicant(value: { id: $id }) {
      id
    }
  }
`;

const selectApplicant=gql`
mutation PatchApplicant($id: String!){
patchApplicant(
    id:$id,
    patch:[
        {
            from:"false",
            path:"/isSelected",
            value:"true"
        },
       ]
    ){
        id,
        isSelected
    }
   }
`;

const rejectApplicant=gql`
mutation patchApplicant($id: String!){
patchApplicant(
    id:$id,
    patch:[
        {
            from:"false",
            path:"/isRejected",
            value:"true"
        },
       ]
    ){
        id,
        isRejected
    }
   }
`;
function ProfileCard() {
    const vacancyId = (useParams("vacancyId")).vacancyId;

    const [patchApplicant] = useMutation(selectApplicant, {
        onCompleted: (data) => {
            console.log('Applicant selected successfully:', data?.patchApplicant);
        },
    });

    const [patchApplicant1] = useMutation(rejectApplicant, {
        onCompleted: (data) => {
            console.log('Applicant rejected successfully:', data?.patchApplicant);
        },
    });

    const profilelist = gql`
  query {
  queryApplicant(
    query: {
      vacancyId: { operator: eq, value: "${vacancyId}" }
      isApplied: { operator: eq, value: true }
      isSelected: { operator: eq, value: false }
      isRejected: { operator: eq, value: false }
    }
  ) {
    id
    internId
    vacancyId
   	isSelected
    isRejected
    isApplied
    wishlist
    __externalRef {
      ... on Intern {
        id
        firstname
        universityname
        cgpa
        skill
      }
    }
  }
}

`;

    const {loading,data} = useQuery(profilelist);
    console.log([...new Set(data?.queryApplicant.map(item => item.internId))]);
    console.log([...new Set(data?.queryApplicant.map(item => item.id))]);
    const uniqueInterns = [...new Set(data?.queryApplicant.map(item => item.internId))];
    console.log(uniqueInterns);

    // const internData = data?.queryApplicant[0].__externalRef[0];
    // const vacancyData = data?.queryVacancy[0];
    const [deleteApplicant] = useMutation(Delete_Applicant_Mutation);

    const handleReject = (applicantId) => {
        swal({
            title: "Are you sure?",
            text: "Do you want to reject this applicant ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const sid = applicantId;
                    const patches = [
                        {
                            op: 'replace',
                            path: '/isRejected',
                            value: true,
                        },
                    ];
                    patchApplicant1({
                        variables: {
                            id: sid,
                            patches: patches,
                        },
                    });
                    swal("Applicant rejected successfully", {
                        icon: "success",
                    });
                    // navigate("/student1")
                } else {
                    swal("Rejection cancelled");
                }
            });
        // setverification(true);
    };
    // const handleReject1 = (applicantId) => {
    //     swal({
    //         title: "Are you sure?",
    //         text: "Once deleted, you will not be able to recover all applicant details!",
    //         icon: "warning",
    //         buttons: true,
    //         dangerMode: true,
    //     }).then((willDelete) => {
    //         if (willDelete) {
    //             deleteApplicant({
    //                 variables: {
    //                     id: applicantId,
    //                 },
    //             })
    //                 .then(() => {
    //                     console.log(`Applicant ${applicantId} deleted successfully`);
    //                     swal(" Applicant details have been deleted successfully!", {
    //                         icon: "success",
    //                     });
    //                 })
    //                 .catch((error) => {
    //                     swal("An error occurred while deleting  Applicant details.", {
    //                         icon: "error",
    //                     });
    //                     console.log(`Error Reject applicant ${applicantId}`, error);
    //                 });
    //         } else {
    //             swal("The applicant details are safe!");
    //         }
    //     });
    // };

    const handleSelect = (applicantId) => {
        swal({
            title: "Are you sure?",
            text: "Do you want to select this applicant ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const sid = applicantId;
                    const patches = [
                        {
                            op: 'replace',
                            path: '/isSelected',
                            value: true,
                        },
                    ];
                    patchApplicant({
                        variables: {
                            id: sid,
                            patches: patches,
                        },
                    });
                    swal("Applicant selected successfully", {
                        icon: "success",
                    });
                    // navigate("/student1")
                } else {
                    swal("Selection cancelled");
                }
            });
        // setverification(true);
    };

    if (loading) {
        return <p>loading.....</p>;
    }
    if (!data) {
        return null;
    }

    return (
        <React.Fragment>
            <Hiringprocess1></Hiringprocess1>
            <div>
                {uniqueInterns.map((internId) => {
                    const applicant = data.queryApplicant.find((item) => item.internId === internId);
                    return (
                        <div className="row justify-content-center" key={internId}>
                            <div className="col-md-6">
                                <Profilecard data={applicant} />
                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick={() => handleSelect(applicant.id)}
                                    >
                                        Select
                                    </button>
                                    <h3>{applicant.id}</h3>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleReject(applicant.id)}
                                    >
                                        Reject
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    )

    // return (
    //     <React.Fragment>
    //         <Hiringprocess1></Hiringprocess1>
    //         <div>
    //             {uniqueInterns.map((internId) => (
    //                 <div className="row justify-content-center" key={internId}>
    //                     <div className="col-md-6"  >
    //                         <Profilecard
    //                             data={data.queryApplicant.find(
    //                                 (item)=>item.internId===internId)
    //                         }/>
    //                         <div>
    //                             <button type="button" className="btn btn-success " onClick={()=>handleSelect(data.id)}>
    //                                 Select
    //                             </button>
    //                             <h3>{data?.queryApplicant.id}</h3>
    //                             <button type="button" className="btn btn-danger" >
    //                                 {/*onClick={() => handleReject(x.id)}*/}
    //                                 Reject
    //                             </button>
    //                         </div>
    //
    //                     </div>
    //                 </div>
    //             ))}
    //
    //         </div>
    //     </React.Fragment>
    // );
}

export default ProfileCard;