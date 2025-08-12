import styles from "./App.module.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
function App() {
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
        <Display />
        <Buttons buttonsarr={buttonsArr} />
      </div>
    </center>
  );
}

export default App;
