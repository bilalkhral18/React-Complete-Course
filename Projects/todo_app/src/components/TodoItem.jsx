import styles from "./TodoItem.module.css";
function TodoItem({ item }) {
  return (
    <div className={`row ${styles["kg-row"]}`}>
      <div className="col-6">{item.name}</div>
      <div className="col-4">{item.date}</div>
      <div className={`col-2 ${styles["button-container"]}`}>
        <button
          type="button"
          className={`btn btn-danger ${styles["kg-button"]}`}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
