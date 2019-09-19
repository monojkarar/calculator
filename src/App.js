import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("0");
  // const [finalResult, setFinalResult] = useState("0");
  const [currentValue, setCurrentValue] = useState("0");
  const [tempValue, setTempValue] = useState("0");

  const update = e => {
    let val = Number(e.target.name);

    if (val >= 0 && val < 10) {
      // setTempValue(result);
      if (Number(currentValue) === 0) {
        setResult(String(val));
        setCurrentValue(String(val));
      } else {
        setResult(result + String(val));
        setCurrentValue(result + String(val));
      }
    }
    console.log("Result : ", result);
    console.log("CurretnValue : ", currentValue);
    console.log("Temp Value : ", tempValue);
    console.log("---------------------------------");
  };

  const reset = () => {
    setResult("0");
    setCurrentValue("0");
  };

  const add = () => {
    console.log("Inside Add");
    if (Number(tempValue) > 0) {
      setResult(Number(tempValue) + Number(currentValue));
    } else {
      setTempValue("0");
      setResult("0");
    }
  };

  return (
    <div className="container">
      <div>
        <input
          type="text"
          readOnly
          name="result"
          value={result}
          style={{
            width: "98%",
            height: "50px",
            textAlign: "right",
            fontSize: "40px"
          }}
        />
      </div>
      <div>
        <div style={{ display: "inline" }}>
          <button
            style={{
              border: "none",
              borderColor: "transparent",
              fontSize: "15px",
              fontWeight: "bold"
            }}
            onClick={reset}
          >
            C
          </button>
        </div>
        <div style={{ display: "inline" }}>
          <button
            style={{
              border: "none",
              borderColor: "transparent",
              fontSize: "15px",
              fontWeight: "bold"
            }}
          >
            +/-
          </button>
        </div>
        <div style={{ display: "inline" }}>
          <button
            style={{
              border: "none",
              borderColor: "transparent",
              fontSize: "15px",
              fontWeight: "bold"
            }}
          >
            %
          </button>
        </div>
        <div style={{ display: "inline" }}>
          <button
            style={{
              border: "none",
              borderColor: "transparent",
              backgroundColor: "#eb8334",
              fontSize: "15px",
              fontWeight: "bold"
            }}
          >
            /
          </button>
        </div>
      </div>
      <div>
        <div style={{ display: "inline" }}>
          <button
            style={{
              border: "none",
              borderColor: "transparent",
              fontSize: "15px",
              fontWeight: "bold"
            }}
            name="7"
            onClick={update}
          >
            7
          </button>
        </div>
        <div style={{ display: "inline" }}>
          <button
            style={{
              border: "none",
              borderColor: "transparent",
              fontSize: "15px",
              fontWeight: "bold"
            }}
            name="8"
            onClick={update}
          >
            8
          </button>
        </div>
        <div style={{ display: "inline" }}>
          <button
            style={{
              border: "none",
              borderColor: "transparent",
              fontSize: "15px",
              fontWeight: "bold"
            }}
            name="9"
            onClick={update}
          >
            9
          </button>
        </div>
        <div style={{ display: "inline" }}>
          <button
            style={{
              border: "none",
              borderColor: "transparent",
              backgroundColor: "#eb8334",
              fontSize: "15px",
              fontWeight: "bold"
            }}
          >
            X
          </button>
        </div>
      </div>
      <div>
        <div style={{ display: "inline" }}>
          <button
            style={{
              border: "none",
              borderColor: "transparent",
              fontSize: "15px",
              fontWeight: "bold"
            }}
            name="4"
            onClick={update}
          >
            4
          </button>
        </div>
        <div style={{ display: "inline" }}>
          <button
            style={{
              border: "none",
              borderColor: "transparent",
              fontSize: "15px",
              fontWeight: "bold"
            }}
            name="5"
            onClick={update}
          >
            5
          </button>
        </div>
        <div style={{ display: "inline" }}>
          <button
            style={{
              border: "none",
              borderColor: "transparent",
              fontSize: "15px",
              fontWeight: "bold"
            }}
            name="6"
            onClick={update}
          >
            6
          </button>
        </div>
        <div style={{ display: "inline" }}>
          <button
            style={{
              border: "none",
              borderColor: "transparent",
              backgroundColor: "#eb8334",
              fontSize: "15px",
              fontWeight: "bold"
            }}
          >
            -
          </button>
        </div>
      </div>
      <div>
        <div style={{ display: "inline" }}>
          <button
            style={{
              border: "none",
              borderColor: "transparent",
              fontSize: "15px",
              fontWeight: "bold"
            }}
            name="1"
            onClick={update}
          >
            1
          </button>
        </div>
        <div style={{ display: "inline" }}>
          <button
            style={{
              border: "none",
              borderColor: "transparent",
              fontSize: "15px",
              fontWeight: "bold"
            }}
            name="2"
            onClick={update}
          >
            2
          </button>
        </div>
        <div style={{ display: "inline" }}>
          <button
            style={{
              border: "none",
              borderColor: "transparent",
              fontSize: "15px",
              fontWeight: "bold"
            }}
            name="3"
            onClick={update}
          >
            3
          </button>
        </div>
        <div style={{ display: "inline" }}>
          <button
            style={{
              border: "none",
              borderColor: "transparent",
              backgroundColor: "#eb8334",
              fontSize: "15px",
              fontWeight: "bold"
            }}
            onClick={add}
          >
            +
          </button>
        </div>
      </div>
      <div>
        <div style={{ display: "inline" }}>
          <button
            style={{
              borderRadius: "0 0 0 10px",
              borderColor: "transparent",
              width: "100px",
              fontSize: "15px",
              fontWeight: "bold"
            }}
            name="0"
            onClick={update}
          >
            0
          </button>
        </div>
        <div style={{ display: "inline" }}>
          <button
            style={{
              border: "none",
              borderColor: "transparent",
              fontSize: "15px",
              fontWeight: "bold"
            }}
          >
            .
          </button>
        </div>
        <div style={{ display: "inline" }}>
          <button
            style={{
              borderRadius: "0 0 10px 0",
              border: "none",
              borderColor: "transparent",
              backgroundColor: "#eb8334",
              fontSize: "15px",
              fontWeight: "bold"
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
