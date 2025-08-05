import styles from "./TodoItem2.module.css";
function TodoItem2() {
  let todoname = "Go To College";
  let tododate = "5/6/2025";
  return (
    <div className={styles.todoDetails}>
      <div className={styles.namedate}>
        <h6>{todoname}</h6>
        <p>{tododate}</p>
      </div>
      <button type="button" class="btn btn-danger setbutton">
        Delete{" "}
      </button>
    </div>
  );
}
export default TodoItem2;
