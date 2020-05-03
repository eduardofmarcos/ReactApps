/*disable eslint */

import React, { Component } from "react";
//import styled from "styled-components";
import classes from "./Person.css";

class Person extends Component {
  componentDidMount = () => {
    console.log("Person - component did mount");
  };

  componentDidUpdate = () => {
    console.log("Person - component did updated");
  };

  render() {
    return (
      //passing the referencing of the function declared on App.js
      <div className={classes.Person}>
        <p onClick={this.props.click}>Click here to delete this box</p>
        <p>My name is {this.props.name}</p>
        <p>I have {this.props.age} years old</p>
        <p>I live in {this.props.country}!</p>
        <input className={classes.Input} onChange={this.props.changed}></input>
      </div>
    );
  }
}

export default Person;
