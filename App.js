import React, { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [result, setResult] = useState("0");
  // const [finalResult, setFinalResult] = useState("0");
  const [currentValue, setCurrentValue] = useState("0");
  const [tempValue, setTempValue] = useState("0");

  const update = e => {
    let val = Number(e.target.name);

    if (currentValue.length < 9 && val >= 0 && val < 10) {
      // setTempValue(result);
      if (Number(currentValue) === 0) {
        setResult(String(val));
        setCurrentValue(String(val));
      } else {
        setResult(result + String(val));
        setCurrentValue(result + String(val));
      }
    }
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
      <input type="text" readOnly name="result" value={result} />

      <Button action={reset} class="greyButton" value="C" />
      <Button class="greyButton" value="+/-" />
      <Button class="greyButton" value="%" />
      <Button class="orangeButton" value="/" />

      <Button class="blackButton" value="7" action={update} />
      <Button class="blackButton" value="8" action={update} />
      <Button class="blackButton" value="9" action={update} />
      <Button class={["orangeButton", "rotate"].join(" ")} value="+" />

      <Button class="blackButton" value="4" action={update} />
      <Button class="blackButton" value="5" action={update} />
      <Button class="blackButton" value="6" action={update} />
      <Button class="orangeButton" value="-" />

      <Button class="blackButton" value="1" action={update} />
      <Button class="blackButton" value="2" action={update} />
      <Button class="blackButton" value="3" action={update} />
      <Button class="orangeButton" value="+" />

      <Button
        name="0"
        class={["blackButton", "extraSpace"].join(" ")}
        value="0"
        action={update}
      />
      <Button class="blackButton" value="." />
      <Button class="orangeButton" value="=" />
    </div>
  );
}

export default App;
