// import React from "react";
// function Jobopeningform() {
//   return (
//     <div>
//       <h3 className="row justify-content-center  " style={{ "color": "#212F3D","background-color":"#50E2CC" }}>Post Job Openings</h3>
//
//       <div class="container  " style={{ "background": "rgba(80, 226, 204, 0.07)","out-line":" #4d004d" }}>
//
//         <form>
//           <div class="row">
//             <div class="col-md-6 mb-4">
//               <div class="">
//                 <label class="form-label" for="Title">Title</label>
//                 <input type="text" id="Title" class="form-control form-control-sm" />
//               </div>
//             </div>
//
//             <div class="col-md-6 mb-4">
//               <div class="">
//                 <label class="form-label" for="Region">Region</label>
//                 <input type="text" id="Region" class="form-control form-control-sm" />
//               </div>
//             </div>
//
//
//           </div>
//
//           <div class="row">
//
//           </div>
//
//           <div class="row">
//             <div class="col-md-6 mb-4">
//               <div class="">
//                 <label class="form-label" for="Region">Region</label>
//                 <input type="text" id="Region" class="form-control form-control-sm" />
//               </div>
//             </div>
//
//             <div class="col-md-6 mb-4">
//               <div class="">
//                 <label class="form-label" for="No of positions">No of positions</label>
//                 <input type="number" id="Type" class="form-control form-control-sm" />
//               </div>
//             </div>
//           </div>
//
//           <div class="row">
//             <div class="col-md-6 mb-4">
//               <div class="">
//                 <label class="form-label" for="Closing Date">Closing Date</label>
//                 <input type="date" id="Closing Date" class="form-control form-control-sm" />
//               </div>
//             </div>
//
//             <div class="col-md-6 mb-4">
//               <div class="">
//                 <label class="form-label" for="Skills Required">Skills Required</label>
//                 <input type="text" id="Skills Required" class="form-control form-control-sm" />
//               </div>
//             </div>
//
//
//
//
//
//             <div class="row justify-content-center">
//               <div class="col-md-4 mb-4">
//                 <div class="">
//                   <label class="form-label" for="Type" >Type</label>
//                   <div class="dropdown">
//                     <button class="btn btn-secondary dropdown-toggle "style={{ "color": "#212F3D","background-color":"#50E2CC" }}  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                       Choose
//                     </button>
//                     <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                       <li><a class="dropdown-item" href="#">Full time</a></li>
//                       <li><a class="dropdown-item" href="#">Part time</a></li>
//
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//
//
//
//               <div class="col-md-4 mb-4">
//                 <div class="">
//                   <label class="form-label" for="Field">Field</label>
//                   {/* <input type="text" id="Field" class="form-control form-control-sm" /> */}
//                   <div class="dropdown">
//                     <button class="btn btn-secondary dropdown-toggle" style={{ "color": "#212F3D","background-color":"#50E2CC" }} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                       Choose
//                     </button>
//                     <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                       <li><a class="dropdown-item" href="#">Networking</a></li>
//                       <li><a class="dropdown-item" href="#">IT</a></li>
//                       <li><a class="dropdown-item" href="#">Business</a></li>
//                     </ul>
//                   </div>
//
//                 </div>
//               </div>
//
//               <div class="col-md-4 mb-4">
//                 <div class="">
//                   <label class="form-label" for="Work place type">Work place type</label>
//                   {/* <input type="text" id="Work place type" class="form-control form-control-sm" /> */}
//                   <div class="dropdown">
//                     <button class="btn btn-secondary dropdown-toggle" type="button" style={{ "color": "#212F3D","background-color":"#50E2CC" }} id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                       Choose
//                     </button>
//                     <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                       <li><a class="dropdown-item" href="#">Onsite</a></li>
//                       <li><a class="dropdown-item" href="#">Online</a></li>
//
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//
//             </div>
//           </div>
//
//
//             <div class="row">
//               <div class="col-md-6 mb-4">
//                 <div class="">
//                   <label class="form-label" for="Short Description">Short Description</label>
//                   <textarea class="form-control" id="Short Description" rows="3"></textarea>
//                 </div>
//               </div>
//
//               <div class="col-md-6 mb-4">
//                 <div class="">
//                   <label class="form-label" for="Long Description">Long Description</label>
//                   <textarea class="form-control" id="Long Description" rows="6"></textarea>
//                 </div>
//               </div>
//             </div>
//
//
//           <div class="text-center">
//             <button type="submit" class="btn btn-outline-dark " style={{ "color": "#212F3D","background-color":"#50E2CC" }}>Post Job</button>
//           </div>
//           {/* <button type="submit" class="btn btn-success ">Post</button> */}
//
//         </form>
//
//
//       </div>
//     </div>
//   );
// }
// export default Jobopeningform;
import React, {useState} from "react";
import {gql, useMutation} from "@apollo/client";
import swal from "sweetalert";

const jobdata=gql`
mutation createVacancy($type:String!,$title:String!,$noofposition:String!,$postdate:String!,$closingdate:String!,$description:String!,$field:String!,$skills:String!,$workPlace:String!,$location:String!,$status:String!){
  createVacancy(value:{type:$type,title:$title,noofposition:$noofposition,postdate:$postdate,closingdate:$closingdate,description:$description,field:$field,skills:$skills,workPlace:$workPlace,location:$location,status:$status}){
     id,
    title,
    type,
    postdate,
    skills,
    description,
    workPlace,
    noofposition,
    closingdate,
    field,
    location,
    status
    
  }  
  }
`;


