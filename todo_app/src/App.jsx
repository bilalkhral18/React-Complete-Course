import "./App.css";
import Heading from "./components/Heading";
import EnterTodoItems from "./components/EnterTodoItems";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
function App() {
  return (
    <>
      <div className="container">
        <Heading></Heading>
        <EnterTodoItems />
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </>
  );
}

export default App;
