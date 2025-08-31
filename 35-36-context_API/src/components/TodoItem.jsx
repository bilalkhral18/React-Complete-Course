import styles from "./TodoItem.module.css";
import { FaDeleteLeft } from "react-icons/fa6";
import { useContext } from "react";
import { TodoItemsContext } from "../context/TodoItems_store";
function TodoItem({ item }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className={`row ${styles["kg-row"]}`}>
      <div className="col-6">{item.name}</div>
      <div className="col-4">{item.date}</div>
      <div className={`col-2 ${styles["button-container"]}`}>
        <button
          type="button"
          className={`btn btn-danger ${styles["kg-button"]}`}
          onClick={() => deleteItem(item.name)}
        >
          <FaDeleteLeft />
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
