import styles from "./ReadOnlyInput.module.css";
import { useSelector } from "react-redux";
function ReadOnlyInput() {
  const { counterVal } = useSelector((store) => store.counter);
  return (
    <input
      className={styles.display_container}
      type="number"
      readOnly
      placeholder="counter current value"
      value={counterVal}
    />
  );
}
export default ReadOnlyInput;
