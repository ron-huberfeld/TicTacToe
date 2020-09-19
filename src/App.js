import React from "react";
import "./App.css";
import MainSwitcher from "./MainSwitcher";

const App = () => {
  return (
    <div>
      <header>
        <div>
          <h3>How About a Little Game of Tic Tac Toe?</h3>
        </div>
      </header>
      <MainSwitcher />
    </div>
  );
};

export default App;
