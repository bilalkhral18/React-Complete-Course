import styles from "./ReadOnlyInput.module.css";
function ReadOnlyInput() {
  return <input className={styles.display_container} type="number" readOnly />;
}
export default ReadOnlyInput;
