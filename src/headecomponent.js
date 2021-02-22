import React from "react";

export const Header = (props) => {
  return (
    <div className="header-wrapper">
      <h1>{props.titel}</h1>
      <h3>{props.subtitle}</h3>
    </div>
  );
};
