import { useState } from "react";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { createContext } from "react";
import { TodoItemsContext } from "../context/TodoItems_store";
function TodoItems() {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <div className="container text-container">
      {todoItems.map((item) => {
        return <TodoItem item={item} key={item.name} />;
      })}
    </div>
  );
}

export default TodoItems;
