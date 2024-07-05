import React from "react";
import Navibarr from "../components/Navibarr";
import SideBar from "../components/SideBar";


function HireUpdate() {
    return (

        <div>
            <Navibarr></Navibarr>


            <div className="container">
                <div className="d-flex justify-content-center mt-5" >
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col"> Id</th>
                            <th scope="col">Vacancy</th>
                            <th scope="col">Total Applicants</th>
                            <th scope="col">Selected Applicants</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default HireUpdate;
