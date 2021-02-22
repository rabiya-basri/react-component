import React, { Component } from "react";
import { Header } from "./headecomponent";
import { Age, Weight, Status } from "./numbercomponent";

let currentYear = 2021;
let birthYear = 1990;
const age = currentYear - birthYear;
const gravity = 9.81;
const mass = 75;
let status = age >= 18;
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header titel="welcome to 30 days of react" subtitle="rabiya" />
        <Age age={age} />
        <Weight weight={gravity * mass} />
        <Status status={status} />
      </div>
    );
  }
}
export default App;