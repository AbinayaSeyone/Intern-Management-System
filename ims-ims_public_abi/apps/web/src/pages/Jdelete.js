// import React from "react";
import { useMutation, gql } from "@apollo/client";
import {Link} from "react-router-dom";
import React, { useState } from 'react';
import NavbarC from "../components/NavbarC";

const DELETE_VACANCY_MUTATION = gql`
  mutation deleteVacancy($id: String!) {
    deleteVacancy(value: { id: $id }) {
      name
      noofposition
      description
      closingdate
      coverImage
      createdBy
      field
      location
      modifiedBy
      modifiedTime
      postdate
      skills
      status
      title
      type
      version
      workPlace
    }
  }
`;

function Jdelete() {
    const [deleteVacancy] = useMutation(DELETE_VACANCY_MUTATION, {
        onCompleted: (data) => {
            console.log('Deleted vacancy details successfully!', data.deleteVacancy);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        deleteVacancy({
            variables: {
                id: "1641313823644323840",
            },
        });
    };

    const [showMessage, setShowMessage] = useState(false);

    const handleButtonClick = () => {
        // Perform the deletion logic here
        // ...

        // Show the success message
        setShowMessage(true);

        // Hide the success message after 3 seconds
        setTimeout(() => {
            setShowMessage(false);
        }, 3000000);
    };

    return (
        <React.Fragment>
            <NavbarC></NavbarC>

            <div className="add-user">
                <section className="h-100">
                    <div className="container  " style={{ "background": "rgba(80, 226, 204, 0.07)","out-line":" #4d004d" }}>
                        <div className="row justify-content-md-center h-100">
                            <div className="card-wrapper">
                                <div className="card fat">
                                    <div className="card-body justify-content-md-center">
                                        <h4 className="card-title">Delete Vacancy</h4>
                                        <form className="add-new-user" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label>
                                                    <h5>Are you sure?</h5>
                                                </label>
                                                <h6>
                                                    Do you really want to delete these records?
                                                    <div>This process permanently deletes your record</div>
                                                </h6>

                                                <div>
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger"
                                                        onClick={handleButtonClick}
                                                    >
                                                        Delete Record
                                                    </button>
                                                    {showMessage && (
                                                        <div className="popup top-right">
                                                            <p class="text-danger">Record Deleted Successfully</p>
                                                        </div>
                                                    )}
                                                    &nbsp; &nbsp;&nbsp;

                                                    <Link to="/Jobcard">
                                                        <button type="button" className="btn btn-success">
                                                            Cancel
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
}

export default Jdelete;
