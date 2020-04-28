/*disable eslint*/
import React, { Component } from "react";
import style from "styled-components";
//import Radium, { StyleRoot } from "radium";
import classes from "./App.css";
import "./App.css";
import Person from "./Person/Person";

// const StyledButton = style.button`
//   margin-top: 20px;
//   background-color: ${props => (props.alt ? "red" : "green")};
//   color: white;
//   font: inherit;
//   border: 2px solid blue;
//   padding: 8px;
//   cursor: pointer;
//   dislay: block;

//   &:hover {
//     background-color: ${props => (props.alt ? "salmon" : "lightgreen")};
//     color: black;
//   };
// `;

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "eduardo florentino marcos", age: 32 },
      { id: "2", name: "roberto", age: 32 }
    ],
    showPersons: false
  };

  // switchNameHandler = (name, age) => {
  //   // DO NOT DO THIS = this.state.persons[0].name = "eduardo surf ok";
  //   this.setState({
  //     persons: [{ name, age }]
  //   });
  // };

  switchOnchangeHandler = (event, id) => {
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
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  render() {

    let className = null;
    if (this.state.persons.length < 3) {
      className = classes.red;
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={event => {
                this.switchOnchangeHandler(event, person.id);
              }}
              //this can be inefficient way of passing arguments to a function
            >
              Eu gosto viajar
            </Person>
          ))}
        </div>
      );

      style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black"
      // };
    }
    //always is going to return html/js/jsx
    return (
      <div className={classes.App}>
        <header className="App-header">SurfDiary</header>
        <p className={className}>It's working!</p>

        <button className={classes.Button} onClick={this.togglePersonsHandler}>
          Show Surfers!
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
