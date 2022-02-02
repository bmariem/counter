import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.click} className={props.class}>
      {props.counter !== Number(props.limit) ? props.label : null}
    </button>
  );
};

export default Button;
