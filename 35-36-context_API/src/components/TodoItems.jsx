import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../context/TodoItemsContext";
function TodoItems() {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <div classNameName="container text-container">
      {todoItems.map((item) => {
        return <TodoItem item={item} key={item.name} />;
      })}
    </div>
  );
}

export default TodoItems;
