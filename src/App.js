import React, { Component } from "react";
import "./App.css";
import Congrats from "./components/Congrats";
import GuessedWords from "./components/GuessedWords";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords
          guessedWords={[{ guessedWord: "party", letterMatchCount: 5 }]}
        />
      </div>
    );
  }
}

export default App;
