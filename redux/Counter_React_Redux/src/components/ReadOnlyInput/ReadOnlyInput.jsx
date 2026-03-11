import styles from "./ReadOnlyInput.module.css";
import { useSelector } from "react-redux";
function ReadOnlyInput() {
  const counter = useSelector((store) => store.counter);
  return (
    <input
      className={styles.display_container}
      type="number"
      readOnly
      placeholder="counter current value"
      value={counter}
    />
  );
}
export default ReadOnlyInput;
