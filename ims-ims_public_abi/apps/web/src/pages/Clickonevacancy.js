import React from "react";
import NaviBar from "../components/NaviBar";
import companylogo from "../images/companylogo.jpg";
import descriptioncompany from "../images/descriptioncompany.jpg";
import {useParams} from "react-router-dom";
import {SocialIcon} from 'react-social-icons';
import addtowishlist from "../images/addtowishlist.png";
import applynow from "../images/applynow.png";
import {useQuery, gql} from "@apollo/client";

function Clickonevacancy() {
    const vacancyId = (useParams("vacancyId")).vacancyId;


    const clickOneVacancy_Company = gql`
 query {
  queryVacancy(query: {id:{operator:eq,value:"${vacancyId}"}}) {
  id,
  name,
  noofposition,
  field,
  description,
  skills
    __externalRef{
      ... on Company {
        id,
        name,
        address,
        email,
        websiteLink,
        instagramLink,
        facebookLink,
        twitterLink,
        linkedInLink
      }
    }
  }
}
`;


    const {loading, data} = useQuery(clickOneVacancy_Company);

    if (loading) return <p>Loading...</p>
    const companyData = data?.queryVacancy[0].__externalRef[0];
    const vacancyData = data?.queryVacancy[0];
    if (!data) return null;

    return (
        <React.Fragment>
            <NaviBar/>
            <div className="card " style={{
                backgroundColor: " rgba(80, 226, 204, 0.92)",
                borderBlock: "2px solid #CCCCCC",
                boxSizing: "border-box"
            }}>
                <div className="card-body">
                    <h1 className="text-center" style={{color: "white"}}>{companyData?.name}</h1>
                    <h1 className="text-center" style={{color: "white"}}>{vacancyData.name}</h1>

                </div>
            </div>

            <div className="row ">
                <div className="col-md-1"></div>
                <div className="col-md-6">
                    <div className="card mt-5"
                         style={{backgroundColor: " rgba(80, 226, 204, 0.07)", borderColor: "#CCCCCC"}}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4 mt-3">
                                    <img src={companylogo} alt="companyImage" className="rounded-circle"
                                         style={{"width": "140px"}}></img>
                                </div>
                                <div className="col-md-8 mt-3">
                                    <h4 className="card-title">{vacancyData.name}</h4>
                                    <h5 className="card-title">{companyData.name}</h5>
                                    <p className="card-title" style={{color: "#1DD3B8"}}>{vacancyData.field}</p>
                                    <p className="card-title">No of positions:{vacancyData.noofposition}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <div className="card mt-5" style={{borderColor: " rgba(80, 226, 204, 0.92)"}}>
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <div className="col-md-10">
                                    <h6 className="card-title" style={{color: "#CCCCCC", textAlign: "center"}}>Contact
                                        Details</h6>
                                    <h3></h3>
                                </div>

                                <div className="col-md-10 justify-content-center">
                                    <center><a className="card-title" style={{color: "#CCCCCC",}}
                                               href={companyData.websiteLink}><h6 style={{
                                        background: "rgba(80, 226, 204, 0.24)",
                                        borderRadius: "10px",
                                        Align: "center"
                                    }}>Visit to company page</h6></a></center>
                                    <h3></h3>
                                </div>
                                <div className="col-md-10 mt-1">
                                    <h6 className="card-title" style={{
                                        color: "#CCCCCC",
                                        background: "rgba(80, 226, 204, 0.24)",
                                        borderRadius: "10px",
                                        textAlign: "center"
                                    }}>{companyData.email}</h6>

                                </div>

                            </div>
                            <div className="row justify-content-center mt-2">
                                <div className="col-md-2">
                                    <SocialIcon url={companyData.twitterLink}/>
                                </div>
                                <div className="col-md-2">
                                    <SocialIcon url={companyData.instagramLink}/>
                                </div>
                                <div className="col-md-2">
                                    <SocialIcon url={companyData.facebookLink}/>
                                </div>
                                <div className="col-md-2">
                                    <SocialIcon url={companyData.linkedInLink}/>
                                </div>
                                <h3></h3>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-1"></div>
                <div className="col-md-6">
                    <div className="card mt-5"
                         style={{backgroundColor: " rgba(80, 226, 204, 0.07)", borderColor: "#CCCCCC"}}>
                        <img className="card-img" src={descriptioncompany} alt="Card image"
                             style={{opacity: "20%"}}></img>
                        <div className="card-img-overlay">
                            <div className="card-body">
                                <h4 className="card-title">Description</h4>
                                <p className="card-text">{vacancyData.description}</p>
                                <h4 className="card-text">Skills</h4>
                                <ul className="card-text" style={{listStyleType: "disc"}}>
                                    <li>{vacancyData.skills}</li>
                                    <li>{vacancyData.skills}</li>
                                    <li>{vacancyData.skills}</li>
                                    <li>{vacancyData.skills}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3 ">
                    <div className="card mt-5" style={{borderColor: " rgba(80, 226, 204, 0.92)"}}>
                        <div className="card-body">
                            <div className="row justify-content-center mt-1">
                                <div className="col-md-4 mt-3">
                                    <img src={addtowishlist} alt="companyImage" style={{"width": "100px"}}></img>
                                </div>
                            </div>
                            <div className="row justify-content-center ">
                                <div className="col-md-6 mt-3">
                                    <button type="submit" className="btn form-control  border border-secondary "
                                            style={{background: "#000000"}}><h6 style={{color: "#FFFFFF"}}>Add to
                                        wishlist</h6></button>
                                </div>
                            </div>
                            <div className="row justify-content-center mt-4">
                                <div className="col-md-4 mt-3">
                                    <img src={applynow} alt="companyImage" className="rounded-circle"
                                         style={{"width": "100px"}}></img>
                                </div>
                            </div>
                            <div className="row justify-content-center ">
                                <div className="col-md-6 mt-3">
                                    <button type="submit" className="btn form-control greenborder"
                                            style={{borderColor: "#45B8AC"}}><h6>Apply Now</h6></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<Applynow*/}

                    {/*>*/}
                    {/*</Applynow>*/}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Clickonevacancy;