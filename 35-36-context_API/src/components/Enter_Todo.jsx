import { useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { useContext } from "react";
import { TodoItemsContext } from "../context/TodoItems_store";
import styles from "./Enter_Todo.module.css";
function Enter_Todo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameRef = useRef();
  const todoDateRef = useRef();
  const onSubmitHandle = (event) => {
    event.preventDefault();
    const todoname = todoNameRef.current.value;
    const tododate = todoDateRef.current.value;
    addNewItem(todoname, tododate);
    todoNameRef.current.value = "";
    todoDateRef.current.value = "";
  };
  return (
    <div className="container text-container">
      <form onSubmit={onSubmitHandle} className={`row ${styles["kg-row"]}`}>
        <div className="col-6">
          <input
            type="text"
            name="todo_type"
            placeholder="Enter Todo Here"
            className={styles.input}
            required
            ref={todoNameRef}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name="due_date"
            className={styles.input}
            required
            ref={todoDateRef}
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className={`btn btn-success ${styles["kg-button"]}`}
          >
            <IoMdAddCircle className={styles.addIcon} />
          </button>
        </div>
      </form>
    </div>
  );
}
export default Enter_Todo;
