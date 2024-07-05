import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarC from "../components/NavbarC";


function App() {

    return (
        <div>
            <div>
                <NavbarC/>
            </div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />

            <div class="container">
                <div class="row">
                    <div class="col-12">

                        <div class="my-5">
                            <h3>My Profile</h3>
                            <hr/>
                        </div>

                        <form class="file-upload">
                            <div class="row mb-5 gx-5">

                                <div class="col-xxl-8 mb-5 mb-xxl-0">
                                    <div class="bg-secondary-soft px-4 py-5 rounded">
                                        <div class="row g-3">
                                            <h4 class="mb-4 mt-0">Contact detail</h4>

                                            <div class="col-md-6">
                                                <label class="form-label">First Name *</label>
                                                <input type="text" class="form-control" placeholder="" aria-label="First name" />
                                            </div>

                                            <div class="col-md-6">
                                                <label class="form-label">Last Name *</label>
                                                <input type="text" class="form-control" placeholder="" aria-label="Last name" />
                                            </div>

                                            <div class="col-md-6">
                                                <label class="form-label">Phone number *</label>
                                                <input type="text" class="form-control" placeholder="" aria-label="Phone number" />
                                            </div>

                                            <div class="col-md-6">
                                                <label class="form-label">Mobile number *</label>
                                                <input type="text" class="form-control" placeholder="" aria-label="Phone number"/>
                                            </div>

                                            <div class="col-md-6">
                                                <label for="inputEmail4" class="form-label">Email *</label>
                                                <input type="email" class="form-control" id="inputEmail4" />
                                            </div>

                                            <div class="col-md-6">
                                                <label class="form-label">Skype *</label>
                                                <input type="text" class="form-control" placeholder="" aria-label="Phone number"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xxl-4">
                                    <div class="bg-secondary-soft px-4 py-5 rounded">
                                        <div class="row g-3">
                                            <h4 class="mb-4 mt-0">Upload your profile photo</h4>
                                            <div class="text-center">

                                                <div class="square position-relative display-2 mb-3">
                                                    <i class="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
                                                </div>

                                                <input type="file" id="customFile" name="file" hidden=""/>
                                                <label class="btn btn-success-soft btn-block" for="customFile">Upload</label>
                                                <button type="button" class="btn btn-danger-soft">Remove</button>

                                                <p class="text-muted mt-3 mb-0"><span class="me-1">Note:</span>Minimum size 300px x 300px</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="row mb-5 gx-5">
                                <div class="col-xxl-6 mb-5 mb-xxl-0">
                                    <div class="bg-secondary-soft px-4 py-5 rounded">
                                        <div class="row g-3">
                                            <h4 class="mb-4 mt-0">Social media detail</h4>

                                            <div class="col-md-6">
                                                <label class="form-label"><i class="fab fa-fw fa-facebook me-2 text-facebook"></i>Facebook *</label>
                                                <input type="text" class="form-control" placeholder="" aria-label="Facebook" />
                                            </div>

                                            <div class="col-md-6">
                                                <label class="form-label"><i class="fab fa-fw fa-twitter text-twitter me-2"></i>Twitter *</label>
                                                <input type="text" class="form-control" placeholder="" aria-label="Twitter"/>
                                            </div>

                                            <div class="col-md-6">
                                                <label class="form-label"><i class="fab fa-fw fa-linkedin-in text-linkedin me-2"></i>Linkedin *</label>
                                                <input type="text" class="form-control" placeholder="" aria-label="Linkedin" />
                                            </div>

                                            <div class="col-md-6">
                                                <label class="form-label"><i class="fab fa-fw fa-instagram text-instagram me-2"></i>Instagram *</label>
                                                <input type="text" class="form-control" placeholder="" aria-label="Instragram"/>
                                            </div>

                                            <div class="col-md-6">
                                                <label class="form-label"><i class="fas fa-fw fa-basketball-ball text-dribbble me-2"></i>Dribble *</label>
                                                <input type="text" class="form-control" placeholder="" aria-label="Dribble"/>
                                            </div>

                                            <div class="col-md-6">
                                                <label class="form-label"><i class="fab fa-fw fa-pinterest text-pinterest"></i>Pinterest *</label>
                                                <input type="text" class="form-control" placeholder="" aria-label="Pinterest"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="col-xxl-6">
                                    <div class="bg-secondary-soft px-4 py-5 rounded">
                                        <div class="row g-3">
                                            <h4 class="my-4">Change Password</h4>

                                            <div class="col-md-6">
                                                <label for="exampleInputPassword1" class="form-label">Old password *</label>
                                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                                            </div>

                                            <div class="col-md-6">
                                                <label for="exampleInputPassword2" class="form-label">New password *</label>
                                                <input type="password" class="form-control" id="exampleInputPassword2"/>
                                            </div>

                                            <div class="col-md-12">
                                                <label for="exampleInputPassword3" class="form-label">Confirm Password *</label>
                                                <input type="password" class="form-control" id="exampleInputPassword3"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="gap-3 d-md-flex justify-content-md-end text-center">
                                {/*<button type="button" class="btn btn-danger btn-lg">Delete profile</button>*/}
                                <div className=" mb-3">
                                    <button type="button" class="btn btn-primary btn-lg">Update profile</button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;
