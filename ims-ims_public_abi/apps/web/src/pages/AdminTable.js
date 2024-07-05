import NavbarC from "../components/NavbarC";
import SidebarC from "../components/SidebarC";
import React from "react";
import { FaCamera } from 'react-icons/fa';
import {gql, useQuery} from "@apollo/client";
import Nav1 from "../components/Nav1";

const queryC=gql`

query {
  queryApplicant(
    query: {
      
    }
  ) {
    id
    vacancyId
    internId
    wishlist
    isApplied
    isSelected
    isRejected
     __externalRef{
        ... on Vacancy {
          id
          name
          noofposition
          field
          description
          skills
          __externalRef {
            ... on Company {
              id
              name
              address
              email
              websiteLink
              instagramLink
              facebookLink
              twitterLink
              linkedInLink
            }
          }
        }
       }
        __externalRef {
            ... on Intern {
            id
            name
            cgpa
            }
         } 
     }
   }

`;
function AdminTable() {
    const{loading,data}=useQuery(queryC);
    if(loading)return<p>Loading.....</p>

    return (
        <div>
            <Nav1/>
            <div className="row m-0">
                {/*<div className="col-md-2" style={{backgroundColor: "#08979d"}}>*/}
                {/*    <SidebarC/>*/}
                {/*</div>*/}
                <div className="col-md-12">
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-10" style={{backgroundColor:"#50E2CC17",borderRadius:"10px"}}>
                            <h1 align="center">Vacancy Applicants Summary </h1>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-10" style={{backgroundColor:"#50E2CC17",borderRadius:"10px"}}>
                            <div className="row">
                                {/*<div className="col-md-2">*/}
                                {/*    <p>All   <div className="badge rounded-pill badge-notification bg-secondary">13</div></p>*/}
                                {/*</div>*/}
                                {/*<div className="col-md-2">*/}
                                {/*    <p>Open  <div className="badge rounded-pill badge-notification bg-primary">2</div></p>*/}
                                {/*</div>*/}
                                {/*<div className="col-md-2">*/}
                                {/*    <p>Shortlisted   <div className="badge rounded-pill badge-notification bg-info">7</div></p>*/}
                                {/*</div>*/}
                                {/*<div className="col-md-2">*/}
                                {/*    <p>Selected   <div className="badge rounded-pill badge-notification bg-success">1</div></p>*/}
                                {/*</div>*/}
                                {/*<div className="col-md-2">*/}
                                {/*    <p>Rejected   <div className="badge rounded-pill badge-notification bg-danger">4</div></p>*/}
                                {/*</div>*/}
                                {/*<div className="col-md-2">*/}
                                {/*    <button type="submit" className="btn form-control btn-sm btn-light"*/}
                                {/*            style={{backgroundColor: "#fffff !important", borderColor: "#50E2CC"}}>*/}
                                {/*        Vacancy Info*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                                <div className="col-md-12 table-responsive">
                                    <table className="table caption-top center">
                                        <caption>List of applicants</caption>
                                        <thead>
                                        <tr>
                                            <th scope="col">Applicant Name</th>
                                            <th scope="col">Applied On Vacancy</th>
                                            <th scope="col">Vacancy filed</th>
                                            <th scope="col">Company Name</th>
                                            <th scope="col">Status</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        {data.queryApplicant.map(x=>(
                                            <tr       key={x.id}>
                                                <td>{x.__externalRef.id}</td>
                                                <td>{x.__externalRef.id}</td>
                                                <td>{x.id}</td>
                                                <td>{x.id}</td>


                                                {/*<td>{x.__externalRef[1].__externalRef[0].name}</td>*/}
                                                <td> {x.isSelected ? (
                                                    <div>
                                                        <h2>Selected</h2>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <h2>
                                                            Not Selected
                                                        </h2>
                                                    </div>
                                                )}

                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
        ;
}

export default AdminTable;
