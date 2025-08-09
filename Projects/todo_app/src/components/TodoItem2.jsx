function TodoItem2() {
  let todoname = "Go To College";
  let tododate = "4/6/2023";
  return (
    <div className="container text-container">
      <div className="row kg-row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2 button-container">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
