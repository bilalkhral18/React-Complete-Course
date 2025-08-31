import { createContext, useReducer } from "react";
import { useState } from "react";
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
const reducerfunc = (todoItems, action) => {
  let newTodoItems = todoItems;
  if (action.type === "ADD") {
    newTodoItems = [
      ...todoItems,
      { name: action.payload.name, date: action.payload.date },
    ];
  } else if (action.type === "DELETE") {
    newTodoItems = todoItems.filter(
      (todoItem) => todoItem.name !== action.payload.name
    );
  }
  return newTodoItems;
};

const ContextProvider = ({ children }) => {
  // const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatch] = useReducer(reducerfunc, []);
  const addNewItem = (itemname, itemdate) => {
    const newItemAction = {
      type: "ADD",
      payload: { name: itemname, date: itemdate },
    };
    dispatch(newItemAction);
  };
  const deleteItem = (itemname) => {
    const deleteItemAction = {
      type: "DELETE",
      payload: {
        name: itemname,
      },
    };
    dispatch(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default ContextProvider;
