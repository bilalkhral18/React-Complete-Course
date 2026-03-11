import styles from "./InputContainer.module.css";
function InputContainer({ ref }) {
  return (
    <input
      type="number"
      placeholder="Enter Number"
      className={styles.input_container}
      ref={ref}
    />
  );
}
export default InputContainer;
