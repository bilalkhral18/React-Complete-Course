import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import styles from "./Enter_Todo.module.css";
function Enter_Todo({ handleFormSubmit }) {
  const [todoname, settodoname] = useState("");
  const [tododate, settododate] = useState("");
  const handletodoName = (event) => {
    settodoname(event.target.value);
  };
  const handletododate = (event) => {
    settododate(event.target.value);
  };
  const onSubmitHandle = () => {
    handleFormSubmit(todoname, tododate);
    settodoname("");
    settododate("");
  };
  return (
    <div className="container text-container">
      <div className={`row ${styles["kg-row"]}`}>
        <div className="col-6">
          <input
            type="text"
            name="todo_type"
            placeholder="Enter Todo Here"
            className={styles.input}
            required
            value={todoname}
            onChange={(event) => handletodoName(event)}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name="due_date"
            className={styles.input}
            required
            value={tododate}
            onChange={(event) => handletododate(event)}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-success ${styles["kg-button"]}`}
            onClick={onSubmitHandle}
          >
            <IoMdAddCircle className={styles.addIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Enter_Todo;
