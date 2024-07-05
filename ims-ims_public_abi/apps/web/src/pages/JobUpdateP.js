// import React, {useEffect, useState} from "react";
// import Navibarr from "../components/Navibarr";
//
// import {Link, useParams} from "react-router-dom";
// import {gql, useQuery} from "@apollo/client";
// function JobUpdateP(){
//     const  vacancyId  = (useParams("vacancyId")).vacancyId;
//     const jobdetail=gql`
// query{
//
//     queryVacancy(query:{id:{operator:eq,value:"${vacancyId}"}}){
//             id,
//             title,
//             type,
//             skills,
//             postdate,
//
//             description,
//             status
//     }
// }`;
//     // const[title, settitle] = useState();
//     // const[type, settype] = useState();
//     // const[skills, setskills] = useState()
//     // const[postDate, setpostDate] = useState();
//     // const[desc, setdesc] = useState();
//     // const[status, setstatus] = useState();
//     //
//     //     // const {loading,data}=useQuery(jobdetail)
//     //     // const x= data?.queryVacancy[0];
//     //     settitle(x?.title);
//     //     settype(x?.type);
//     //     setskills(x?.skills);
//     //     setpostDate(x?.postdate);
//     //     setdesc(x?.description);
//     //     setstatus(x?.status);
//     //
//     //     console.log(x)
//
//
//
//     const {loading,data}=useQuery(jobdetail);
//     const x= data?.queryVacancy[0];
//
//     if(loading){
//         return <p>loading.....</p>
//     }
//     // const x= data?.queryVacancy[0];
//
//     if(!data){
//         return null;
//     }
//
//     return(
//         <React.Fragment>
//             <Navibarr></Navibarr>
//             <div className="container mt-5 col-md-7">
//                 <div className="card ">
//                     <div className="card-header justify-content-center ">
//                         Job Details
//                     </div>
//
//                     <div className="row justify-content-center">
//                         <div className="col-md-2"></div>
//                         <div className="form-group col-md-3">
//                             <label htmlFor="inputFirst name">ID</label>
//                         </div>
//                         <div className="form-group col-md-5">
//                             <input type="text"  className="form-control" id="inputEmail4"
//                                    value={x.id}/>
//                         </div>
//                     </div>
//
//
//                     <div className="row justify-content-center">
//                         <div className="col-md-2"></div>
//                         <div className="form-group col-md-3">
//                             <label htmlFor="inputFirst name">Title</label>
//                         </div>
//                         <div className="form-group col-md-5">
//                             <input type="text"  className="form-control" id="inputEmail4"
//                                    value={x.title}/>
//                         </div>
//                     </div>
//
//                     <div className="row justify-content-center">
//                         <div className="col-md-2"></div>
//                         <div className="form-group col-md-3">
//                             <label htmlFor="inputFirst name">Type</label>
//                         </div>
//                         <div className="form-group col-md-5">
//                             <input type="text"  className="form-control" id="inputEmail4"
//                                    value={x.type}/>
//                         </div>
//                     </div>
//
//                     <div className="row justify-content-center">
//                         <div className="col-md-2"></div>
//                         <div className="form-group col-md-3">
//                             <label htmlFor="inputFirst name">Skills</label>
//                         </div>
//                         <div className="form-group col-md-5">
//                             <input type="text"  className="form-control" id="inputEmail4"
//                                    value={x.skills}/>
//                         </div>
//                     </div>
//
//                     <div className="row justify-content-center">
//                         <div className="col-md-2"></div>
//                         <div className="form-group col-md-3">
//                             <label htmlFor="inputFirst name">Location</label>
//                         </div>
//                         <div className="form-group col-md-5">
//                             <input type="text"  className="form-control" id="inputEmail4"
//                                    value={x.location}/>
//                         </div>
//                     </div>
//
//                     <div className="row justify-content-center">
//                         <div className="col-md-2"></div>
//                         <div className="form-group col-md-3">
//                             <label htmlFor="inputFirst name">Post Date</label>
//                         </div>
//                         <div className="form-group col-md-5">
//                             <input type="text"  className="form-control" id="inputEmail4"
//                                    value={x.postdate}/>
//                         </div>
//                     </div>
//
//                     <div className="row justify-content-center">
//                         <div className="col-md-2"></div>
//                         <div className="form-group col-md-3">
//                             <label htmlFor="inputFirst name">Description</label>
//                         </div>
//                         <div className="form-group col-md-5">
//                             <input type="text"  className="form-control" id="inputEmail4"
//                                    value={x.description}/>
//                         </div>
//                     </div>
//
//                     <div className="row justify-content-center">
//                         <div className="col-md-2"></div>
//                         <div className="form-group col-md-3">
//                             <label htmlFor="inputFirst name">Status</label>
//                         </div>
//                         <div className="form-group col-md-5">
//                             <input type="text"  className="form-control" id="inputEmail4"
//                                    value={x.status}/>
//                         </div>
//                     </div>
//
//
//
//                     <div className="card-footer text-muted">
//                         <a href="#" className="btn  justify-content-center green btn-outline-dark">Update</a>
//                     </div>
//
//
//                 </div>
//
//
//
//             </div>
//
//         </React.Fragment>
//     );
//
// }
// export default JobUpdateP;
//
//
//
//
//
// // import React, { useState } from 'react';
// // import { Link, useParams } from 'react-router-dom';
// // import { gql, useMutation, useQuery } from '@apollo/client';
// //
// // import Navibarr from '../components/Navibarr';
// //
// // function JobUpdateP() {
// //     const { vacancyId } = useParams();
// //     const { loading, data } = useQuery(GET_VACANCY, {
// //         variables: { vacancyId },
// //     });
// //     const [title, setTitle] = useState('');
// //     const [type, setType] = useState('');
// //     const [skills, setSkills] = useState('');
// //     const [postDate, setPostDate] = useState('');
// //     const [desc, setDesc] = useState('');
// //     const [status, setStatus] = useState('');
// //
// //     const [updateVacancy] = useMutation(UPDATE_VACANCY);
// //
// //     const handleUpdate = () => {
// //         updateVacancy({
// //             variables: {
// //                 id: vacancyId,
// //                 title,
// //                 type,
// //                 skills,
// //                 postdate: postDate,
// //                 description: desc,
// //                 status,
// //             },
// //         })
// //             .then((response) => {
// //                 // Handle successful update
// //                 console.log(response);
// //             })
// //             .catch((error) => {
// //                 // Handle error
// //                 console.error(error);
// //             });
// //     };
// //
// //     if (loading) {
// //         return <p>Loading.....</p>;
// //     }
// //
// //     const vacancy = data?.queryVacancy[0];
// //
// //     return (
// //         <React.Fragment>
// //             <Navibarr />
// //             <div className="container mt-5 col-md-7">
// //                 <div className="card">
// //                     <div className="card-header justify-content-center">Job Details</div>
// //
// //                     <div className="card-body">
// //                         <div className="form-group">
// //                             <label htmlFor="title">Title</label>
// //                             <input
// //                                 type="text"
// //                                 className="form-control"
// //                                 id="title"
// //                                 value={title}
// //                                 onChange={(e) => setTitle(e.target.value)}
// //                             />
// //                         </div>
// //                         <div className="form-group">
// //                             <label htmlFor="type">Type</label>
// //                             <input
// //                                 type="text"
// //                                 className="form-control"
// //                                 id="type"
// //                                 value={type}
// //                                 onChange={(e) => setType(e.target.value)}
// //                             />
// //                         </div>
// //                         <div className="form-group">
// //                             <label htmlFor="skills">Skills</label>
// //                             <input
// //                                 type="text"
// //                                 className="form-control"
// //                                 id="skills"
// //                                 value={skills}
// //                                 onChange={(e) => setSkills(e.target.value)}
// //                             />
// //                         </div>
// //                         <div className="form-group">
// //                             <label htmlFor="postDate">Post Date</label>
// //                             <input
// //                                 type="text"
// //                                 className="form-control"
// //                                 id="postDate"
// //                                 value={postDate}
// //                                 onChange={(e) => setPostDate(e.target.value)}
// //                             />
// //                         </div>
// //                         <div className="form-group">
// //                             <label htmlFor="desc">Description</label>
// //                             <textarea
// //                                 className="form-control"
// //                                 id="desc"
// //                                 value={desc}
// //                                 onChange={(e) => setDesc(e.target.value)}
// //                             ></textarea>
// //                         </div>
// //                         <div className="form-group">
// //                             <label htmlFor="status">Status</label>
// //                             <input
// //                                 type="text"
// //                                 className="form-control"
// //                                 id="status"
// //                                 value={status}
// //                                 onChange={(e) => setStatus(e.target.value)}
// //                             />
// //                         </div>
// //                     </div>
// //
// //                     {/* Update and Cancel buttons */}
// //                     <div className="card-footer">
// //                         <button className="btn btn-primary" onClick={handleUpdate}>
// //                             Update
// //                         </button>
// //                         <Link to="/" className="btn btn-secondary ml-2">
// //                             Cancel
// //                         </Link>
// //                     </div>
// //                 </div>
// //             </div>
// //         </React.Fragment>
// //     );
// // }
// //
// // // GraphQL query to fetch vacancy details
// // const GET_VACANCY = gql`
// //   query GetVacancy($vacancyId: String!) {
// //     queryVacancy(id: $vacancyId) {
// //       id
// //       title
// //       type
// //       skills
// //       postdate
// //       description
// //       status
// //     }
// //   }
// // `;
// //
// // // GraphQL mutation to update vacancy
// // const UPDATE_VACANCY = gql`
// //   mutation UpdateVacancy(
// //     $id: String!
// //     $title: String!
// //     $type: String!
// //     $skills: String!
// //     $postdate: String!
// //     $description: String!
// //     $status: String!
// //   ) {
// //     updateVacancy(
// //       input: {
// //         id: $id
// //         title: $title
// //         type: $type
// //         skills: $skills
// //         postdate: $postdate
// //         description: $description
// //         status: $status
// //       }
// //     ) {
// //       id
// //       title
// //       type
// //       skills
// //       postdate
// //       description
// //       status
// //     }
// //   }
// // `;
// //
// // export default JobUpdateP;

