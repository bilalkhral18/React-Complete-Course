import styles from "./TodoItem.module.css";
import { FaDeleteLeft } from "react-icons/fa6";
import { useContext } from "react";
import { TodoItemsContext } from "../context/TodoItemsContext";
function TodoItem({ item }) {
  const { handleDeleteItem } = useContext(TodoItemsContext);
  return (
    <div classNameName={`row ${styles["kg-row"]}`}>
      <div classNameName="col-6">{item.name}</div>
      <div classNameName="col-4">{item.date}</div>
      <div classNameName={`col-2 ${styles["button-container"]}`}>
        <button
          type="button"
          classNameName={`btn btn-danger ${styles["kg-button"]}`}
          onClick={() => handleDeleteItem(item.name)}
        >
          <FaDeleteLeft />
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
