import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import BoardComp from "./BoardComp";

class GameMainComp extends Component {
  handleRestart = () => {
    window.location.reload(false);
  };

  render() {
    return (
      <div className="section">
        <div className="container">
          <BoardComp />
        </div>
        <div className="game-info">
          <div>
            <Button
              className="button"
              variant="primary"
              onClick={this.handleRestart}
            >
              Restart Game
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default GameMainComp;
