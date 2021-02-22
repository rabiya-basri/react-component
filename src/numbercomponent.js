import React from "react";

export const Age = (props) => {
  return <div className="number-wrapper">{props.age}</div>;
};
export const Weight = (props) => {
  return <div className="weight-wrapper">{props.weight}</div>;
};
export const Status = (props) => {
  let agestatus = props.status ? "old enough to drive" : "to young to drive";
  return <div className="status-wrapper">{agestatus}</div>;
};
