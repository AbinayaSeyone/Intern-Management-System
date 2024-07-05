import React from 'react';

import Nav from '../components/Nav1';
import Cardcom from "../components/Cardcom";
import ADL from "../images/adl.jpg"
import{gql,InMemoryCache,ApolloClient,} from "@apollo/client";
import {useQuery} from "@apollo/client";
import Cardm from "../components/Cardm";

const GET_DATA_COMPANY_QUERY=gql`
query{
  queryCompany(query:{
   verification:[{value:false,operator:eq}]
   status1:[{value:true,operator:eq}]
  })
  {
    id,
    name,
    mobileNo,
    address
    }
}

`;


function Company1() {
    const {loading, error, data} = useQuery(GET_DATA_COMPANY_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const myStyle={
        backgroundImage:
            "url('http://www.pixelstalk.net/wp-content/uploads/2016/06/Photos-Light-Blue-HD-Backgrounds.jpg')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

    };
    return (
        <div>
            <Nav></Nav>
            <div className='container mt-5' style={myStyle}>
                <div className="row justify-content-lg-start">
                    {data.queryCompany.map(y => (
                        <div className='col-md-6 mt-3 '>
                            <Cardcom
                                companyid={y.id}
                                key={y.id}
                                data={y}
                            />
                        </div>
                    ))}

                </div>
            </div>
        </div>

    );
}

export default Company1;