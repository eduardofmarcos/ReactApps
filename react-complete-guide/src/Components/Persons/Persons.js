import React, { Component } from "react";
import Person from "../Persons/Person/Person";

class Persons extends Component {

  componentDidMount = () => {
    console.log("Persons - component did mount");
  };

  componentDidUpdate = ()=>{
    console.log('Persons - component did updated')
  }

  render() {
    return this.props.persons.map((person, index) => (
      <Person
        key={person.id}
        click={() => this.props.click(index)}
        name={person.name}
        age={person.age}
        changed={event => this.props.changed(event, person.id)}
      ></Person>
    ));
  }
}

export default Persons;
