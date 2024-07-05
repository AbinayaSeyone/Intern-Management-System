
import ProTag from "../components/ProTag";
import SelBar from "../components/SelBar";
import React, {useState} from "react";
import {useQuery, gql} from "@apollo/client";
import Vacancycard from "../components/Vacancycard";
import NavBar from "../components/NavBar";
import SidebarI from "../components/SidebarI";
import VacancycardI from "../components/VacancycardI";


const MY_QUERY = gql`
  query {
    queryVacancy(query: {}) {
      id
      name
      field
      location
      skills
      type
      
    }
  }
`;

const SelVac = () => {

    const {loading, data} = useQuery(MY_QUERY);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedField, setSelectedField] = useState("");
    const [selectedSkill, setSelectedSkill] = useState("");
    const [selectedPosition, setSelectedPosition] = useState("");
    const [selectedType, setSelectedType] = useState("");

    if (loading) return <p>Loading...</p>;

    const uniqueLocations = [...new Set(data.queryVacancy.map(item => item.location))];
    const uniqueFields = [...new Set(data.queryVacancy.map(item => item.field))];
    const uniqueSkills = [...new Set(data.queryVacancy.map(item => item.skills))];
    const uniquePositions = [...new Set(data.queryVacancy.map(item => item.name))];
    const uniqueType = [...new Set(data.queryVacancy.map(item => item.type))];

    const handleLocationChange = event => {
        setSelectedLocation(event.target.value);
    };
    const handleFieldChange = event => {
        setSelectedField(event.target.value);
    };
    const handleSkillChange = event => {
        setSelectedSkill(event.target.value);
    };
    const handlePositionChange = event => {
        setSelectedPosition(event.target.value);
    };
    const handleTypeChange = event => {
        setSelectedType(event.target.value);
    };



    let filteredVacancies = data.queryVacancy;
    if (selectedLocation !== "" && selectedField !== "" && selectedSkill !== "" && selectedPosition !== "" && selectedType !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.location === selectedLocation && x.field === selectedField && x.skills === selectedSkill && x.name === selectedPosition && x.type === selectedType
        );
    } else if (selectedLocation !== "" && selectedField !== "" && selectedSkill !== "" && selectedPosition !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.location === selectedLocation && x.field === selectedField && x.skills === selectedSkill && x.name === selectedPosition
        );
    } else if (selectedLocation !== "" && selectedField !== "" && selectedType !== "" && selectedPosition !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.location === selectedLocation && x.field === selectedField && x.type === selectedType && x.name === selectedPosition
        );
    } else if (selectedLocation !== "" && selectedField !== "" && selectedSkill !== "" && selectedType !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.location === selectedLocation && x.field === selectedField && x.skills === selectedSkill && x.type === selectedType
        );
    } else if (selectedPosition !== "" && selectedField !== "" && selectedSkill !== "" && selectedType !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.name === selectedPosition && x.field === selectedField && x.skills === selectedSkill && x.type === selectedType
        );
    } else if (selectedPosition !== "" && selectedLocation !== "" && selectedSkill !== "" && selectedType !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.name === selectedPosition && x.location === selectedLocation && x.skills === selectedSkill && x.type === selectedType
        );
    }

    //5C3
    else if (selectedLocation !== "" && selectedField !== "" && selectedSkill !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.location === selectedLocation && x.field === selectedField && x.skills === selectedSkill
        );
    } else if (selectedLocation !== "" && selectedField !== "" && selectedPosition !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.location === selectedLocation && x.field === selectedField && x.name === selectedPosition
        );
    } else if (selectedPosition !== "" && selectedField !== "" && selectedSkill !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.name === selectedPosition && x.field === selectedField && x.skills === selectedSkill
        );
    } else if (selectedLocation !== "" && selectedPosition !== "" && selectedSkill !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.location === selectedLocation && x.name === selectedPosition && x.skills === selectedSkill
        );
    } else if (selectedLocation !== "" && selectedField !== "" && selectedType !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.location === selectedLocation && x.field === selectedField && x.type === selectedType
        );
    } else if (selectedLocation !== "" && selectedSkill !== "" && selectedType !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.location === selectedLocation && x.skills === selectedSkill && x.type === selectedType
        );
    } else if (selectedLocation !== "" && selectedPosition !== "" && selectedType !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.location === selectedLocation && x.name === selectedPosition && x.type === selectedType
        );
    } else if (selectedField !== "" && selectedSkill !== "" && selectedType !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.field === selectedField && x.skills === selectedSkill && x.type === selectedType
        );
    } else if (selectedField !== "" && selectedPosition !== "" && selectedType !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.field === selectedField && x.name === selectedPosition && x.type === selectedType
        );
    } else if (selectedSkill !== "" && selectedPosition !== "" && selectedType !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.skills === selectedSkill && x.name === selectedPosition && x.type === selectedType
        );
    }

    //5C2

    else if (selectedLocation !== "" && selectedField !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.location === selectedLocation && x.field === selectedField
        );
    } else if (selectedLocation !== "" && selectedSkill !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.location === selectedLocation && x.skills === selectedSkill
        );
    } else if (selectedSkill !== "" && selectedField !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.skills === selectedSkill && x.field === selectedField
        );
    } else if (selectedLocation !== "" && selectedPosition !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.location === selectedLocation && x.name === selectedPosition
        );
    } else if (selectedField !== "" && selectedPosition !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.field === selectedField && x.name === selectedPosition
        );
    } else if (selectedSkill !== "" && selectedPosition !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.skills === selectedSkill && x.name === selectedPosition
        );
    } else if (selectedLocation !== "" && selectedType !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.location === selectedLocation && x.type === selectedType
        );
    } else if (selectedField !== "" && selectedType !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.field === selectedLocation && x.type === selectedType
        );
    } else if (selectedSkill !== "" && selectedType !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.skills === selectedSkill && x.type === selectedType
        );
    } else if (selectedPosition !== "" && selectedType !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.name === selectedPosition && x.type === selectedType
        );
    }

    //5C1
    else if (selectedLocation !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.location === selectedLocation
        );
    } else if (selectedField !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.field === selectedField
        );
    } else if (selectedSkill !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.skills === selectedSkill
        );
    } else if (selectedPosition !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.name === selectedPosition
        );
    } else if (selectedType !== "") {
        filteredVacancies = data.queryVacancy.filter(
            x => x.type === selectedType
        );
    }
    return (
        <div>
            <div>

                <NavBar/>

                <div className="row">
                    <div className="col-md-1">


                    </div>
                    <div className="col-md-10">
                        <div className="mt-5">
                            <div className="row">
                                <div className="row mt-5 justify-content-lg-evenly">
                                    <div className="col-md-2">
                                        <div className="dropdown">
                                            <select
                                                className="btn form-control btn-light"
                                                value={selectedLocation}
                                                onChange={handleLocationChange}
                                            >
                                                <option value="">
                                                    Location
                                                </option>
                                                {uniqueLocations.map(location => (
                                                    <option value={location}>
                                                        {location}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="dropdown">
                                            <select
                                                className="btn form-control btn-light"
                                                value={selectedField}
                                                onChange={handleFieldChange}
                                            >
                                                <option value="">
                                                    Field
                                                </option>
                                                {uniqueFields.map(field => (
                                                    <option value={field}>
                                                        {field}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="dropdown">
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
                                    </div>
                                    <div className="col-md-2">
                                        <div className="dropdown">
                                            <select
                                                className="btn form-control btn-light"
                                                value={selectedPosition}
                                                onChange={handlePositionChange}
                                            >
                                                <option value="">
                                                    Position
                                                </option>
                                                {uniquePositions.map(position => (
                                                    <option value={position}>
                                                        {position}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="dropdown">
                                            <select
                                                className="btn form-control btn-light"
                                                value={selectedType}
                                                onChange={handleTypeChange}
                                            >
                                                <option value="">
                                                    Type
                                                </option>
                                                {uniqueType.map(type => (
                                                    <option value={type}>
                                                        {type}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-md-start">
                                    {filteredVacancies.length > 0 ? (
                                        filteredVacancies.map(item => (
                                            <div className="col-md-6" key={item.id}>
                                                <VacancycardI data={item}/>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="col-md-12">
                                            <h1>No results found...</h1>
                                        </div>
                                    )}
                                </div>


                                {/*<div className="col-md-1"></div>*/}
                                {/*<div className="col-md-2">*/}
                                {/*    <SelBar/>*/}
                                {/*</div>*/}
                                {/*<div className="col-md-2">*/}
                                {/*    <SelBar/>*/}
                                {/*</div>*/}
                                {/*<div className="col-md-2">*/}
                                {/*    <SelBar/>*/}
                                {/*</div>*/}
                                {/*<div className="col-md-2">*/}
                                {/*    <SelBar/>*/}
                                {/*</div>*/}
                                {/*<div className="col-md-2">*/}
                                {/*    <SelBar/>*/}
                                {/*</div>*/}
                                {/*<div className="col-md-1"></div>*/}
                                {/*<div className="row">*/}
                                {/*    <div className="col-md-2"></div>*/}
                                {/*    <div className="col-md-9">*/}
                                {/*        <div className="mt-3">*/}
                                {/*            <ProTag/>*/}
                                {/*        </div>*/}
                                {/*        <div>*/}
                                {/*            <ProTag/>*/}
                                {/*        </div>*/}
                                {/*        <div>*/}
                                {/*            <ProTag/>*/}
                                {/*        </div>*/}
                                {/*        /!* <div >*!/*/}
                                {/*        /!*<ProTag/>*!/*/}
                                {/*        /!*</div> *!/*/}
                                {/*    </div>*/}
                                {/*    <div className="col-md-1"></div>*/}
                                {/*</div>*/}

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default SelVac;