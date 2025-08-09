function Enter_Todo() {
  return (
    <div className="container text-container">
      <div className="row kg-row">
        <div class="col-6">
          <input type="text" name="todo_type" placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date" name="due_date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Enter_Todo;
