// import React from "react";
// import {useParams} from "react-router-dom";
// import {gql, useQuery} from "@apollo/client";
//  function Hprofile(){
//
//      const {hmanagerId} = useParams();
//
//      const hmanagerdetail=gql`
//
// query{
//   queryHiringManager(query:{id:{operator:eq,value:"${hmanagerId}"}}){
//     id,
//     email,
//     name,
//     mobileNo,
//     address
//
//   }
// }`;
//
//      const {loading,data}=useQuery(hmanagerdetail);
//      const x= data?.queryHiringManager[0];
//      if(loading){
//          return <p>loading.....</p>
//      }
//
//      if(!data){
//          return null;
//      }
//
//
//      return(
//          <div className="container border-dark mt-5 col-md-7"  >
//              <div className="card ">
//                  <div className="card-header justify-content-center" style={{ "color": "#212F3D","background-color":"#50E2CC" }}>
//                      Profile Details
//                  </div>
//                  <div className="row justify-content-center mb-3"/>
//
//                  <div className="row justify-content-center">
//                      <div className="col-md-2"></div>
//                      <div className="form-group col-md-3">
//                          <label htmlFor="inputFirst name">Company Name</label>
//                      </div>
//                      <div className="form-group col-md-5">
//                          <input type="text"  className="form-control" id="inputEmail4" disabled={true}
//                                   />
//                      </div>
//                  </div>
//                  <div className="row justify-content-center mb-3"/>
//
//                  <div className="row justify-content-center">
//                      <div className="col-md-2"></div>
//                      <div className="form-group col-md-3">
//                          <label htmlFor="inputFirst name">Company ID</label>
//                      </div>
//                      <div className="form-group col-md-5">
//                          <input type="text"  className="form-control" id="inputEmail4" disabled={true}
//                                  />
//                      </div>
//                  </div>
//                  <div className="row justify-content-center mb-3"/>
//
//
//                  <div className="row justify-content-center">
//                      <div className="col-md-2"></div>
//                      <div className="form-group col-md-3">
//                          <label htmlFor="inputFirst name">Hiring Manager ID</label>
//                      </div>
//                      <div className="form-group col-md-5">
//                          <input type="text"  className="form-control" id="inputEmail4" disabled={true}
//                                 value={x.id}/>
//                      </div>
//                  </div>
//                  <div className="row justify-content-center mb-3"/>
//
//
//                  <div className="row justify-content-center">
//                      <div className="col-md-2"></div>
//                      <div className="form-group col-md-3">
//                          <label htmlFor="inputFirst name">Hiring Manager Name</label>
//                      </div>
//                      <div className="form-group col-md-5">
//                          <input type="text"  className="form-control" id="inputEmail4" disabled={true}
//                                 value={x.name} />
//                      </div>
//                  </div>
//                  <div className="row justify-content-center mb-3"/>
//
//
//                  <div className="row justify-content-center">
//                      <div className="col-md-2"></div>
//                      <div className="form-group col-md-3">
//                          <label htmlFor="inputFirst name">Email-Address</label>
//                      </div>
//                      <div className="form-group col-md-5">
//                          <input type="text"  className="form-control" id="inputEmail4" disabled={true}
//                                 value={x.email} />
//                      </div>
//                  </div>
//                  <div className="row justify-content-center mb-3"/>
//
//
//                  <div className="row justify-content-center">
//                      <div className="col-md-2"></div>
//                      <div className="form-group col-md-3">
//                          <label htmlFor="inputFirst name">Mobile Number</label>
//                      </div>
//                      <div className="form-group col-md-5">
//                          <input type="text"  className="form-control" id="inputEmail4" disabled={true}
//                                 value={x.mobileNo} />
//                      </div>
//                  </div>
//                  <div className="row justify-content-center mb-3"/>
//
//
//                  <div className="row justify-content-center">
//                      <div className="col-md-2"></div>
//                      <div className="form-group col-md-3">
//                          <label htmlFor="inputFirst name">Postal Address</label>
//                      </div>
//                      <div className="form-group col-md-5">
//                          <input type="text"  className="form-control" id="inputEmail4" disabled={true}
//                                 value={x.address}/>
//                      </div>
//                  </div>
//                  <div className="row justify-content-center mb-3"/>
//
//                  <div className="card-footer text-muted" style={{ "color": "#212F3D","background-color":"#50E2CC" }}>
//                  </div>
//
//
//
//              </div>
//          </div>
//      );
//  }
//  export default Hprofile;


