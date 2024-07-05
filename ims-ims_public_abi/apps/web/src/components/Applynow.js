import addtowishlist from "../images/addtowishlist.png";
import applynow from "../images/applynow.png";
import "../index.css";

function Applynow() {
    return (
        <div className="card mt-5" style={{ borderColor: " rgba(80, 226, 204, 0.92)" }}>
            <div className="card-body">
                <div className="row justify-content-center mt-1">
                    <div className="col-md-4 mt-3">
                        <img src={addtowishlist} alt="companyImage" style={{ "width": "100px" }}></img>
                    </div>
                </div>
                <div className="row justify-content-center ">
                    <div className="col-md-6 mt-3" >
                        <button type="submit" className="btn form-control  border border-secondary " style={{background:"#000000"}}><h6 style={{color:"#FFFFFF"}}>Add to wishlist</h6></button>
                    </div>
                </div>
                <div className="row justify-content-center mt-4">
                    <div className="col-md-4 mt-3">
                        <img src={applynow} alt="companyImage"  className="rounded-circle" style={{ "width": "100px" }}></img>
                    </div>
                </div>
                <div className="row justify-content-center ">
                    <div className="col-md-6 mt-3" >
                        <button type="submit" className="btn form-control greenborder" style={{borderColor:"#45B8AC"}}><h6 >Apply Now</h6></button>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Applynow;