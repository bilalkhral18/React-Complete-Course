import { useRef, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import styles from "./Enter_Todo.module.css";
function Enter_Todo({ handleFormSubmit }) {
  const tododateElement = useRef();
  const todonameElement = useRef();
  const onSubmitHandle = (event) => {
    event.preventDefault();
    const todoname = todonameElement.current.value;
    const tododate = tododateElement.current.value;
    handleFormSubmit(todoname, tododate);
    todonameElement.current.value = "";
    tododateElement.current.value = "";
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
            ref={todonameElement}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name="due_date"
            className={styles.input}
            required
            ref={tododateElement}
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
