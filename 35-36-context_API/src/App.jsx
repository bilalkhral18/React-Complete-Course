import Heading from "./components/Heading";
import Enter_Todo from "./components/Enter_Todo";
import TodoItems from "./components/TodoItems";
import ErrorMessage from "./components/ErrorMessage";
import ContextProvider from "./context/TodoItems_store";

import "./App.css";
function App() {
  return (
    <ContextProvider>
      <center className="todo-app">
        <Heading />
        <Enter_Todo />
        <div className="Todo-items">
          <ErrorMessage />
          <TodoItems />
        </div>
      </center>
    </ContextProvider>
  );
}

export default App;
