import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const reset = () => {
    setCounter(0);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div
      style={{
        margin: "0 auto",
        border: "1px solid #dee2e6",
        height: "300px",
        width: "300px"
      }}
    >
      <div
        style={{
          height: "200px",
          color: "#6c757d",
          backgroundColor: "#f8f9fa",
          fontSize: "50px"
        }}
      >
        <div
          style={{
            padding: "80px 80px 40px 80px",
            textAlign: "center"
          }}
        >
          {counter}
        </div>
        <div
          style={{
            margin: "20px 0px 0px 0px",
            height: "100px",
            display: "flex",
            flexDirection: "row"
          }}
        >
          <button
            style={{
              width: "33%",
              textAlign: "center",
              backgroundColor: "#28a745",
              color: "#FFF",
              fontSize: "50px"
            }}
            onClick={increment}
          >
            +
          </button>
          <button
            style={{
              width: "33%",
              textAlign: "center",
              backgroundColor: "#ffc107",
              color: "#FFF",
              fontSize: "50px"
            }}
            onClick={reset}
          >
            0
          </button>
          <button
            style={{
              width: "33%",
              textAlign: "center",
              backgroundColor: "#dc3545",
              color: "#FFF",
              fontSize: "50px"
            }}
            onClick={decrement}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
