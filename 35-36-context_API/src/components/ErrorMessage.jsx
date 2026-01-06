import styles from "./ErrorMessage.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../context/TodoItemsContext";
const ErrorMessage = () => {
  const todoItems = useContext(TodoItemsContext);
  if (todoItems.length === 0) {
    return (
      <div classNameName={styles["error-message"]}>Please Enter TodoItems</div>
    );
  }
  return null;
};

export default ErrorMessage;
