import styles from "./Display.module.css";
function Display({ input }) {
  return (
    <div className={`${styles["input_container"]}`}>
      <input
        type="text"
        name="input-container"
        className={`${styles["input"]}`}
        value={input}
      />
    </div>
  );
}
export default Display;
