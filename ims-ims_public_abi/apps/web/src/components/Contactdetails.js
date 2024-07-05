import { SocialIcon } from 'react-social-icons';

function Contactdetails(props) {
    return (
        <div className="card mt-5" style={{ borderColor: " rgba(80, 226, 204, 0.92)" }}>
            <div className="card-body">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <h6 className="card-title" style={{ color: "#CCCCCC", textAlign: "center" }}>Contact Details</h6>
                        <h3></h3>
                    </div>

                    <div className="col-md-10 justify-content-center">
                        <center><a className="card-title" style={{ color: "#CCCCCC",  }}href={props.companywebsite}><h6 style={{background: "rgba(80, 226, 204, 0.24)", borderRadius: "10px", Align:"center"}}>Visit to company page</h6></a></center>
                        <h3></h3>
                    </div>
                    <div className="col-md-10 mt-1">
                        <h6 className="card-title" style={{ color: "#CCCCCC", background: "rgba(80, 226, 204, 0.24)", borderRadius: "10px", textAlign: "center" }}>{props.mail}</h6>
                        
                    </div>

                </div>
                <div className="row justify-content-center mt-2">
                    <div className="col-md-2">
                        <SocialIcon url={props.twitterlink} />
                    </div>
                    <div className="col-md-2">
                        <SocialIcon url={props.instagramlink} />
                    </div>
                    <div className="col-md-2">
                        <SocialIcon url={props.facebooklink} />
                    </div>
                    <div className="col-md-2">
                        <SocialIcon url={props.linkedinlink} />
                    </div>
                    <h3></h3>
                </div>

            </div>
        </div >
    );
}
export default Contactdetails;