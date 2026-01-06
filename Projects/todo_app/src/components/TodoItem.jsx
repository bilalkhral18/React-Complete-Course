import styles from "./TodoItem.module.css";
import { FaDeleteLeft } from "react-icons/fa6";
function TodoItem({ item, handleDeleteItem }) {
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
