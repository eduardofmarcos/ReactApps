/*disable eslint */

import React from "react";
import "./Person.css";

const person = props => {
  const s = (a, b) => {
    return a + b;
  };
  return (
    //passing the referencing of the function declared on App.js
    <div className="Person">
      <p onClick={props.click}>Click here to delete this box</p>
      <p>My name is {props.name}</p>
      <p>I have {props.age} years old</p>
      <p>I live in {props.country}!</p>
      <input onChange={props.changed}></input>
      <p>
        {props.children} {s(1, 3)}
      </p>
    </div>
  );
};

export default person;
