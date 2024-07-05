import React, {useState} from "react";
// import UniversityNamecard from "../components/UniversityNamecard";
import NaviBar from "../components/NaviBar";
import "../index.css";
import {gql, useQuery} from "@apollo/client";
import noData from "../images/noData.png";
import CardIntern from "../components/CardIntern";
import Navibarr from "../components/Navibarr";



const MY_QUERY1 = gql`
 query{
    queryIntern(query:{}){
      id,
      firstname,
      coursename,
      skill,
      field,
      department
      cgpa,
      linkedinlink,
      universityname,
      universitymail
        }
    }
`;

function InternFilter() {

    const {loading, data} = useQuery(MY_QUERY1);

    const [selectedCourseName, setSelectedCourseName] = useState("");
    const [selectedUniversityName, setSelectedUniversityName] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [selectedSkill, setSelectedSkill] = useState("");
    const [selectedField, setSelectedField] = useState("");

    if (loading) return <p>Loading...</p>;

    const uniqueCourseNames = [...new Set(data.queryIntern.map(item => item.coursename))];
    const uniqueUniversityNames = [...new Set(data.queryIntern.map(item => item.universityname))];
    const uniqueDepartments = [...new Set(data.queryIntern.map(item => item.department))];
    const uniqueSkills = [...new Set(data.queryIntern.map(item => item.skill))];
    const uniqueField = [...new Set(data.queryIntern.map(item => item.field))];

    const handleCourseNameChange = event => {
        setSelectedCourseName(event.target.value);
    };
    const handleUniversityNameChange = event => {
        setSelectedUniversityName(event.target.value);
    };
    const handleDepartmentChange = event => {
        setSelectedDepartment(event.target.value);
    };
    const handleSkillChange = event => {
        setSelectedSkill(event.target.value);
    };
    const handleFieldChange = event => {
        setSelectedField(event.target.value);
    };

    let filteredInternPools = data.queryIntern;

    if (selectedCourseName !== "" && selectedUniversityName !== "" && selectedDepartment !== "" && selectedSkill !== "" && selectedField !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.coursename === selectedCourseName && x.universityname === selectedUniversityName && x.department === selectedDepartment && x.skill === selectedSkill && x.field === selectedField
        );
    } else if (selectedCourseName !== "" && selectedUniversityName !== "" && selectedDepartment !== "" && selectedSkill !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.coursename === selectedCourseName && x.universityname === selectedUniversityName&& x.department === selectedDepartment && x.skill === selectedSkill
        );
    } else if (selectedCourseName !== "" && selectedUniversityName !== "" && selectedField !== "" && selectedSkill !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.coursename === selectedCourseName && x.UniversityName === selectedUniversityName && x.field === selectedField && x.skill === selectedSkill
        );
    } else if (selectedCourseName !== "" && selectedUniversityName !== "" && selectedDepartment !== "" && selectedField !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.coursename === selectedCourseName && x.universityname === selectedUniversityName && x.department === selectedDepartment && x.field === selectedField
        );
    } else if (selectedSkill !== "" && selectedUniversityName !== "" && selectedDepartment !== "" && selectedField !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.skill === selectedSkill && x.universityname === selectedUniversityName && x.department === selectedDepartment && x.field === selectedField
        );
    } else if (selectedSkill !== "" && selectedCourseName !== "" && selectedDepartment !== "" && selectedField !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.skill === selectedSkill && x.coursename === selectedCourseName && x.department === selectedDepartment && x.field === selectedField
        );
    }

    //5C3
    else if (selectedCourseName !== "" && selectedUniversityName !== "" && selectedDepartment !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.coursename === selectedCourseName && x.universityname === selectedUniversityName && x.department === selectedDepartment
        );
    } else if (selectedCourseName !== "" && selectedUniversityName !== "" && selectedSkill !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.coursename === selectedCourseName && x.universityname === selectedUniversityName && x.skill === selectedSkill
        );
    } else if (selectedSkill !== "" && selectedUniversityName !== "" && selectedDepartment !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.skill === selectedSkill && x.universityname === selectedUniversityName && x.department === selectedDepartment
        );
    } else if (selectedCourseName !== "" && selectedSkill !== "" && selectedDepartment !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.coursename === selectedCourseName && x.skill === selectedSkill && x.department === selectedDepartment
        );
    } else if (selectedCourseName !== "" && selectedUniversityName !== "" && selectedField !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.coursename === selectedCourseName && x.universityname === selectedUniversityName && x.field === selectedField
        );
    } else if (selectedCourseName !== "" && selectedDepartment !== "" && selectedField !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.coursename === selectedCourseName && x.department === selectedDepartment && x.field === selectedField
        );
    } else if (selectedCourseName !== "" && selectedSkill !== "" && selectedField !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.coursename === selectedCourseName && x.skill === selectedSkill && x.field === selectedField
        );
    } else if (selectedUniversityName !== "" && selectedDepartment !== "" && selectedField !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.universityname === selectedUniversityName && x.department === selectedDepartment && x.field === selectedField
        );
    } else if (selectedUniversityName !== "" && selectedSkill !== "" && selectedField !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.universityname === selectedUniversityName && x.skill === selectedSkill && x.field === selectedField
        );
    } else if (selectedDepartment !== "" && selectedSkill !== "" && selectedField !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.department === selectedDepartment && x.skill === selectedSkill && x.field === selectedField
        );
    }

    //5C2

    else if (selectedCourseName !== "" && selectedUniversityName !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.coursename === selectedCourseName && x.universityname === selectedUniversityName
        );
    } else if (selectedCourseName !== "" && selectedDepartment !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.coursename === selectedCourseName && x.department === selectedDepartment
        );
    } else if (selectedDepartment !== "" && selectedUniversityName !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.department === selectedDepartment && x.universityname === selectedUniversityName
        );
    } else if (selectedCourseName !== "" && selectedSkill !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.coursename === selectedCourseName && x.skill=== selectedSkill
        );
    } else if (selectedUniversityName !== "" && selectedSkill !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.universityname === selectedUniversityName && x.skill=== selectedSkill
        );
    } else if (selectedDepartment !== "" && selectedSkill !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.department === selectedDepartment && x.skill === selectedSkill
        );
    } else if (selectedCourseName !== "" && selectedField !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.coursename === selectedCourseName && x.field === selectedField
        );
    } else if (selectedUniversityName !== "" && selectedField !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.universityname === selectedCourseName && x.field === selectedField
        );
    } else if (selectedDepartment !== "" && selectedField !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.department === selectedDepartment && x.field === selectedField
        );
    } else if (selectedSkill !== "" && selectedField !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.skill === selectedSkill && x.field === selectedField
        );
    }

    //5C1
    else if (selectedCourseName !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.coursename === selectedCourseName
        );
    } else if (selectedUniversityName !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.universityname === selectedUniversityName
        );
    } else if (selectedDepartment !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.department === selectedDepartment
        );
    } else if (selectedSkill !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.skill === selectedSkill
        );
    } else if (selectedField !== "") {
        filteredInternPools = data.queryIntern.filter(
            x => x.field === selectedField
        );
    }



    return (
        <React.Fragment>
            <Navibarr/>
            <div className="container mt-5">
                <div className="row mt-3 justify-content-lg-evenly">
                    <div className="card " style={{
                        backgroundColor: " rgba(80, 226, 204, 0.92)",
                        borderBlock: "2px solid #CCCCCC",
                        boxSizing: "border-box"
                    }}>
                        <div className="card-body">
                            <h2 className="text-center">Intern </h2>
                        </div>
                    </div>

                </div>
                <div className="row mt-5 justify-content-lg-evenly">
                    {/*SkillName*/}
                    <div className="col-md-2">
                        <select
                            className="btn form-control btn-light"
                            value={selectedCourseName}
                            onChange={handleCourseNameChange}
                        >
                            <option value="">
                                CourseName
                            </option>
                            {uniqueCourseNames.map(coursename => (
                                <option value={coursename}>
                                    {coursename}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-2">
                        {/*UniversityName*/}
                        <select
                            className="btn form-control btn-light"
                            value={selectedUniversityName}
                            onChange={handleUniversityNameChange}
                        >
                            <option value="">
                                UniversityName
                            </option>
                            {uniqueUniversityNames.map(universityname => (
                                <option value={universityname}>
                                    {universityname}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-2">
                        {/*Skill*/}
                        <select
                            className="btn form-control btn-light"
                            value={selectedSkill}
                            onChange={handleSkillChange}
                        >
                            <option value="">
                                Skill
                            </option>
                            {uniqueSkills.map(skill => (
                                <option value={skill}>
                                    {skill}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-2">
                        {/*Department*/}
                        <select
                            className="btn form-control btn-light"
                            value={selectedDepartment}
                            onChange={handleDepartmentChange}
                        >
                            <option value="">
                                Department
                            </option>
                            {uniqueDepartments.map(department=> (
                                <option value={department}>
                                    {department}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-2">
                        {/*Field*/}
                        <select
                            className="btn form-control btn-light"
                            value={selectedField}
                            onChange={handleFieldChange}
                        >
                            <option value="">
                                Field
                            </option>
                            {uniqueField.map(field => (
                                <option value={field}>
                                    {field}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="row justify-content-md-start mt-xxl-5 ">
                    {filteredInternPools.length > 0 ? (
                        filteredInternPools.map(item => (
                            <div className="col-md-6" key={item.id}>
                                <CardIntern data={item}/>
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

export default InternFilter;