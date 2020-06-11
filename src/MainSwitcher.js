import React, { Component } from "react";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import GameMainComp from "./HomeExercises/Exercise5-TicTacToe/GameMainComp";

class MainSwitcher extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="pic">
        <GameMainComp />
      </div>
    );
  }
}

export default MainSwitcher;
