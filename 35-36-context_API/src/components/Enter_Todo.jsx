import { useRef, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { useContext } from "react";
import styles from "./Enter_Todo.module.css";
import { TodoItemsContext } from "../context/TodoItemsContext";
function Enter_Todo() {
  const { handleFormSubmit } = useContext(TodoItemsContext);
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
    <div classNameName="container text-container">
      <form onSubmit={onSubmitHandle} classNameName={`row ${styles["kg-row"]}`}>
        <div classNameName="col-6">
          <input
            type="text"
            name="todo_type"
            placeholder="Enter Todo Here"
            classNameName={styles.input}
            required
            ref={todonameElement}
          />
        </div>
        <div classNameName="col-4">
          <input
            type="date"
            name="due_date"
            classNameName={styles.input}
            required
            ref={tododateElement}
          />
        </div>
        <div classNameName="col-2">
          <button
            type="submit"
            classNameName={`btn btn-success ${styles["kg-button"]}`}
          >
            <IoMdAddCircle classNameName={styles.addIcon} />
          </button>
        </div>
      </form>
    </div>
  );
}
export default Enter_Todo;
