// // import addtowishlist from "../images/addtowishlist.png";
// import { SocialIcon } from 'react-social-icons';
//
//
//
// function ProfileData(props) {
//     return (
//         <div className="row justify-content-center">
//             <div className="col-md-8">
//                 <div className="card mt-5" style={{ backgroundColor: "#F8F7F7" }}>
//                     <div class="col d-flex justify-content-center">
//                         <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" className="rounded-circle" alt="Cinque Terre" style={{ height: "150px" }} />
//                     </div>
//                     <div className="card-body">
//                         <form>
//                             <div class="row justify-content-center">
//                                 <div className="col-md-2"></div>
//                                 <div class="form-group col-md-3">
//                                     <label for="inputFirst name">First name</label>
//                                 </div>
//                                 <div class="form-group col-md-5">
//                                     <input type="text" disabled={true} class="form-control" id="inputEmail4" value={props?.userData?.name}/>
//                                 </div>
//                             </div>
//
//
//                             <div class="row mt-2 justify-content-center">
//                                 <div className="col-md-2"></div>
//                                 <div class="form-group col-md-3">
//                                     <label for="inputLastName">Last name</label>
//                                 </div>
//                                 <div class="form-group col-md-5">
//                                     <input type="text" disabled={true} class="form-control" id="inputLastname" value={props?.userData?.name} />
//                                 </div>
//                             </div>
//                             <div class="row mt-2 justify-content-center">
//                                 <div className="col-md-2"></div>
//                                 <div class="form-group col-md-3">
//                                     <label for="inputEmail4">Gender</label>
//                                 </div>
//                                 <div class="form-group col-md-5">
//                                     <input type="text" disabled={true} class="form-control" id="inputEmail4" value={props?.userData?.gender}/>
//                                 </div>
//                             </div>
//
//                             <div className="row mt-2 justify-content-center">
//                                 <div className="col-md-2"></div>
//                                 <div className="form-group col-md-3">
//                                     <label htmlFor="inputEmail4">Date of Birth</label>
//                                 </div>
//                                 <div className="form-group col-md-5">
//                                     <input type="text" disabled={true} className="form-control" id="inputEmail4"
//                                            value={props?.userData?.dob}/>
//                                 </div>
//                             </div>
//
//                             <div class="row mt-2 justify-content-center">
//                                 <div className="col-md-2"></div>
//                                 <div class="form-group col-md-3">
//                                     <label for="inputEmail4">Address</label>
//                                 </div>
//                                 <div class="form-group col-md-5">
//                                     <input type="text" disabled={true} class="form-control" id="inputEmail4" value={props?.userData?.address}/>
//                                 </div>
//                             </div>
//                             <div class="row mt-2 justify-content-center">
//                                 <div className="col-md-2"></div>
//                                 <div class="form-group col-md-3">
//                                     <label for="inputEmail4">Contact number</label>
//                                 </div>
//                                 <div class="form-group col-md-5">
//                                     <input type="text" disabled={true} class="form-control" id="inputEmail4" value={props?.userData?.name}/>
//                                 </div>
//                             </div>
//                             <div class="row mt-2 justify-content-center">
//                                 <div className="col-md-2"></div>
//                                 <div class="form-group col-md-3">
//                                     <label for="inputEmail4">Skills</label>
//                                 </div>
//                                 <div class="form-group col-md-5">
//                                     <input type="text"  disabled={true} class="form-control" id="inputEmail4" value={props?.userData?.skill} />
//                                 </div>
//                             </div>
//
//                             <div className="row mt-2 justify-content-center">
//                                 <div className="col-md-2"></div>
//                                 <div className="form-group col-md-3">
//                                     <label htmlFor="inputEmail4">University</label>
//                                 </div>
//                                 <div className="form-group col-md-5">
//                                     <input type="text" disabled={true} className="form-control" id="inputEmail4"
//                                            value={props?.userData?.uniname}/>
//                                 </div>
//
//                             </div>
//
//                             <div className="row mt-2 justify-content-center">
//                                 <div className="col-md-2"></div>
//                                 <div className="form-group col-md-3">
//                                     <label htmlFor="inputEmail4">Course</label>
//                                 </div>
//                                 <div className="form-group col-md-5">
//                                     <input type="text" disabled={true} className="form-control" id="inputEmail4"
//                                            value={props?.userData?.course}/>
//                                 </div>
//                             </div>
//
//                             <div className="row mt-2 justify-content-center">
//                                 <div className="col-md-2"></div>
//                                 <div className="form-group col-md-3">
//                                     <label htmlFor="inputEmail4">Achivements</label>
//                                 </div>
//                                 <div className="form-group col-md-5">
//                                     <input type="text" disabled={true} className="form-control" id="inputEmail4"
//                                            value={props?.userData?.achievement}/>
//                                 </div>
//
//                             </div>
//                             <div className="row mt-2 justify-content-center">
//                                 <div className="col-md-2"></div>
//                                 <div className="form-group col-md-3">
//                                     <label htmlFor="inputEmail4">CGPA</label>
//                                 </div>
//                                 <div className="form-group col-md-5">
//                                     <input type="text" disabled={true} className="form-control" id="inputEmail4"
//                                            value={props?.userData?.cgpa}/>
//                                 </div>
//                             </div>
//
//                             <div class="row mt-2 ">
//                                 <div className="col-md-2"></div>
//                                 <div className="col-md-3 mt-3"  >
//                                     <button type="submit" className="btn form-control  border border-secondary  btn btn-primary " >back</button>
//                                 </div>
//
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//
//         </div>
//
//
//
//     );
// }
//
// export default ProfileData;

