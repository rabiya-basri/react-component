import React from "react";

export const Button = (props) => {
  return (
    <div className="button-wrapper">
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  );
};
