/*disable eslint */

import React from "react";
import styled from "styled-components";
import classes from "./Person.css";
//import Radium, {StyleRoot} from "radium";
//import "./Person.css";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  background-color: #efe8ff;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const s = (a, b) => {
  return a + b;
};

const person = props => {
  return (
    //passing the referencing of the function declared on App.js
    <div className={classes.Person}>
      <p onClick={props.click}>Click here to delete this box</p>
      <p>My name is {props.name}</p>
      <p>I have {props.age} years old</p>
      <p>I live in {props.country}!</p>
      <input className={classes.Input} onChange={props.changed}></input>
      <p>
        {props.children} {s(1, 7)}
      </p>
    </div>
  );
};

export default person;
