import React, { Component } from "react";
import "./App.css";
import MainSwitcher from "./MainSwitcher";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header >
          <div >
            <h1>
              How About a Little Game of Tic Tac Toe?
            </h1>
          </div>
        </header>
        <MainSwitcher />
      </div>
    );
  }
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
