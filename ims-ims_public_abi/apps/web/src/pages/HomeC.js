import NavbarC from "../components/NavbarC";
import SidebarC from "../components/SidebarC";
import { gql, useMutation,useQuery } from '@apollo/client';
import React from "react";
import {useLocation} from "react-router-dom";

// Define the GraphQL query
const QUERY_VACANCY = gql`
  query {
     queryVacancy(query:{}){
          workPlace,
          title,
          type,
          description,
          createdBy,
          id
        }
      }
`;

function HomeC(){

    // retrive user from url
    const location = useLocation();

    const loginResponse = new URLSearchParams(location.search).get('loginResponse');
    const parsedLoginResponse = JSON.parse(loginResponse);

    // Extract the userId from the login response
    const userId = parsedLoginResponse.id;

    // Use the useQuery hook to execute the query
    const { loading, error, data } = useQuery(QUERY_VACANCY);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    // Extract the filtered vacancies from the data object
    const filteredVacancies = data.queryVacancy.filter(

        (vacancy) => vacancy.createdBy === userId

    );

    // get all the vacancies

    // const getAllVacancies = data.queryVacancy;
    //
    console.log(userId)

    return(
        <React.Fragment>
            <div>

                <NavbarC/>
                <div className="row m-0">
                    {/*<div className="col-md-2">*/}
                    {/*    <SidebarC/>*/}
                    {/*</div>*/}
                    <div className="col-md-9">
                        <div className="row justify-content-center mt-5 mb-3">
                            <div className="col-md-10" style={{backgroundColor:"#50E2CC17",borderRadius:"10px"}}>
                                <div className="row">
                                    <div className="col-md-3">
                                        <p>Total vacancies   <div className="badge rounded-pill badge-notification bg-warning">3</div></p>
                                    </div>
                                    <div className="col-md-3">
                                        <p>Open Vacancies  <div className="badge rounded-pill badge-notification bg-primary">2</div></p>
                                    </div>
                                    <div className="col-md-3">
                                        <p>Total Applications   <div className="badge rounded-pill badge-notification bg-info">2</div></p>
                                    </div>
                                    <div className="col-md-3">
                                        <p>Open Applications   <div className="badge rounded-pill badge-notification bg-success">14</div></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-10 mt-5" style={{backgroundColor:"#50E2CC17",borderRadius:"10px"}}>
                                <div className="row">
                                    <div className="col-md-12 table-responsive">
                                        <table className="table caption-top center">
                                            <thead>
                                            <tr>
                                                <th scope="col">Job Title</th>
                                                <th scope="col">Job Type</th>
                                                <th scope="col">Applied Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Comment</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {filteredVacancies.map((vacancy) => (
                                                <tr key={vacancy.id}>
                                                    <th scope="row">{vacancy.title}</th>
                                                    {/*<td>{vacancy.appliedDate}</td>*/}
                                                    <td>{vacancy.type}</td>
                                                    <td>{vacancy.status}</td>
                                                    <td>{vacancy.comment}</td>
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
        </React.Fragment>
    )
}
export default HomeC;