import React, {useEffect, useState} from "react";
import Navibarr from "../components/Navibarr";
import swal from 'sweetalert';


import {Link, useParams, useNavigate} from "react-router-dom";
import {gql, useQuery, useMutation} from "@apollo/client";

function JobUpdateP() {
    const vacancyId = (useParams("vacancyId")).vacancyId;
    console.log(vacancyId);
    const jobdetail = gql`
query{

    queryVacancy(query:{id:{operator:eq,value:"${vacancyId}"}}){
            id,
            title,
            type,
            skills,
            closingdate,
            description,
            status
    }
}`;


    const UpdateV = gql`
    mutation  patchVacancy(
      $id: String!
      $title: ObjectScalar
    $closingdate: ObjectScalar
    $field: ObjectScalar
    $description: ObjectScalar
    $location: ObjectScalar
    $noofposition: ObjectScalar
    $skills: ObjectScalar
    $type:ObjectScalar
   
    )
  {
      patchVacancy(
        id: $id
        patch: [
          {
            from: "null"
           path: "/title"
            value: $title
          }
          {
            from: "null"
           path: "/closingdate"
            value: $closingdate
          }
          {
            from: "null"
           path: "/field"
            value: $field
          }
           {
            from: "null"
            path: "/description"
            value: $description
          }
          
           {
            from: "null"
           path: "/location"
            value: $location
          }
          
           {
            from: "null"
           path: "/noofposition"
            value: $noofposition
          }
          
           {
            from: "null"
           path: "/skills"
            value: $skills
          }
           {
            from: "null"
           path: "/type"
            value: $type
          }
          
        ]
      ) {
        id
    title
   closingdate
    field
    description
    location
    noofposition
    skills
    type
  
    }
  }
`;

    const [title, settitle] = useState('');
    const [closingdate, setclosingdate] = useState('');
    const [field, setfield] = useState('');
    const [description, setdescription] = useState('');
    const [location, setlocation] = useState('');
    const [skills, setskills] = useState('');
    const [type, settype] = useState('');


    const [dataa, setDataa] = useState(null);
    const [patchVacancy] = useMutation(UpdateV, {
        onCompleted: (dataa) => {
            console.log('Resource created successfully:', dataa.patchVacancy);
            setDataa(dataa.patchVacancy);
        },
    });


    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault()
        swal({
            title: 'Are you sure?',
            text: 'Do you want to save this changes?',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                const vid = vacancyId;
                const patches = [
                    {
                        op: 'replace',
                        path: '/title',
                        value: title,
                    },
                    {
                        op: 'replace',
                        path: '/closingdate',
                        value: closingdate,
                    },
                    {
                        op: 'replace',
                        path: '/field',
                        value: field,
                    },

                    {
                        op: 'replace',
                        path: '/field',
                        value: field,
                    },

                    {
                        op: 'replace',
                        path: '/description',
                        value: description,
                    },

                    {
                        op: 'replace',
                        path: '/location',
                        value: location,
                    },

                    {
                        op: 'replace',
                        path: '/skills',
                        value: skills,
                    },

                    {
                        op: 'replace',
                        path: '/type',
                        value: type,
                    },


                ];
                patchVacancy({
                    variables: {
                        id: vid,
                        patches: patches,
                        title,
                        closingdate,
                        field,
                        description,
                        location,
                        skills,
                        type,

                    },
                });
                swal('Details Updated Successfully!', {
                    icon: 'success',
                });

            } else {
                swal("Details didn't save");
            }
            // window.location.href = `/detailsofpublisher/${data.id}`;
        });
    };


    const {loading, data} = useQuery(jobdetail);
    const x = data?.queryVacancy[0];

    if (loading) {
        return <p>loading.....</p>
    }
    // const x= data?.queryVacancy[0];

    if (!data) {
        return null;
    }

    return (
        <React.Fragment>
            <Navibarr></Navibarr>
            <div className="container mt-5 col-md-7 ">
                <div className="card ">
                    <div className="card-header justify-content-center  "
                         style={{color: "#212F3D", backgroundColor: "#50E2CC"}}>
                        Job Details
                    </div>
                    <form className="row g-3" onSubmit={handleClick}>
                        <div className="row justify-content-center mb-3"></div>

                        <div className="row justify-content-center">
                            <div className="col-md-2"></div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputFirst name">ID</label>
                            </div>
                            <div className="form-group col-md-5">
                                <input type="text" className="form-control" id="inputEmail4"
                                       disabled={true} value={x.id}/>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-3"></div>

                        <div className="row justify-content-center">
                            <div className="col-md-2"></div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputFirst name">Title</label>
                            </div>
                            <div className="form-group col-md-5">
                                <input type="text" className="form-control" id="inputEmail4"
                                       placeholder={x.title}
                                       onChange={(e) => {
                                           settitle(e.target.value);
                                       }}/>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-3"></div>

                        <div className="row justify-content-center">
                            <div className="col-md-2"></div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputFirst name">Type</label>
                            </div>
                            <div className="form-group col-md-5">
                                <input type="text" className="form-control" id="inputEmail4"
                                       placeholder={x.type}
                                       onChange={(e) => {
                                           settype(e.target.value);
                                       }}
                                />
                            </div>
                        </div>
                        <div className="row justify-content-center mb-3"></div>

                        <div className="row justify-content-center">
                            <div className="col-md-2"></div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputFirst name">Skills</label>
                            </div>
                            <div className="form-group col-md-5">
                                <input type="text" className="form-control" id="inputEmail4"
                                       placeholder={x.skills}
                                       onChange={(e) => {
                                           setskills(e.target.value);
                                       }}/>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-3"></div>

                        <div className="row justify-content-center">
                            <div className="col-md-2"></div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputFirst name">Location</label>
                            </div>
                            <div className="form-group col-md-5">
                                <input type="text" className="form-control" id="inputEmail4"
                                       placeholder={x.location}
                                       onChange={(e) => {
                                           setlocation(e.target.value);
                                       }}/>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-3"></div>

                        <div className="row justify-content-center">
                            <div className="col-md-2"></div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputFirst name">Closing Date</label>
                            </div>
                            <div className="form-group col-md-5">
                                <input type="date" className="form-control" id="inputEmail4"
                                       placeholder={x.closingdate}
                                       onChange={(e) => {
                                           setclosingdate(e.target.value);
                                       }}/>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-3"></div>

                        <div className="row justify-content-center">
                            <div className="col-md-2"></div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputFirst name">Description</label>
                            </div>
                            <div className="form-group col-md-5">
                                <input type="text" className="form-control" id="inputEmail4"
                                       placeholder={x.description}
                                       onChange={(e) => {
                                           setdescription(e.target.value);
                                       }}/>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-3"></div>

                        <div className="row justify-content-center">
                            <div className="col-md-2"></div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputFirst name">Field</label>
                            </div>
                            <div className="form-group col-md-5">
                                <input type="text" className="form-control" id="inputEmail4"
                                       placeholder={x.field}
                                       onChange={(e) => {
                                           setfield(e.target.value);
                                       }}

                                />
                            </div>
                        </div>
                        <div className="row justify-content-center mb-3"></div>
                        <div className="card-footer text-muted " style={{color: "#212F3D", backgroundColor: "#50E2CC"}}>
                            <button className="btn  justify-content-center green btn-outline-dark" variant="success"
                                    type="submit">Update</button>
                        </div>
                    </form>
                </div>


            </div>

        </React.Fragment>
    );

}

