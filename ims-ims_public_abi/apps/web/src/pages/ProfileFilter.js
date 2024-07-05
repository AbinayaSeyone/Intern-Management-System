// import React from "react";
// // import Navibarr from "../components/Navibarr";
// import Profilecard from "../components/Profilecard";
// import user from "../images/userH.png";
// import Hiringprocess1 from "./Hiringprocess1";
// import {gql, useQuery} from "@apollo/client";
//
//
// const profilelist=gql`
// query{
//   queryApplicant(query:{}){
//     id,
//    name,
//     skill,
//     unimail,
//     uniname,
//     cgpa,
//     course
//
//   }
// }`;
// function ProfileFilter() {
//     const {loading,data}=useQuery(profilelist);
//     if(loading){
//         return <p>loading.....</p>
//     }
//     if(!data){
//         return null;
//     }
//     return (
//         <React.Fragment>
//             <Hiringprocess1></Hiringprocess1>
//             <div>
//                 {data.queryApplicant.map(x=>(
//                     <div className="row justify-content-center">
//                         <div className="col-md-6">
//                             <Profilecard key={x.id}
//                                          img={user}
//                                          InternName={x.name}
//                                          institutionName={x.uniname}
//                                 // fieldName= {x.course}
//                                          CGPA= {x.cgpa}
//                                          Skills={x.skill}
//
//
//                             />
//                             {/*<div>*/}
//                             {/*    <button type="button" className="btn btn-success">Select</button>*/}
//                             {/*    <button type="button" className="btn btn-danger">Reject</button>*/}
//                             {/*</div>*/}
//                         </div>
//
//                     </div> ))}
//
//             </div>
//         </React.Fragment>
//     );
// }
//
//
//
// export default ProfileFilter;

import React from "react";
// import Navibarr from "../components/Navibarr";
import Profilecard from "../components/Profilecard";
import user from "../images/userH.png";
import Hiringprocess1 from "./Hiringprocess1";
import {gql, useQuery} from "@apollo/client";
import Vacancycard from "../components/Vacancycard";


const profilelist=gql`
query {
  queryApplicant(
    query: {
      vacancyId: { operator: eq, value: "1672088649329676288" }
      isApplied: { operator: eq, value: true }
      isSelected: { operator: eq, value: true}
      isRejected: { operator: eq, value: false}
    }
  ) {
    id
    internId
    isSelected
    isRejected
    isApplied
    wishlist
    __externalRef {
      ... on Intern {
        id
        firstname
        universityname
        cgpa
        skill
      }
    }
  }
}
`;
function ProfileFilter() {
    const {loading,data}=useQuery(profilelist);
    if(loading){
        return <p>loading.....</p>
    }
    if(!data){
        return null;
    }
    return (
        <React.Fragment>
            <Hiringprocess1></Hiringprocess1>
            <div>
                {data.queryApplicant.map(item=>(
                    <div className="row justify-content-center">
                        <div className="col-md-6" key={item.id}>
                                <Profilecard data={item}/>
                            {/*<Profilecard key={x.id}*/}
                            {/*             img={user}*/}
                            {/*             InternName={x.name}*/}
                            {/*             institutionName={x.uniname}*/}
                            {/*    // fieldName= {x.course}*/}
                            {/*             CGPA= {x.cgpa}*/}
                            {/*             Skills={x.skill}*/}
                            {/*/>*/}
                            {/*<div>*/}
                            {/*    <button type="button" className="btn btn-success">Select</button>*/}
                            {/*    <button type="button" className="btn btn-danger">Reject</button>*/}
                            {/*</div>*/}
                        </div>

                    </div> ))}

            </div>
        </React.Fragment>
    );
}



export default ProfileFilter;