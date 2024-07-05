import React, {useState} from 'react';
import Cardm from '../components/Cardm';
import Nav from '../components/Nav1';


import {gql, ApolloClient, InMemoryCache} from '@apollo/client';
import {useQuery} from '@apollo/client';
import Cardinternpool from "../components/cardinternpool";
import {useParams} from "react-router-dom";

const GET_INTERN_OPENING_DATA = gql`
query{queryInternPoolOpening(query:{
  verification:[{value:false,operator:eq}]
   status1:[{value:true,operator:eq}]

})
  {
    id,
    name,
   status1
    verification
    suspendReason
   institution
    field
    openingDate
    name
    duration
   publisherMail
  
   
   
}
}
`;

function Internpoolverification() {
    const {loading, error, data} = useQuery(GET_INTERN_OPENING_DATA);




    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;



    return (
        <div>
            <Nav></Nav>

            <div className="heading text-center mt-3 text-bg-success "><h1>POST VERIFICATION</h1></div>
            <div className='container mt-5' >
                <div className="row justify-content-lg-start">
                    {data.queryInternPoolOpening.map(z => (
                        <div className='col-md-12 mt-3 '>
                            <Cardinternpool
                                companyid={z.id}
                                key={z.id}
                                data={z}
                            />
                        </div>

                    ))}

                </div>

            </div>

        </div>

    );
}

export default Internpoolverification;
