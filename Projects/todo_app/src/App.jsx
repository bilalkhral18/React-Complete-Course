import Heading from "./components/Heading";
import Enter_Todo from "./components/Enter_Todo";
import TodoItems from "./components/TodoItems";
import "./App.css";
function App() {
  let todoItems = [
    { id: 1, name: "Buy Milk", date: "4/6/2023" },
    { id: 2, name: "Go To College", date: "4/6/2023" },
  ];
  return (
    <center className="todo-app">
      <Heading />
      <Enter_Todo />
      <div className="Todo-items">
        <TodoItems items={todoItems} />
      </div>
    </center>
  );
}

export default App;
