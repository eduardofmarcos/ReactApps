import React, { Component } from "react";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

import "./App.css";

class App extends Component {
  state = {
    textSize: "0",
    word: "O"
  };

  changeInputHandler = event => {
    const state = this.state;
    state.textSize = event.target.value.length;
    state.word = event.target.value;
    this.setState({
      state
    });
  };

  deleteLetterHandler = index => {
    let word = this.state.word.split("");
    word.splice(index, 1);
    const newWord = word.join("");
    this.setState({
      word: newWord,
      textSize: newWord.length
    });
  };

  render() {
    let char = (
      <div>
        {this.state.word.split("").map((element, index) => (
          <Char
            letter={element}
            key={index}
            click={() => {
              this.deleteLetterHandler(index);
            }}
          ></Char>
        ))}
      </div>
    );

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.changeInputHandler}
          value={this.state.word}
        />
        <p>Size: {this.state.textSize}</p>
        <Validation size={this.state.textSize}></Validation>
        {char}
      </div>
    );
  }
}

export default App;
