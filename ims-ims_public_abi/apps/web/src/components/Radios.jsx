import React from "react";
const Radios = () => {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
          checked
        ></input>
        <label className="form-check-label" for="exampleRadios1">
          Selected
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="option2"
        ></input>
        <label className="form-check-label" for="exampleRadios2">
          INprogres
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios3"
          value="option3"
          
        ></input>
        <label className="form-check-label" for="exampleRadios3">
          Rejected
        </label>
      </div>
    </div>
  );
};

export default Radios;
