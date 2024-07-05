import NavbarC from "../components/NavbarC";
import SidebarC from "../components/SidebarC";
import React from "react";
import {Link} from "react-router-dom";
import {gql, useQuery} from "@apollo/client";
import CardIntern from "../components/CardIntern";

const queryInternDetail = gql`
query{
    queryIntern(query:{}){
      id,
      name,
      course,
      cgpa,
      linkedin,
      uniname,
      unimail
    }
  }
`;

function InternDetailC() {
    const {loading, data} = useQuery(queryInternDetail);

    if (loading) return <p> Loading ....</p>

    const intern = data?.queryIntern;
    return (
        <React.Fragment>
            <div>
                <NavbarC/>
                <div className="row m-0">

                    <div className="col-md-12">
                        <div className="row" style={{margin: "60px"}}>
                            <div style={{backgroundColor: "#50E2CC17", borderRadius: "10px"}} class="mt-1 mb-4">
                                <h1 align="center">Interns </h1>
                            </div>
                        </div>
                        <div className="row justify-content-md-start">
                            {
                                intern.map(item => (
                                    <div className="col-md-4 mt-4" key={item.id}>
                                        <CardIntern data={item}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default InternDetailC;
