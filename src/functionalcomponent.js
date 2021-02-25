import React from "react";

export const Button = (props) => {
  return (
    <div className="button-wrapper">
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  );
};
export const ShowDate = (time) => {
  const months = [
    "january",
    "febrary",
    "march",
    "april",
    "may",
    "june",
    "july",
    "augest",
    "september",
    "octumber",
    "december"
  ];
  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();
  return `${month}${year}${date}`;
};
