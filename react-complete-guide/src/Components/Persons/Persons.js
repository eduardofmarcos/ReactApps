import React from "react";
import Person from "../Persons/Person/Person";

const Persons = props => {
  // const say = event => {
  //   const name = event.target.value;
  //   console.log(name);
  // };

  return (
    <div>
      {props.persons.map((person, index) => (
        <Person
          key={person.id}
          click={() => props.click(index)}
          name={person.name}
          age={person.age}
          changed={(event) => props.changed(event, person.id)}
        ></Person>
      ))}
    </div>
  );
};

export default Persons;
