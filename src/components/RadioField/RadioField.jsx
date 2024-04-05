import React from "react";
import "./RadioField.scss";
import { useState } from "react";

const RadioButton = (props) => {
  const [value, setValue] = useState("");

  const changeRadioButton = (event) => {
    setValue(event.target.value);
  };

  console.log(value);

  return (
    <>
      <div className="radio__container">
        <input
          type="radio"
          value={props.label}
          onChange={changeRadioButton}
          name={props.id}
          className="radio"
          id={props.label}
        />
        <label className="radio__label">{props.label}</label>
      </div>
    </>
  );
};

export default RadioButton;
