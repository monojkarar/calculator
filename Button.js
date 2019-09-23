import React from "react";

const Button = props => {
  return (
    <button onClick={props.action} className={props.class} name={props.value}>
      {props.value}
    </button>
  );
};
export default Button;
