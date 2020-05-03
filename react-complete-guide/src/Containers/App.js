/*disable eslint*/
import React, { Component } from "react";
import classes from "./App.css";
import "./App.css";
import Cockpit from "./../Components/Cockpit/Cockpit";
import Persons from "./../Components/Persons/Persons";

class App extends Component {
  /******** State ********/
  state = {
    persons: [
      { id: "1", name: "eduardo florentino marcos", age: 32 },
      { id: "2", name: "roberto", age: 32 },
      { id: "3", name: "roberto", age: 32 },
      { id: "4", name: "roberto", age: 32 }
    ],
    showPersons: false
  };

 

  componentDidMount = () => {
    console.log("App - component did mount");
  };

  componentDidUpdate = ()=>{
    console.log('App - component did updated')
  }

  /******** Handlers ********/
  switchOnchangeHandler = (event, id) => {
    console.log(id);
    console.log(event.target.value);
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = this.state.persons[personIndex];
    person.name = event.target.value;
    const persons = [...this.state.persons];
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    if (this.state.showPersons === false) {
      this.setState({ showPersons: true });
    } else {
      this.setState({ showPersons: false });
    }
  };

  deletePersonHandler = personIndex => {
    //****************** */
    //state imutabilitie
    //copy
    //change
    //update state
    //****************** */

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  render() {
    /******** Cockpit ********/
    const cockpit = (
      <Cockpit
        stateStatus={this.state.showPersons}
        toggle={this.togglePersonsHandler}
        stateLength={this.state.persons.length}
        persons = {this.state.persons}
      />
    );

    /******** Persons ********/
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          changed={this.switchOnchangeHandler}
          persons={this.state.persons}
          click={this.deletePersonHandler}
        />
      );
    }

    

    //always is going to return html/js/jsx
    return (
      <div className={classes.App}>
        {cockpit}
        {persons}
      </div>
    );
  }
}

export default App;
