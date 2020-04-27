/*disable eslint*/
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "eduardo florentino marcos", age: 32 },
      { id: "2", name: "roberto", age: 32 },
      { id: "3", name: "carlos", age: 32 },
      { id: "4", name: "eduardo florentino marcos", age: 32 },
      { id: "5", name: "roberto", age: 32 },
      { id: "6", name: "eduardo florentino marcos", age: 32 },
      { id: "7", name: "roberto", age: 32 },
      { id: "8", name: "eduardo florentino marcos", age: 32 },
      { id: "9", name: "roberto", age: 32 },
      { id: "dfs11df", name: "eduardo florentino marcos", age: 32 },
      { id: "111", name: "roberto", age: 32 },
      { id: "11111", name: "eduardo florentino marcos", age: 32 },
      { id: "111111", name: "roberto", age: 32 },
      { id: "343", name: "eduardo florentino marcos", age: 32 },
      { id: "234234", name: "roberto", age: 32 },
      { id: "45435", name: "eduardo florentino marcos", age: 32 },
      { id: "543455554", name: "roberto", age: 32 },
      { id: "34534534455", name: "eduardo florentino marcos", age: 32 },
      { id: "3453453453454", name: "roberto", age: 32 },
      { id: "4545", name: "eduardo florentino marcos", age: 32 },
      { id: "dfdfdfdfdf", name: "roberto", age: 32 },
      { id: "45454325345346", name: "eduardo florentino marcos", age: 32 },
      { id: "345345", name: "roberto", age: 32 },
      { id: "34543543534534534", name: "eduardo florentino marcos", age: 32 },
      { id: "345345345345345345345", name: "roberto", age: 32 }
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
    const style = {
      marginTop: "20px",
      backgroundColor: "white",
      font: "inherit",
      border: "2px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

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
    }
    return (
      <div className="App">
        <header className="App-header">SurfDiary</header>
        <button style={style} onClick={this.togglePersonsHandler}>
          Show surfers!
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
