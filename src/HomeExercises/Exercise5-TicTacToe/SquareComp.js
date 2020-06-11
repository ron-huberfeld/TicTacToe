import React, { Component } from "react";

class SquareComp extends Component {
  constructor(props) {
    super(props);
    this.state = { value: null, cardStyle: "square" };
  }

  render() {
    let styleClass;
    if (this.props.value === "X") {
      styleClass = "square-red";
    } else if (this.props.value === "O") {
      styleClass = "square-blue";
    } else {
      styleClass = this.state.cardStyle;
    }
    if (this.props.isWinningSquare) {
      styleClass = "square-winner";
    }

    return (
      <button className={styleClass} onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}
export default SquareComp;