import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

function Hprofile() {
    const { hmanagerId } = useParams();

    const hmanagerdetail = gql`
    query($id: String!) {
      queryHiringManager(query: { id: { operator: eq, value: $id } }) {
        id
        email
        name
        mobileNo
        address
      }
    }
  `;

    const { loading, data } = useQuery(hmanagerdetail, {
        variables: { id: hmanagerId },
    });

    const x = data?.queryHiringManager[0];

    if (loading) {
        return <p>Loading.....</p>;
    }

    if (!data) {
        return null;
    }

    return (
        <div className="container border-dark mt-5 col-md-7">
            <div className="card">
                <div
                    className="card-header justify-content-center"
                    style={{ color: "#212F3D", backgroundColor: "#50E2CC" }}
                >
                    Profile Details
                </div>
                <div className="row justify-content-center mb-3"></div>
                <div className="row justify-content-center">
                    <div className="col-md-2"></div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputFirst name">Company Name</label>
                    </div>
                    <div className="form-group col-md-5">
                        <input
                            type="text"
                            className="form-control"
                            id="inputEmail4"
                            disabled={true}
                            value={x.name}
                        />
                    </div>
                </div>
                <div className="row justify-content-center mb-3"></div>
                <div className="row justify-content-center">
                    <div className="col-md-2"></div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputFirst name">Company ID</label>
                    </div>
                    <div className="form-group col-md-5">
                        <input
                            type="text"
                            className="form-control"
                            id="inputEmail4"
                            disabled={true}
                            value={x.name}
                        />
                    </div>
                </div>
                <div className="row justify-content-center mb-3"></div>
                <div className="row justify-content-center">
                    <div className="col-md-2"></div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputFirst name">Hiring Manager ID</label>
                    </div>
                    <div className="form-group col-md-5">
                        <input
                            type="text"
                            className="form-control"
                            id="inputEmail4"
                            disabled={true}
                            value={x.id}
                        />
                    </div>
                </div>
                <div className="row justify-content-center mb-3"></div>
                <div className="row justify-content-center">
                    <div className="col-md-2"></div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputFirst name">Hiring Manager Name</label>
                    </div>
                    <div className="form-group col-md-5">
                        <input
                            type="text"
                            className="form-control"
                            id="inputEmail4"
                            disabled={true}
                            value={x.name}
                        />
                    </div>
                </div>
                <div className="row justify-content-center mb-3"></div>
                <div className="row justify-content-center">
                    <div className="col-md-2"></div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputFirst name">Email-Address</label>
                    </div>
                    <div className="form-group col-md-5">
                        <input
                            type="text"
                            className="form-control"
                            id="inputEmail4"
                            disabled={true}
                            value={x.email}
                        />
                    </div>
                </div>
                <div className="row justify-content-center mb-3"></div>
                <div className="row justify-content-center">
                    <div className="col-md-2"></div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputFirst name">Mobile Number</label>
                    </div>
                    <div className="form-group col-md-5">
                        <input
                            type="text"
                            className="form-control"
                            id="inputEmail4"
                            disabled={true}
                            value={x.mobileNo}
                        />
                    </div>
                </div>
                <div className="row justify-content-center mb-3"></div>
                <div className="row justify-content-center">
                    <div className="col-md-2"></div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputFirst name">Postal Address</label>
                    </div>
                    <div className="form-group col-md-5">
                        <input
                            type="text"
                            className="form-control"
                            id="inputEmail4"
                            disabled={true}
                            value={x.address}
                        />
                    </div>
                </div>
                <div className="row justify-content-center mb-3"></div>
                <div
                    className="card-footer text-muted"
                    style={{ color: "#212F3D", backgroundColor: "#50E2CC" }}
                ></div>
            </div>
        </div>
    );
}

export default Hprofile;
