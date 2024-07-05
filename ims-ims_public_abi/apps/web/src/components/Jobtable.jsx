import React, { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import {Link, useParams} from "react-router-dom";
import Swal from "sweetalert";

const DELETE_VACANCY_MUTATION = gql`
  mutation deleteVacancy($id: String!) {
    deleteVacancy(value: { id: $id }) {
      id
    }
  }
`;



const jobtab = gql`
  query {
    queryVacancy(query: {}) {
      id
      type
      field
      title
      location
      noofposition
      status
    }
  }
`;

function Jobtable() {

  const[status,setstatus]=useState("open");

  const ASSIGN_STATUS_VARIABLE = gql`
  mutation PatchVacancy($id: String!, $status: ObjectScalar) {
    patchVacancy(
      id: $id
      patch: 
        {
          path: "/status"
          value: $status
        }
      
    ) {
      id
      status
    }
  }
`;
  const { loading, data } = useQuery(jobtab);
  const [deleteVacancy] = useMutation(DELETE_VACANCY_MUTATION);


  const [patchVacancy] = useMutation(ASSIGN_STATUS_VARIABLE, {
    onCompleted: (data) => {
      console.log("Resource created successfully:", data.patchVacancy);
    },
  });

  const handleDelete = (vacancyId) => {
    Swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this vacancy!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteVacancy({
          variables: {
            id: vacancyId,
          },
        })
            .then(() => {
              console.log(`Vacancy ${vacancyId} deleted successfully`);
              Swal("Poof! The vacancy has been deleted!", {
                icon: "success",
              });
            })
            .catch((error) => {
              console.error(`Error deleting vacancy ${vacancyId}:`, error);
            });
      } else {
        Swal("The vacancy is safe!");
      }
    });
  };

  const handleClose = (vacancyId) => {
    Swal({
      title: "Are you sure?",
      text: "Do you want to close this job?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willClose) => {
      if (willClose) {
        // const vacancyId = id;
        const patches = [
          {
            op: "replace",
            path: "/status",
            value: "close",
          },


        ];

        patchVacancy({
          variables: {
            id: vacancyId,
            patch: patches,
            status:"close"

          },

        });

        Swal("Job is successfully closed", {
          icon: "success",
        });
      } else {
        Swal("Your job is still open!");
      }
    });
    setstatus("close");
  };

  if (loading) {
    return <p>Loading......</p>;
  }

  if (!data) {
    return null;
  }

  return (
      <div>
        <table className="table">
          <thead>
          <tr>
            <th className="#" scope="col">
              #
            </th>
            <th scope="col">Title</th>
            <th scope="col">Field</th>
            <th scope="col">Type</th>
            <th scope="col">Work-place-type</th>
            <th scope="col">No of position</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
          </thead>
          <tbody>
          {data.queryVacancy.map((x) => (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.title}</td>
                <td>{x.field}</td>
                <td>{x.type}</td>
                <td>{x.location}</td>
                <td>{x.noofposition}</td>
                <td>{x.status}</td>
                <td>
                  <Link to={"/jobDes/" + x.id}>
                    <button type="button" className="btn btn-success btn-sm">
                      <i className="bi bi-eye"></i>
                    </button>
                  </Link>
                  &nbsp;
                  <Link to={"/JobUpdateP/" + x.id}>
                    <button type="button" className="btn btn-warning btn-sm">
                      <i className="bi bi-pencil-fill"></i>
                    </button>
                  </Link>
                  &nbsp;
                  <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(x.id)}
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                  &nbsp;
                  <button
                      type="button"
                      className="btn btn-info btn-sm"
                      onClick={() => handleClose(x.id)}
                  >
                    <i className="bi bi-x-circle"></i>
                  </button>
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
}

export default Jobtable;