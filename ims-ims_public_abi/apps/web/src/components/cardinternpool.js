import uom from '../images/uom.png'
import React from "react";


function Cardinternpool(props) {
    return (
        <div class="card">

            <div class="card-body ">
                <div className="row">
                    <div className="col-md-2"><img src={uom} style={{"width": "100px", "height": "100px"}}
                                                   class="card-img-top" alt="..."/></div>
                    <div className="col-md-10 ">



                        <p class="card-text"></p>
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label  className="form-label">University/Institute Name</label>
                                <input  value={props.data.institution} className="form-control" />
                            </div>
                            <div className="col-md-6">
                                <label  className="form-label">Internship Name</label>
                                <input  value={props.data.name} className="form-control" />
                            </div>
                            <div className="col-3">
                                <label className="form-label">Period</label>

                                <input value={props.data.duration}  className="form-control"  />
                            </div>
                            <div className="col-3">
                                <label className="form-label">Starting Date</label>
                                <input value={props.data.openingDate}  className="form-control"  />
                            </div>
                            <div className="col-6">
                                <label  className="form-label">Email</label>
                                <input value={props.data. publisherMail}  className="form-control" />

                            </div>



                        </form>


                    </div>
                    <a type="button" className="btn mt-3 btn-success"  href={"/Internpoolverification.js/"+props.companyid} role="button">verify</a>
                </div>


            </div>
        </div>
    );
}

export default Cardinternpool;
