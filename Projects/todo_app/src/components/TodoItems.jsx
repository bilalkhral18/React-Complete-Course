import TodoItem from "./TodoItem";
function TodoItems({ items }) {
  return (
    <div className="container text-container">
      {items.map((item) => {
        return <TodoItem item={item} key={item.id} />;
      })}
    </div>
  );
}

export default TodoItems;
