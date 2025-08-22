import styles from "./App.module.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const handleButtonClick = (event) => {
    const buttonValue = event.target.innerText;
    if (buttonValue === "C") {
      setInput("");
    } else if (buttonValue === "=") {
      const result = eval(input);
      setInput(result); // Using eval for simplicity, but be cautious with this in production code
    } else {
      setInput((prevInput) => prevInput + buttonValue);
    }
  };
  const buttonsArr = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <center className={`${styles["app_container"]}`}>
      <div className={`${styles["content-container"]}`}>
        <Display input={input} />
        <Buttons
          buttonsarr={buttonsArr}
          handleIndividualButtonClick={handleButtonClick}
        />
      </div>
    </center>
  );
}

export default App;
