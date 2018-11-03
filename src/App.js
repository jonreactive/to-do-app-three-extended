import React, { Component } from "react";
import Counter from "./components/Counter";
import Counters from "./components/Counters";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counters />
      </div>
    );
  }
}

export default App;
