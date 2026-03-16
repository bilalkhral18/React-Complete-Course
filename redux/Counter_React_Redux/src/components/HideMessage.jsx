import styles from "../components/ReadOnlyInput/ReadOnlyInput.module.css";
function HideMessage() {
  return (
    <input
      className={styles.display_container}
      type="text"
      readOnly
      value="Value Is Private"
    />
  );
}
export default HideMessage;
