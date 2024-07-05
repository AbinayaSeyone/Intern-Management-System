import React, {useState} from "react";
import Institutioncard from "../components/Institutioncard";
import NaviBar from "../components/NaviBar";
import "../index.css";
import {gql, useQuery} from "@apollo/client";
import noData from "../images/noData.png";



const MY_QUERY1 = gql`
 query{
  queryInternPoolOpening(query:{}){
    id,
    name,
    institution,
    department,
    role,
    duration
  }
}
`;

function Institutionfilter() {

    const {loading, data} = useQuery(MY_QUERY1);
    
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [selectedInstitution, setSelectedInstitution] = useState("");
    const [selectedDuration, setSelectedDuration] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedRole, setSelectedRole] = useState("");

    if (loading) return <p>Loading...</p>;

    const uniqueDepartments = [...new Set(data.queryInternPoolOpening.map(item => item.department))];
    const uniqueInstitutions = [...new Set(data.queryInternPoolOpening.map(item => item.institution))];
    const uniqueDurations = [...new Set(data.queryInternPoolOpening.map(item => item.duration))];
    const uniqueCourses = [...new Set(data.queryInternPoolOpening.map(item => item.name))];
    const uniqueRole = [...new Set(data.queryInternPoolOpening.map(item => item.role))];

    const handleDepartmentChange = event => {
        setSelectedDepartment(event.target.value);
    };
    const handleInstitutionChange = event => {
        setSelectedInstitution(event.target.value);
    };
    const handleDurationChange = event => {
        setSelectedDuration(event.target.value);
    };
    const handleCourseChange = event => {
        setSelectedCourse(event.target.value);
    };
    const handleRoleChange = event => {
        setSelectedRole(event.target.value);
    };

    let filteredInternPools = data.queryInternPoolOpening;

    if (selectedDepartment !== "" && selectedInstitution !== "" && selectedDuration !== "" && selectedCourse !== "" && selectedRole !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.department === selectedDepartment && x.institution === selectedInstitution && x.duration === selectedDuration && x.name === selectedCourse && x.role === selectedRole
        );
    } else if (selectedDepartment !== "" && selectedInstitution !== "" && selectedDuration !== "" && selectedCourse !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.department === selectedDepartment && x.institution === selectedInstitution && x.duration === selectedDuration && x.name === selectedCourse
        );
    } else if (selectedDepartment !== "" && selectedInstitution !== "" && selectedRole !== "" && selectedCourse !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.department === selectedDepartment && x.institution === selectedInstitution && x.role === selectedRole && x.name === selectedCourse
        );
    } else if (selectedDepartment !== "" && selectedInstitution !== "" && selectedDuration !== "" && selectedRole !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.department === selectedDepartment && x.institution === selectedInstitution && x.duration === selectedDuration && x.role === selectedRole
        );
    } else if (selectedCourse !== "" && selectedInstitution !== "" && selectedDuration !== "" && selectedRole !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.name === selectedCourse && x.institution === selectedInstitution && x.duration === selectedDuration && x.role === selectedRole
        );
    } else if (selectedCourse !== "" && selectedDepartment !== "" && selectedDuration !== "" && selectedRole !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.name === selectedCourse && x.department === selectedDepartment && x.duration === selectedDuration && x.role === selectedRole
        );
    }

    //5C3
    else if (selectedDepartment !== "" && selectedInstitution !== "" && selectedDuration !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.department === selectedDepartment && x.institution === selectedInstitution && x.duration === selectedDuration
        );
    } else if (selectedDepartment !== "" && selectedInstitution !== "" && selectedCourse !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.department === selectedDepartment && x.institution === selectedInstitution && x.name === selectedCourse
        );
    } else if (selectedCourse !== "" && selectedInstitution !== "" && selectedDuration !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.name === selectedCourse && x.institution === selectedInstitution && x.duration === selectedDuration
        );
    } else if (selectedDepartment !== "" && selectedCourse !== "" && selectedDuration !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.department === selectedDepartment && x.name === selectedCourse && x.duration === selectedDuration
        );
    } else if (selectedDepartment !== "" && selectedInstitution !== "" && selectedRole !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.department === selectedDepartment && x.institution === selectedInstitution && x.role === selectedRole
        );
    } else if (selectedDepartment !== "" && selectedDuration !== "" && selectedRole !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.department === selectedDepartment && x.duration === selectedDuration && x.role === selectedRole
        );
    } else if (selectedDepartment !== "" && selectedCourse !== "" && selectedRole !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.department === selectedDepartment && x.name === selectedCourse && x.role === selectedRole
        );
    } else if (selectedInstitution !== "" && selectedDuration !== "" && selectedRole !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.institution === selectedInstitution && x.duration === selectedDuration && x.role === selectedRole
        );
    } else if (selectedInstitution !== "" && selectedCourse !== "" && selectedRole !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.institution === selectedInstitution && x.name === selectedCourse && x.role === selectedRole
        );
    } else if (selectedDuration !== "" && selectedCourse !== "" && selectedRole !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.duration === selectedDuration && x.name === selectedCourse && x.role === selectedRole
        );
    }

    //5C2

    else if (selectedDepartment !== "" && selectedInstitution !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.department === selectedDepartment && x.institution === selectedInstitution
        );
    } else if (selectedDepartment !== "" && selectedDuration !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.department === selectedDepartment && x.duration === selectedDuration
        );
    } else if (selectedDuration !== "" && selectedInstitution !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.duration === selectedDuration && x.institution === selectedInstitution
        );
    } else if (selectedDepartment !== "" && selectedCourse !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.department === selectedDepartment && x.name === selectedCourse
        );
    } else if (selectedInstitution !== "" && selectedCourse !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.institution === selectedInstitution && x.name === selectedCourse
        );
    } else if (selectedDuration !== "" && selectedCourse !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.duration === selectedDuration && x.name === selectedCourse
        );
    } else if (selectedDepartment !== "" && selectedRole !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.department === selectedDepartment && x.role === selectedRole
        );
    } else if (selectedInstitution !== "" && selectedRole !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.institution === selectedDepartment && x.role === selectedRole
        );
    } else if (selectedDuration !== "" && selectedRole !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.duration === selectedDuration && x.role === selectedRole
        );
    } else if (selectedCourse !== "" && selectedRole !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.name === selectedCourse && x.role === selectedRole
        );
    }

    //5C1
    else if (selectedDepartment !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.department === selectedDepartment
        );
    } else if (selectedInstitution !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.institution === selectedInstitution
        );
    } else if (selectedDuration !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.duration === selectedDuration
        );
    } else if (selectedCourse !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.name === selectedCourse
        );
    } else if (selectedRole !== "") {
        filteredInternPools = data.queryInternPoolOpening.filter(
            x => x.role === selectedRole
        );
    }



    return (
        <React.Fragment>
            <NaviBar></NaviBar>
            <div className="container mt-5">
                <div className="row mt-3 justify-content-lg-evenly">
                    <div className="card " style={{
                        backgroundColor: " rgba(80, 226, 204, 0.92)",
                        borderBlock: "2px solid #CCCCCC",
                        boxSizing: "border-box"
                    }}>
                        <div className="card-body">
                            <h2 className="text-center">Intern Pool Opening</h2>
                        </div>
                    </div>

                </div>
                <div className="row mt-5 justify-content-lg-evenly">
                    {/*Department*/}
                    <div className="col-md-2">
                        <select
                            className="btn form-control btn-light"
                            value={selectedDepartment}
                            onChange={handleDepartmentChange}
                        >
                            <option value="">
                                Department
                            </option>
                            {uniqueDepartments.map(department => (
                                <option value={department}>
                                    {department}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-2">
                        {/*Institution*/}
                        <select
                            className="btn form-control btn-light"
                            value={selectedInstitution}
                            onChange={handleInstitutionChange}
                        >
                            <option value="">
                                Institution
                            </option>
                            {uniqueInstitutions.map(institution => (
                                <option value={institution}>
                                    {institution}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-2">
                        {/*Course*/}
                        <select
                            className="btn form-control btn-light"
                            value={selectedCourse}
                            onChange={handleCourseChange}
                        >
                            <option value="">
                                Course
                            </option>
                            {uniqueCourses.map(name => (
                                <option value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-2">
                        {/*Duration*/}
                        <select
                            className="btn form-control btn-light"
                            value={selectedDuration}
                            onChange={handleDurationChange}
                        >
                            <option value="">
                                Duration
                            </option>
                            {uniqueDurations.map(duration=> (
                                <option value={duration}>
                                    {duration}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-2">
                        {/*Role*/}
                        <select
                            className="btn form-control btn-light"
                            value={selectedRole}
                            onChange={handleRoleChange}
                        >
                            <option value="">
                                Role
                            </option>
                            {uniqueRole.map(role => (
                                <option value={role}>
                                    {role}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="row justify-content-md-start  ">
                    {filteredInternPools.length > 0 ? (
                        filteredInternPools.map(item => (
                            <div className="col-md-6" key={item.id}>
                                <Institutioncard data={item}/>
                            </div>
                        ))
                    ) : (
                        <div className="col-md-12 text-center mt-xxl-5">
                            <h1 className="text-center fw-bold
                            ">
                                Sorry, there's nothing to show at the moment
                            </h1>
                            <img src={noData} alt="Not Found" className="img-fluid m-auto" style={{maxWidth:"300px"}}/>
                        </div>
                    )}
                </div>

            </div>
        </React.Fragment>
    )
        ;

}

export default Institutionfilter;