import styles from "./Display.module.css";
function Display() {
  return (
    <div className={`${styles["input_container"]}`}>
      <input
        type="number"
        name="input-container"
        className={`${styles["input"]}`}
      />
    </div>
  );
}
export default Display;
