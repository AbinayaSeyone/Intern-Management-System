import React from 'react';
import NavBar from '../components/NavBar';
import {gql, useQuery} from "@apollo/client";

const pro_query = gql`
query{
  queryIntern(query:{}){
    name,
    universityName,
    CGPA,
    courseName
  }
}
`;

const VewPro = () => {
    const {loading, data} = useQuery(pro_query);
    if (loading) {
        return <p>Loading........</p>
    }

    const intern = data.queryIntern[0];
    if (!data) {
        return null;
    }
    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <div className='row'>
                <div className='col-md-1'></div>
                <div className='col-md-3 mt-4'>
                    <img src="profile.jpeg" alt="companyImage" className="rounded-circle"
                         style={{"width": "120px"}}></img>
                </div>
                <div className='col-md-5 mt-5'>
                    <div>
                        <h4 className="card-title">{intern.name}</h4>
                        <h5 className="card-title">{intern.CGPA}</h5>
                        <p className="card-title" style={{color: "#1DD3B8"}}>{intern.universityName}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VewPro;
