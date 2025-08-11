import styles from "./Enter_Todo.module.css";
function Enter_Todo() {
  return (
    <div className="container text-container">
      <div className={`row ${styles["kg-row"]}`}>
        <div className="col-6">
          <input
            type="text"
            name="todo_type"
            placeholder="Enter Todo Here"
            className={styles.input}
          />
        </div>
        <div className="col-4">
          <input type="date" name="due_date" className={styles.input} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-success ${styles["kg-button"]}`}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Enter_Todo;
