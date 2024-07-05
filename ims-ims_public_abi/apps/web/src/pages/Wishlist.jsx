import React, {useState} from "react";
import NavBar from "../components/NavBar";
import WishCom from "../components/wishcompro";
import {Link, useLocation, useParams} from "react-router-dom";
import {gql, useQuery} from "@apollo/client";
import Profilecard from "../components/Profilecard";

const WishList = () => {
    const [selectedWishCom, setSelectedWishCom] = useState(null);

    const vacancyId = useParams().vacancyId;

    const location = useLocation();

    const loginResponse = new URLSearchParams(location.search).get('loginResponse');
    const parsedLoginResponse = JSON.parse(loginResponse);

    // Extract the username from the login response
    const userId = parsedLoginResponse.id;

    const wishList_VacancyDetails = gql`
    query {
      queryApplicant(
        query: {
          wishlist: { operator: eq, value: true }
          internId: { operator: eq, value: "${userId}" }
        }
      ) {
        id
        vacancyId
        internId
        wishlist
        isApplied
        isSelected
        isRejected
        __externalRef {
          ... on Vacancy {
            id
            name
            noofposition
            field
            description
            skills
            __externalRef {
              ... on Company {
                id
                name
                address
                email
                websiteLink
                instagramLink
                facebookLink
                twitterLink
                linkedInLink
              }
            }
          }
        }
      }
    }
  `;

    const wishListVacancy = gql`
    query {
      queryVacancy(query: { id: { operator: eq, value: "${vacancyId}" } }) {
        id
        name
        noofposition
        field
        description
        skills
        __externalRef {
          ... on Company {
            id
            name
            address
            email
            websiteLink
            instagramLink
            facebookLink
            twitterLink
            linkedInLink
          }
        }
      }
    }
  `;
    const {loadingVacancy, dataVacancy} = useQuery(wishListVacancy);
    const {loading, data} = useQuery(wishList_VacancyDetails);

    if (loading) return <p>Loading...</p>;
    const companyData = dataVacancy?.queryVacancy[0].__externalRef[0];
    const vacancyData = dataVacancy?.queryVacancy[0];

    const uniqueVacancies = [...new Set(data.queryApplicant.map((item) => item.vacancyId)),];

    if (!data) return null;

    const handleWishComClick = (vacancyId) => {
        const selectedWishComData = data.queryApplicant.find(
            (item) => item.vacancyId === vacancyId
        );
        setSelectedWishCom(selectedWishComData);
    };

    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <React.Fragment>
                        <div
                            className="d-flex flex-column flex-shrink-0  p-3 "
                            style={{
                                width: "350px",
                                background: "rgb(46, 102, 83)",
                            }}
                        >
                            <h1
                                className="d-flex justify-content-center"
                                style={{color: "white"}}
                            >
                                Wish Companies
                            </h1>
                            <hr/>
                            <ul className="nav nav-pills flex-column mb-auto">
                                {uniqueVacancies.map((vacancyId) => (
                                    <li className="nav-item" key={vacancyId}>
                                        <div className="col-md-6">
                                            <button
                                                className="btn btn-link"
                                                onClick={() => handleWishComClick(vacancyId)}
                                            >
                                                <WishCom
                                                    data={data.queryApplicant.find(
                                                        (item) => item.vacancyId === vacancyId
                                                    )}
                                                />
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </React.Fragment>
                </div>
                <div className="col-md-8 mt-5">
                    {selectedWishCom ? (
                        <div
                            className="card mt-5"
                            style={{backgroundColor: "rgba(80, 226, 204, 0.07)"}}
                        >
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3 mt-4">
                                        <img
                                            src="profile.jpeg"
                                            alt="companyImage"
                                            className="rounded-circle"
                                            style={{width: "120px"}}
                                        ></img>
                                    </div>
                                    <div className="col-md-9 mt-4">
                                        <h4 className="card-title">Company's
                                            Name{selectedWishCom.__externalRef[0].__externalRef[0].name}</h4>
                                        <h5 className="card-title">Vacancy
                                            Name{selectedWishCom.__externalRef[0].name}</h5>
                                        <p className="card-title" style={{color: "#1DD3B8"}}>
                                            {selectedWishCom.__externalRef[0].filed}
                                        </p>
                                        <textarea
                                            className="form-control"
                                            placeholder=" Describe About Company"
                                            id="floatingTextarea"
                                        ></textarea>
                                        <p> {selectedWishCom.__externalRef[0].description}</p>
                                        <div className="row">
                                            <div className="col-md-3 mt-5">
                                                <p>
                                                    <a href={selectedWishCom.__externalRef[0].__externalRef[0].websiteLink}>www.Web.org</a>
                                                </p>
                                            </div>
                                            <div className="col-md-3 mt-5">
                                                <p>
                                                    <a href={selectedWishCom.__externalRef[0].__externalRef[0].twitterLink}>
                                                        <img
                                                            src="Twitter.png"
                                                            className="imgstyle"
                                                            alt="Twitter"
                                                        ></img>
                                                    </a>
                                                </p>
                                            </div>
                                            <div className="col-md-3 mt-5">
                                                <p>
                                                    <a href={selectedWishCom.__externalRef[0].__externalRef[0].linkedInLink}>
                                                        <img
                                                            src="Linkedin.png"
                                                            className="imgstyle"
                                                            alt="LinkedIn"
                                                        ></img>
                                                    </a>
                                                </p>
                                            </div>
                                            <div className="col-md-3 mt-5">
                                                <p>
                                                    <a href="http://www.google.com">
                                                        <img
                                                            src="Youtube.png"
                                                            className="imgstyle"
                                                            alt="Youtube"
                                                        ></img>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <Link to="/Apply2" className="col-md-3">
                                                    <button className="btn btn-dark">
                                                        <a
                                                            href="../../../../../../../AppData/Local/Temp#"
                                                            className="nav-link text-white"
                                                        >
                                                            <i className="bi bi-box-arrow-right"></i> Apply
                                                            Now
                                                        </a>
                                                    </button>
                                                </Link>
                                            </div>
                                            <div className="col-md-3"></div>
                                            <div className="col-md-3"></div>
                                            <div className="col-md-3"></div>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="card-body">*/}
                                {/*    /!* Render the selected WishCom details *!/*/}
                                {/*    <h5>{selectedWishCom.__externalRef[0].name}</h5>*/}
                                {/*    <p>{selectedWishCom.__externalRef[0].field}</p>*/}
                                {/*    <p>{selectedWishCom.__externalRef[0].noofposition}</p>*/}
                                {/*    <a*/}
                                {/*        href={selectedWishCom.__externalRef[0].__externalRef[0].websiteLink}*/}
                                {/*        className="card-link"*/}
                                {/*    >*/}
                                {/*        Visit Website*/}
                                {/*    </a>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    ) : (
                        <div>No WishCom selected</div>
                    )}
                </div>
            </div>
        </div>
    );

}

export default WishList;



