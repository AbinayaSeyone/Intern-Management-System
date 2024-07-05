import React from "react";
import linkedin from"../images/linked.png"
import mail from"../images/mail.jpg"

function CardIntern(props){
    return(
        <div>
            <div className>  <div className="card mt-xxl-5" >
                <div className="card-body">
                    <h5 className="card-title">Intern Name :{props.data.name}</h5>
                    <p className="card-text">Uni_name :{props.data.universityname}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Course :{props.data.coursename}</li>
                    <li className="list-group-item">CGPA :{props.data.cgpa}</li>
                    <li className="list-group-item">Skill:{props.data.skill}</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">
                        <img src={linkedin} style={{ width: '30px', height: '30px' }}/>
                        {props.data.linkedinlink}</a>
                    <a href="#" className="card-link">
                        <img src={mail}  style={{ width: '30px', height: '30px' }}/>
                        {props.data.universitymail}</a>
                </div>
            </div></div>

        </div>
    )
}

export default CardIntern;


