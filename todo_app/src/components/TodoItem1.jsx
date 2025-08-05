import styles from "./TodoItem1.module.css";
function TodoItem1() {
  let todoname = "Buy Milk";
  let tododate = "5/6/2025";
  return (
    <div className={styles.todoDetails}>
      <div className={styles.namedate}>
        <h6>{todoname}</h6>
        <p>{tododate}</p>
      </div>
      <button type="button" className="btn btn-danger setbutton">
        Delete{" "}
      </button>
    </div>
  );
}
export default TodoItem1;