export default JobUpdateP;


// import React, { useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { gql, useMutation, useQuery } from '@apollo/client';
//
// import Navibarr from '../components/Navibarr';
//
// function JobUpdateP() {
//     const { vacancyId } = useParams();
//     const { loading, data } = useQuery(GET_VACANCY, {
//         variables: { vacancyId },
//     });
//     const [title, setTitle] = useState('');
//     const [type, setType] = useState('');
//     const [skills, setSkills] = useState('');
//     const [postDate, setPostDate] = useState('');
//     const [desc, setDesc] = useState('');
//     const [status, setStatus] = useState('');
//
//     const [updateVacancy] = useMutation(UPDATE_VACANCY);
//
//     const handleUpdate = () => {
//         updateVacancy({
//             variables: {
//                 id: vacancyId,
//                 title,
//                 type,
//                 skills,
//                 postdate: postDate,
//                 description: desc,
//                 status,
//             },
//         })
//             .then((response) => {
//                 // Handle successful update
//                 console.log(response);
//             })
//             .catch((error) => {
//                 // Handle error
//                 console.error(error);
//             });
//     };
//
//     if (loading) {
//         return <p>Loading.....</p>;
//     }
//
//     const vacancy = data?.queryVacancy[0];
//
//     return (
//         <React.Fragment>
//             <Navibarr />
//             <div className="container mt-5 col-md-7">
//                 <div className="card">
//                     <div className="card-header justify-content-center">Job Details</div>
//
//                     <div className="card-body">
//                         <div className="form-group">
//                             <label htmlFor="title">Title</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="title"
//                                 value={title}
//                                 onChange={(e) => setTitle(e.target.value)}
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="type">Type</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="type"
//                                 value={type}
//                                 onChange={(e) => setType(e.target.value)}
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="skills">Skills</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="skills"
//                                 value={skills}
//                                 onChange={(e) => setSkills(e.target.value)}
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="postDate">Post Date</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="postDate"
//                                 value={postDate}
//                                 onChange={(e) => setPostDate(e.target.value)}
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="desc">Description</label>
//                             <textarea
//                                 className="form-control"
//                                 id="desc"
//                                 value={desc}
//                                 onChange={(e) => setDesc(e.target.value)}
//                             ></textarea>
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="status">Status</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="status"
//                                 value={status}
//                                 onChange={(e) => setStatus(e.target.value)}
//                             />
//                         </div>
//                     </div>
//
//                     {/* Update and Cancel buttons */}
//                     <div className="card-footer">
//                         <button className="btn btn-primary" onClick={handleUpdate}>
//                             Update
//                         </button>
//                         <Link to="/" className="btn btn-secondary ml-2">
//                             Cancel
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </React.Fragment>
//     );
// }
//
// // GraphQL query to fetch vacancy details
// const GET_VACANCY = gql`
//   query GetVacancy($vacancyId: String!) {
//     queryVacancy(id: $vacancyId) {
//       id
//       title
//       type
//       skills
//       postdate
//       description
//       status
//     }
//   }
// `;
//
// // GraphQL mutation to update vacancy
// const UPDATE_VACANCY = gql`
//   mutation UpdateVacancy(
//     $id: String!
//     $title: String!
//     $type: String!
//     $skills: String!
//     $postdate: String!
//     $description: String!
//     $status: String!
//   ) {
//     updateVacancy(
//       input: {
//         id: $id
//         title: $title
//         type: $type
//         skills: $skills
//         postdate: $postdate
//         description: $description
//         status: $status
//       }
//     ) {
//       id
//       title
//       type
//       skills
//       postdate
//       description
//       status
//     }
//   }
// `;
//
// export default JobUpdateP;
