import styles from "./Display.module.css";
function Display({ input }) {
  return (
    <div classNameName={`${styles["input_container"]}`}>
      <input
        type="text"
        name="input-container"
        classNameName={`${styles["input"]}`}
        value={input}
      />
    </div>
  );
}
export default Display;
