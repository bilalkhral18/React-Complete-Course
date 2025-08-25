import Heading from "./components/Heading";
import Enter_Todo from "./components/Enter_Todo";
import TodoItems from "./components/TodoItems";
import ErrorMessage from "./components/ErrorMessage";
import { useState } from "react";
import "./App.css";
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleFormSubmit = (itemname, itemdate) => {
    setTodoItems((currval) => [...currval, { name: itemname, date: itemdate }]);
  };
  const handleDeleteItem = (itemname) => {
    setTodoItems((currval) => currval.filter((item) => item.name !== itemname));
  };
  return (
    <center className="todo-app">
      <Heading />
      <Enter_Todo handleFormSubmit={handleFormSubmit} />
      <div className="Todo-items">
        <ErrorMessage todoItems={todoItems} />
        <TodoItems items={todoItems} handleDeleteItem={handleDeleteItem} />
      </div>
    </center>
  );
}

export default App;
