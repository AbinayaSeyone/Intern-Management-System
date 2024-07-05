import React from "react";

function EditProfile() {
    return(
      <div className="row justify-content-center ">
       <div class="card mt-5"  style={{"width": "40rem","height":"20rem","background":"#E0FFFF" }}>
  <div class="card-body ">
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-5 col-form-label">Enter current Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword"/>
    </div>
    <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-5 col-form-label">Enter new Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword"/>
    </div>
    <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-5 col-form-label">Re Enter your Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword"/>
    </div>
    </div>
    <div class="col-auto ">
    <button type="submit" class="btn btn-primary mb-3">Submit</button>
  </div>
</div>
  </div>
</div>
</div>
</div>

    );
    
}
export default EditProfile;
