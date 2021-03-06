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
export const Skills = (props) => {
  const skillslist = props.skills.map((skill) => <li key={skill}>{skill}</li>);
  return <div className="skill-wrapper">{skillslist}</div>;
};
export const ObjHeader = (props) => {
  return (
    <div className="object-wrapper">
      <h1>{props.data.welcome}</h1>
      <h2>{props.data.objTitle}</h2>
    </div>
  );
};
