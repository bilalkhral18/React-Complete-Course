import { createContext, useState, useReducer } from "react";
export const TodoItemsContext = createContext(null);
const reducerfunc = (todoItems, action) => {
  let newtodoitems = todoItems;
  if (action.type === "ADD") {
    newtodoitems = [
      ...todoItems,
      { name: action.payload.itemname, date: action.payload.itemdate },
    ];
  } else if (action.type === "DELETE") {
    newtodoitems = todoItems.filter(
      (item) => item.name !== action.payload.itemname
    );
  }
  return newtodoitems;
};
const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatch] = useReducer(reducerfunc, []);
  // const [todoItems, setTodoItems] = useState([]);
  const handleFormSubmit = (itemname, itemdate) => {
    const actionaddnewitem = {
      type: "ADD",
      payload: { itemname, itemdate },
    };
    dispatch(actionaddnewitem);
    // setTodoItems((currval) => [...currval, { name: itemname, date: itemdate }]);
    // const newtodoitems = [...todoItems, { name: itemname, date: itemdate }];
    // setTodoItems(newtodoitems);
  };
  const handleDeleteItem = (itemname) => {
    const actiondeleteitem = {
      type: "DELETE",
      payload: { itemname },
    };
    dispatch(actiondeleteitem);
    // setTodoItems((currval) => currval.filter((item) => item.name !== itemname));
  };
  return (
    <TodoItemsContext.Provider
      value={{ handleFormSubmit, todoItems, handleDeleteItem }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
