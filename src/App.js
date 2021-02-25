import React, { Component } from "react";
import { Header } from "./headecomponent";
import { Age, Weight, Status, Skills, ObjHeader } from "./numbercomponent";
import { Button, ShowDate } from "./functionalcomponent";

let currentYear = 2021;
let birthYear = 1995;
const age = currentYear - birthYear;
const gravity = 9.81;
const mass = 75;
let status = age >= 18;
const data = {
  welcome: "hello object",
  objTitle: "welcome object"
};
const sayHi = () => {
  alert("hey,welcomr to react functional component");
};
const handleTime = () => {
  alert(ShowDate(new Date()));
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header titel="welcome to 30 days of react" subtitle="rabiya" />
        <Age age={age} />
        <Weight weight={gravity * mass} />
        <Status status={status} />
        <Skills skills={["HTML", "CSS", "JS"]} />
        <ObjHeader data={data} />
        <Button text="say hello function" onClick={sayHi} />
        <Button text="show time" onClick={handleTime} />
      </div>
    );
  }
}
export default App;