function Jobopeningform() {

  const[values,setValues]=useState({
        title:'',
        type:'',
        postdate:'',
        skills:'',
        description:'',
        workPlace:'',
        noofposition:'',
        closingdate:'',
        field:'',
        location:'',
        status:''
      }
  );
  const [createVacancy]=useMutation(jobdata,{
    onCompleted:(data)=>{
      console.log('Resourse created successfully',data.createVacancy);
    },
  });

  const [formSubmitted,setFormSubmitted]=useState(false);
  const handleChange=(e)=>{
    e.persist();
    setValues(values=>({
      ...values,[e.target.name]:e.target.value
    }));
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    createVacancy({
      variables:{
        title:values.title,
        type:values.type,
        postdate:values.postdate,
        skills:values.skills,
        description:values.description,
        workPlace:values.workPlace,
        noofposition:values.noofposition,
        closingdate:values.closingdate,
        field:values.field,
        location:values.location,
        status:values.status

      },
    });
    setFormSubmitted(true);
    swal({
      title: "Success!",
      text: "Vacancy created Successfully!!!",
      icon: "success",
      button: "OK",
    });
  };

  // to set calender's maximum and minimum date
  const currentYear = new Date().getFullYear();
  const maxDate = `${currentYear}-12-31`; // Set maximum date to last day of current year
  // const minDate = new Date(); // Set minimum date to first day of previous year
  const minDate = new Date().toISOString().split("T")[0];

  // if (formSubmitted) {
  //
  //   return (<div className="add-resource">
  //     <section className="h-100">
  //       <div className="container h-200">
  //         <div className="row justify-content-md-center h-100">
  //           <div className="card-wrapper">
  //             <div className="card fat">
  //               <div className="card-body">
  //                 <h4 className="card-title">Resource added successfully!</h4>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </div>);
  // }

  return (
      <div>
        <h3 className="row justify-content-center  " style={{ "color": "#212F3D","background-color":"#50E2CC" }}>Post Job Openings</h3>

        <div className="container  " style={{ "background": "rgba(80, 226, 204, 0.07)","out-line":" #4d004d" }}>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-4">
                <label className="form-label" htmlFor="title">Title</label>
                <input type="text" id="title" placeholder="Job Title" className="form-control form-control-sm"  onChange={handleChange} name="title" value={values.title} required/>
              </div>



              <div className="col-md-6 mb-4">
                <label className="form-label" htmlFor="workPlace">Region</label>
                <input type="text" id="workPlace" className="form-control form-control-sm"  onChange={handleChange} name="workPlace" value={values.workPlace} required />
              </div>


            </div>



            <div className="row">
              <div className="col-md-6 mb-4">
                <label className="form-label" htmlFor="postdate">Opening Date</label>
                <input type="date" id="postdate" min={minDate} max={maxDate} className="form-control form-control-sm"  onChange={handleChange} name="postdate" value={values.postdate} required />
              </div>

              {/*<div className="col-md-6 mb-4">*/}
              {/*  <label className="form-label" htmlFor="noofposition">No of positions</label>*/}
              {/*  <input type="number" id="noofposition" className="form-control form-control-sm"  onChange={handleChange} name="noofposition" value={values.noofposition} required />*/}
              {/*</div>*/}

              <div className="col-md-6 mb-4">
                <label className="form-label" htmlFor="noofposition">No of positions</label>
                <input
                    type="number"
                    id="noofposition"
                    className="form-control form-control-sm"
                    onChange={handleChange}
                    name="noofposition"
                    value={values.noofposition}
                    min="1"
                    step="1"
                    required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-4">
                <label className="form-label" htmlFor="closingdate">Closing Date</label>
                <input type="date" id="closingdate" min={minDate} max={maxDate}
                       className="form-control form-control-sm"  onChange={handleChange} name="closingdate" value={values.closingdate} required />
              </div>

              <div className="col-md-6 mb-4">
                <label className="form-label" htmlFor="skills">Skills Required</label>
                <input type="text" id="skills" className="form-control form-control-sm"  onChange={handleChange} name="skills" value={values.skills} required />
              </div>



              <div className="col-md-6 mb-4">
                <label className="form-label" htmlFor="type" >Type</label>
                <input type="text" id="type" placeholder="Fulltime/Part time" className="form-control form-control-sm"  onChange={handleChange} name="type" value={values.type} required/>
              </div>



              <div className="col-md-6 mb-4">
                <label className="form-label" htmlFor="field">Field</label>
                <input type="text" id="field" placeholder="IT/Business/Data" className="form-control form-control-sm"  onChange={handleChange} name="field" value={values.field} required />

              </div>




            </div>


            <div className="row">

              <div className="col-md-6 mb-4">
                <label className="form-label" htmlFor="location">Work place type</label>
                <input type="text" id="location" placeholder="Onsite/Online" className="form-control form-control-sm"  onChange={handleChange} name="location" value={values.location} required />

              </div>

              <div className="col-md-6 mb-4">
                <label className="form-label" htmlFor="description"> Description</label>
                <textarea className="form-control" id="description" rows="3"  onChange={handleChange} name="description" value={values.description} required/>
              </div>

              <div className="col-md-6 mb-4">
                <label className="form-label" htmlFor="status">Status</label>
                <input type="text" id="status" placeholder="Open/Close" className="form-control form-control-sm"  onChange={handleChange} name="status" value={values.status} required />

              </div>


            </div>


            <div className="text-center">
              <button type="submit" className="btn btn-outline-dark " style={{ "color": "#212F3D","background-color":"#50E2CC" }}>Post Job</button>
            </div>

          </form>



        </div>
      </div>
  );
}
export default Jobopeningform;
