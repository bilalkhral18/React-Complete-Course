import styles from "./EnterTodo.module.css";
function EnterTodoItems() {
  return (
    <div className={styles.input_group}>
      <input type="text" name="todo" id="todo" placeholder="Enter Todo Here" />
      <input type="date" name="todoDate" id="todoDate" />
      <button type="button" className="btn btn-success">
        Add
      </button>
    </div>
  );
}
export default EnterTodoItems;
