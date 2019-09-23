import React, { useState } from "react";
import "./App.css";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");

  const update = e => {
    if (e.target.name === "input1") {
      setInput1(e.target.value);
    } else if (e.target.name === "input2") {
      setInput2(e.target.value);
    }
  };

  const calculate = e => {
    if (e.target.name === "Add") {
      setResult(Number(input1) + Number(input2));
    } else if (e.target.name === "Subtract") {
      setResult(Number(input1) - Number(input2));
    } else if (e.target.name === "Multiply") {
      setResult(Number(input1) * Number(input2));
    } else if (e.target.name === "Divide") {
      setResult(Number(input1) / Number(input2));
    }
  };
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Input 1 : </td>
            <td>
              <input
                type="text"
                name="input1"
                value={input1}
                onChange={update}
              />
            </td>
          </tr>
          <tr>
            <td>Input 2 : </td>
            <td>
              <input
                type="text"
                name="input2"
                value={input2}
                onChange={update}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <input
                type="button"
                name="Add"
                defaultValue="Add"
                onClick={calculate}
                style={{ margin: "5px" }}
              />
              <input
                type="button"
                name="Subtract"
                defaultValue="Subtract"
                onClick={calculate}
                style={{ margin: "5px" }}
              />
              <input
                type="button"
                name="Multiply"
                defaultValue="Multiply"
                onClick={calculate}
                style={{ margin: "5px" }}
              />
              <input
                type="button"
                name="Divide"
                defaultValue="Divide"
                onClick={calculate}
                style={{ margin: "5px" }}
              />
            </td>
          </tr>
          <tr>
            <td>Result : </td>
            <td>
              <input type="text" name="result" value={result} readOnly />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
