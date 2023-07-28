import React, { useState } from "react";
import "../Styles/App.css";

function Description(props) {

  const [isVisible, setIsVisible] = useState(false);
  function handleClick() {
    setIsVisible((isVisible) => !isVisible);
  }
  return (
    <div className="dropdown" id="dropdownMenu" onClick={handleClick}>
      <button className="btn">
        {props.name}
        <div
          className={`arrow ${isVisible ? "arrow-bottom" : "arrow-top"}`}
        ></div>
      </button>
      <div
        className={`dropdown-content ${
          isVisible ? "dropdown-content-ON" : "dropdown-content-OFF"
        }`}
      >
        {props.dropdown}
      </div>
    </div>
  );
}

export default Description;
