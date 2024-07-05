import React from 'react';
const CngPsw = () => {
    return ( 
        <div className="displaymessage">
      <div>
        <div className="d-flex flex-column align-items-center vh-100 justify-content-center">
        <div className="form">
              <form>
              <div className="row mb-3">
              <label for="examplepassword1" class="form-label">
    Enter Your New password
  </label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputpassword"></input>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-5 col-form-label"> Conform Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3"></input>
    </div>
    </div>
                
              </form>
            </div>
          <div className="text-end mt-5 ">
            <button type="submit" className="btn btn-primary">
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default CngPsw;