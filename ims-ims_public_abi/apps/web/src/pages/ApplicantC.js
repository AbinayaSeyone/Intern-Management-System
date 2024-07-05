import NavbarC from "../components/NavbarC";
import SidebarC from "../components/SidebarC";
import React from "react";
import { FaCamera } from 'react-icons/fa';
import {gql, useQuery} from "@apollo/client";

const queryC=gql`
query{
    queryIntern(query:{}){
      id,
      name,
      course
    }
  }
`;
function ApplicantC() {
    const{loading,data}=useQuery(queryC);
    if(loading)return<p>Loading.....</p>

    return (
        <div>
            <NavbarC/>
            <div className="row m-0">
                {/*<div className="col-md-2" style={{backgroundColor: "#08979d"}}>*/}
                {/*    <SidebarC/>*/}
                {/*</div>*/}
                <div className="col-md-12">
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-10" style={{backgroundColor:"#50E2CC17",borderRadius:"10px"}}>
                            <h1 align="center">Vacancy Applicants </h1>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-10" style={{backgroundColor:"#50E2CC17",borderRadius:"10px"}}>
                            <div className="row">
                                <div className="col-md-2">
                                    <p>All   <div className="badge rounded-pill badge-notification bg-secondary">13</div></p>
                                </div>
                                <div className="col-md-2">
                                    <p>Open  <div className="badge rounded-pill badge-notification bg-primary">2</div></p>
                                </div>
                                <div className="col-md-2">
                                    <p>Shortlisted   <div className="badge rounded-pill badge-notification bg-info">7</div></p>
                                </div>
                                <div className="col-md-2">
                                    <p>Selected   <div className="badge rounded-pill badge-notification bg-success">1</div></p>
                                </div>
                                <div className="col-md-2">
                                    <p>Rejected   <div className="badge rounded-pill badge-notification bg-danger">4</div></p>
                                </div>
                                <div className="col-md-2">
                                    <button type="submit" className="btn form-control btn-sm btn-light"
                                            style={{backgroundColor: "#fffff !important", borderColor: "#50E2CC"}}>
                                        Vacancy Info
                                    </button>
                                </div>
                                <div className="col-md-12 table-responsive">
                                    <table className="table caption-top center">
                                        <caption>List of applicants</caption>
                                        <thead>
                                        <tr>
                                            <th scope="col">Applicant Name</th>
                                            <th scope="col">Applied On</th>
                                            <th scope="col">Hiring Manager</th>
                                            <th scope="col">ID</th>
                                            <th scope="col">Status</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        {data.queryIntern.map(x=>(
                                            <tr       key={x.id}>
                                                <td>{x.name}</td>
                                                <td>{x.course}</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button style={{"borderColor": "#50E2CC"}}
                                                                className="btn btn-light dropdown-toggle"
                                                                type="button" data-bs-toggle="dropdown"
                                                                aria-expanded="false">
                                                            Manager
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="./#">Action</a></li>
                                                            <li><a className="dropdown-item" href="./#">Another action</a>
                                                            </li>
                                                            <li><a className="dropdown-item" href="./#">Something else
                                                                here</a></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td>{x.id}</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button style={{"border":"none"}}
                                                                className="btn  dropdown-toggle"
                                                                type="button" data-bs-toggle="dropdown"
                                                                aria-expanded="false">
                                                            <i className="bi bi-pen"></i>
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="./#">Open</a></li>
                                                            <li><a className="dropdown-item" href="./#">Close</a>
                                                            </li>
                                                        </ul>
                                                    </div>
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

export default ApplicantC;
