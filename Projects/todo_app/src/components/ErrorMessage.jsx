import styles from "./ErrorMessage.module.css";
const ErrorMessage = ({ todoItems }) => {
  if (todoItems.length === 0) {
    return (
      <div classNameName={styles["error-message"]}>Please Enter TodoItems</div>
    );
  }
  return null;
};

export default ErrorMessage;
