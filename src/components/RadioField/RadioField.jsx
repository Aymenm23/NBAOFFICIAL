import React from "react";
import "./RadioField.scss";

const RadioButton = (props) => {
  
  const changeRadioButton = (event) => {
    setValue(event.target.value)
  } 

  return (
    <>
    <div className="radio__container">
    <input type="radio" /* checked={check} */ value={props.label} /* onChange={onChange} */ name={props.id} className="radio"/>
    <label className="radio__label">{props.label}</label>
    </div>
    </>
  );
};

export default RadioButton;