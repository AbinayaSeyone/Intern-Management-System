import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from "../components/NavBar";
import HomeI from "../components/HomeI";


const InRn = () => {
    return (
        <div>
            <div>
                <NavBar/>
            </div>

            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-8'>
                    <HomeI/>
                </div>
                <div className='col-md-2'></div>

            </div>


        </div>
    );
}

export default InRn;



// import React from 'react';
// // import { Link } from 'react-router-dom';
// import NavBar from "../components/NavBar";
// import SidebarI from "../components/SidebarI";
//
//
// const InRn = () => {
//   return (
//       <div>
//         <div>
//           <NavBar/>
//         </div>
//
//         <div className='row'>
//           <div className='col-md-3'>
//             <SidebarI/>
//           </div>
//           <div className='col-md-9'></div>
//         </div>
//
//
//       </div>
//   );
// }
//
// export default InRn;
