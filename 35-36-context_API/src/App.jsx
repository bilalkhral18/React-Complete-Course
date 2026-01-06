import Heading from "./components/Heading";
import Enter_Todo from "./components/Enter_Todo";
import TodoItems from "./components/TodoItems";
import ErrorMessage from "./components/ErrorMessage";
import { useState } from "react";
import TodoItemsContext from "./context/TodoItemsContext";
import TodoItemsContextProvider from "./context/TodoItemsContext";
function App() {
  return (
    <center classNameName="todo-app">
      <Heading />
      <TodoItemsContextProvider>
        <Enter_Todo />
        <div classNameName="Todo-items">
          <ErrorMessage />
          <TodoItems />
        </div>
      </TodoItemsContextProvider>
    </center>
  );
}

export default App;
