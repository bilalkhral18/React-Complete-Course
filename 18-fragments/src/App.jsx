import React from "react";
import AppName from "./components/AppName";
import Message from "./components/Message";
import FoodItems from "./components/FoodItems";
import "./App.css";

function App() {
  const Healthy_foods = ["Sabzi", "Fruits", "Nuts", "Dairy", "Grains"];
  // const Healthy_foods = [];
  return (
    <>
      {/* <React.Fragment> */}
      <AppName />
      <Message items={Healthy_foods} />
      <FoodItems items={Healthy_foods} />
      {/* </React.Fragment> */}
    </>
  );
}

export default App;
