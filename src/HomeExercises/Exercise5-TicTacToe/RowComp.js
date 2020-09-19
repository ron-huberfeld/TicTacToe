import React, { Component } from "react";
import SquareComp from "./SquareComp";

class RowComp extends Component {
  renderSquare = (i) => {
    let winArr = this.props.winningSquares;
    let isWinningSquare = winArr.winningSquares.includes(i);
    return (
      <SquareComp
        key={i}
        value={this.props.squares[i]}
        isWinningSquare={isWinningSquare}
        onClick={() => this.props.onClick(i)}
      />
    );
  };

  renderColumnsPerRow = (i) => {
    const items = [];
    for (
      let columnNum = 0;
      columnNum < this.props.squares.length / this.props.boardSize;
      columnNum++
    ) {
      items.push(this.renderSquare(i + columnNum));
    }
    return items;
  };

  render() {
    return (
      <div className="board-row">
        {this.renderColumnsPerRow(this.props.value)}
      </div>
    );
  }
}
export default RowComp;