// import addtowishlist from "../images/addtowishlist.png";
import { SocialIcon } from 'react-social-icons';



function ProfileData(props) {
    return (

        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card mt-5" style={{ backgroundColor: "#F8F7F7" }}>
                    <div class="col d-flex justify-content-center">
                        <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" className="rounded-circle" alt="Cinque Terre" style={{ height: "150px" }} />
                    </div>
                    <div className="card-body">
                        <form>
                            <div class="row justify-content-center">
                                <div className="col-md-2"></div>
                                <div class="form-group col-md-3">
                                    <label for="inputFirst name">First name</label>
                                </div>
                                <div class="form-group col-md-5">
                                    <input type="text" disabled={true} class="form-control" id="inputEmail4" value={props?.userData?.name}/>
                                </div>
                            </div>


                            <div class="row mt-2 justify-content-center">
                                <div className="col-md-2"></div>
                                <div class="form-group col-md-3">
                                    <label for="inputLastName">Last name</label>
                                </div>
                                <div class="form-group col-md-5">
                                    <input type="text" disabled={true} class="form-control" id="inputLastname" value={props?.userData?.name} />
                                </div>
                            </div>
                            <div class="row mt-2 justify-content-center">
                                <div className="col-md-2"></div>
                                <div class="form-group col-md-3">
                                    <label for="inputEmail4">Gender</label>
                                </div>
                                <div class="form-group col-md-5">
                                    <input type="text" disabled={true} class="form-control" id="inputEmail4" value={props?.userData?.gender}/>
                                </div>
                            </div>

                            <div className="row mt-2 justify-content-center">
                                <div className="col-md-2"></div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputEmail4">Date of Birth</label>
                                </div>
                                <div className="form-group col-md-5">
                                    <input type="text" disabled={true} className="form-control" id="inputEmail4"
                                           value={props?.userData?.dob}/>
                                </div>
                            </div>

                            <div class="row mt-2 justify-content-center">
                                <div className="col-md-2"></div>
                                <div class="form-group col-md-3">
                                    <label for="inputEmail4">Address</label>
                                </div>
                                <div class="form-group col-md-5">
                                    <input type="text" disabled={true} class="form-control" id="inputEmail4" value={props?.userData?.address}/>
                                </div>
                            </div>
                            <div class="row mt-2 justify-content-center">
                                <div className="col-md-2"></div>
                                <div class="form-group col-md-3">
                                    <label for="inputEmail4">Contact number</label>
                                </div>
                                <div class="form-group col-md-5">
                                    <input type="text" disabled={true} class="form-control" id="inputEmail4" value={props?.userData?.name}/>
                                </div>
                            </div>
                            <div class="row mt-2 justify-content-center">
                                <div className="col-md-2"></div>
                                <div class="form-group col-md-3">
                                    <label for="inputEmail4">Skills</label>
                                </div>
                                <div class="form-group col-md-5">
                                    <input type="text"  disabled={true} class="form-control" id="inputEmail4" value={props?.userData?.skill} />
                                </div>
                            </div>

                            <div className="row mt-2 justify-content-center">
                                <div className="col-md-2"></div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputEmail4">University</label>
                                </div>
                                <div className="form-group col-md-5">
                                    <input type="text" disabled={true} className="form-control" id="inputEmail4"
                                           value={props?.userData?.uniname}/>
                                </div>

                            </div>

                            <div className="row mt-2 justify-content-center">
                                <div className="col-md-2"></div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputEmail4">Course</label>
                                </div>
                                <div className="form-group col-md-5">
                                    <input type="text" disabled={true} className="form-control" id="inputEmail4"
                                           value={props?.userData?.course}/>
                                </div>
                            </div>

                            <div className="row mt-2 justify-content-center">
                                <div className="col-md-2"></div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputEmail4">Achivements</label>
                                </div>
                                <div className="form-group col-md-5">
                                    <input type="text" disabled={true} className="form-control" id="inputEmail4"
                                           value={props?.userData?.achievement}/>
                                </div>

                            </div>
                            <div className="row mt-2 justify-content-center">
                                <div className="col-md-2"></div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputEmail4">CGPA</label>
                                </div>
                                <div className="form-group col-md-5">
                                    <input type="text" disabled={true} className="form-control" id="inputEmail4"
                                           value={props?.userData?.cgpa}/>
                                </div>
                            </div>






                            <div class="row mt-2 ">
                                <div className="col-md-2"></div>
                                <div className="col-md-3 mt-3"  >
                                    <button type="submit" className="btn form-control  border border-secondary  btn btn-primary " >back</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>



    );
}

export default ProfileData;
