import { useState } from "react";
import TodoItem from "./TodoItem";
function TodoItems({ items, handleDeleteItem }) {
  return (
    <div className="container text-container">
      {items.map((item) => {
        return (
          <TodoItem
            item={item}
            key={item.name}
            handleDeleteItem={handleDeleteItem}
          />
        );
      })}
    </div>
  );
}

export default TodoItems;
