import styles from "./TodoItem.module.css";
import { FaDeleteLeft } from "react-icons/fa6";
function TodoItem({ item, handleDeleteItem }) {
  return (
    <div className={`row ${styles["kg-row"]}`}>
      <div className="col-6">{item.name}</div>
      <div className="col-4">{item.date}</div>
      <div className={`col-2 ${styles["button-container"]}`}>
        <button
          type="button"
          className={`btn btn-danger ${styles["kg-button"]}`}
          onClick={() => handleDeleteItem(item.name)}
        >
          <FaDeleteLeft />
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
