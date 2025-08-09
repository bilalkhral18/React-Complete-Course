import Heading from "./components/Heading";
import Enter_Todo from "./components/Enter_Todo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";
function App() {
  return (
    <center className="todo-app">
      <Heading />
      <Enter_Todo />
      <div className="Todo-items">
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
