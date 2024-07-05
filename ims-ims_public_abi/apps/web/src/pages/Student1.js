import React from 'react';
import Cardm from '../components/Cardm';
import Nav from '../components/Nav1';

import {gql} from '@apollo/client';
import {useQuery} from '@apollo/client';

const GET_STUDENT_DATA_QUERY = gql`
query{queryIntern(query:{
status1:{operator:eq,value:true}
verification:{operator:eq,value:false}
  
 

})
  {
  id,
    name,
    address
    linkedinlink
    status1
    verification
    universitymail
    coursename
   
   
}
}
`;


function Student1() {
    const {loading, error, data} = useQuery(GET_STUDENT_DATA_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const myStyle={
        backgroundImage:
            "url('https://wallpapercave.com/wp/wp10838091.jpg')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

    };
    return (
        <div >
            <Nav></Nav>

            <div className='container mt-5' style={myStyle}>
                <div className="row justify-content-lg-start">
                    {data.queryIntern.map(x => (
                        <div className='col-md-6 mt-3'>

                            <Cardm
                                studentid={x.id}
                                key={x.id}
                                data={x}
                            />
                        </div>
                    ))}

                </div>
            </div>
        </div>

    );
}

export default Student1;
