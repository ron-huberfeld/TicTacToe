import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import RowComp from "./RowComp";

class BoardComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardSize: 3,
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick = (i) => {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  };

  isGameOver = () => {
    const squares = this.state.squares;
    for (let index = 0; index < squares.length; index++) {
      const element = squares[index];
      if (element === null) {
        return false;
      }
    }
    return true;
  };

  calculateWinner = (squares) => {
    let size = this.state.boardSize;
    switch (parseInt(size)) {
      case 3:
        let winningOptions = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < winningOptions.length; i++) {
          let [a, b, c] = winningOptions[i];
          if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
          ) {
            return { player: squares[a], line: [a, b, c] };
          }
        }
        return null;
      case 4:
        let winningOptions2 = [
          [0, 1, 2, 3],
          [4, 5, 6, 7],
          [8, 9, 10, 11],
          [12, 13, 14, 15],
          [0, 4, 8, 12],
          [1, 5, 9, 13],
          [2, 6, 10, 14],
          [3, 7, 11, 15],
          [0, 5, 10, 15],
          [3, 6, 9, 12],
        ];
        for (let i = 0; i < winningOptions2.length; i++) {
          let [a, b, c, d] = winningOptions2[i];
          if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c] &&
            squares[a] === squares[d]
          ) {
            return { player: squares[a], line: [a, b, c, d] };
          }
        }
        return null;
      default:
        console.log("Something is wrong!!!");
        return null;
    }
  };

  handleSizeChange = (event) => {
    let newSizeValue = event.target.title;
    let size = Math.pow(newSizeValue, 2);
    this.setState({
      boardSize: newSizeValue,
      squares: Array(size).fill(null),
      xIsNext: true,
    });
  };

  getStatus = () => {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    let winningSquares = [];
    if (winner != null) {
      status = "Winner: " + winner.player;
      winningSquares = winner.line;
    } else if (winner != null && this.isGameOver()) {
      status = "Outcome is tie!";
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    return { status: status, winningSquares: winningSquares };
  };

  renderRow = (i, winningSquares) => {
    return (
      <RowComp
        key={i}
        value={i}
        squares={this.state.squares}
        boardSize={this.state.boardSize}
        winningSquares={winningSquares}
        onClick={(x) => this.handleClick(x)}
      />
    );
  };

  renderBoard = (obj) => {
    const items = [];
    for (
      let rowIndex = 0;
      rowIndex < this.state.squares.length;
      rowIndex += this.state.squares.length / this.state.boardSize
    ) {
      items.push(this.renderRow(rowIndex, obj));
    }
    return items;
  };

  render() {
    let statusObj = this.getStatus();
    let status = statusObj.status;
    let winningSquares = statusObj.winningSquares;

    return (
      <div>
        <div className="board-row">{this.renderBoard({ winningSquares })}</div>
        <div className="status">{status}</div>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Board Size
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              as="button"
              title="3"
              active={true}
              onClick={this.handleSizeChange}
            >
              3
            </Dropdown.Item>
            <Dropdown.Item
              as="button"
              title="4"
              onClick={this.handleSizeChange}
            >
              4
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}
export default BoardComp;
