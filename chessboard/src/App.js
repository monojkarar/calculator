import React from "react";
import "./App.css";
import EvenRows from "./EvenRows";
import OddRows from "./OddRows";

function App() {
  return (
    <div className="chessboard">
      <OddRows />
      <EvenRows />
      <OddRows />
      <EvenRows />
      <OddRows />
      <EvenRows />
      <OddRows />
      <EvenRows />
    </div>
  );
}

export default App;
