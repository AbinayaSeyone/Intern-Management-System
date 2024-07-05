// import React from "react";
// import Navibarr from "../components/Navibarr";
// import ProfileData from "../components/ProfileData";
// import {useParams} from "react-router-dom";
// import {gql, useQuery} from "@apollo/client";
// function ProfilePage(){
//     const {userid} = useParams();
//     const userData = gql`
//         query {
//           queryApplicant (query:{id:{operator:eq,value:"${userid}"}}){
//              id,
//             name,
//             gender,
//             cgpa,
//             skill,
//             uniname,
//             course,
//             address,
//             achievement,
//             dob,
//             unimail
//        }
// }`;
//
//
//     const {loading,data}=useQuery(userData);
//     const x= data?.queryApplicant[0];
//     if(loading){
//         return <p>loading.....</p>
//     }
//     if(!data){
//         return null;
//     }
//
//     console.log(x)
//     return(
//         <React.Fragment>
//             <Navibarr></Navibarr>
//             <ProfileData
//                 userData = {x}
//                 twitterlink="https://twitter.com/3axislabs"
//                 instagramlink="https://www.instagram.com/3axislabs/?hl=en"
//                 facebooklink="https://www.facebook.com/3axislabs/"
//                 linkedinlink="https://www.linkedin.com/company/3axislabs"
//
//             ></ProfileData>
//
//         </React.Fragment>
//     );
//
// }
// export default ProfilePage;

import React from "react";
import Navibarr from "../components/Navibarr";
import ProfileData from "../components/ProfileData";
import {useParams} from "react-router-dom";
import {gql, useQuery} from "@apollo/client";
function ProfilePage(){
    const {userid} = useParams();
    const userData = gql`
        query {
          queryApplicant (query:{id:{operator:eq,value:"${userid}"}}){
             id,
            name,
            gender,
            cgpa,
            skill,
            uniname,
            course,
            address,
            achievement,
            dob,
            unimail
       }
}`;


    const {loading,data}=useQuery(userData);
    const x= data?.queryApplicant[0];
    if(loading){
        return <p>loading.....</p>
    }
    if(!data){
        return null;
    }

    console.log(x)
    return(
        <React.Fragment>
            <Navibarr></Navibarr>
            <ProfileData
                userData = {x}
                twitterlink="https://twitter.com/3axislabs"
                instagramlink="https://www.instagram.com/3axislabs/?hl=en"
                facebooklink="https://www.facebook.com/3axislabs/"
                linkedinlink="https://www.linkedin.com/company/3axislabs"

            ></ProfileData>

        </React.Fragment>
    );

}
export default ProfilePage;
