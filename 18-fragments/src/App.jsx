import React, { useState } from "react";
import AppName from "./components/AppName";
import Message from "./components/Message";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import "./App.css";
import FoodInput from "./components/FoodInput";

function App() {
  const [Healthy_foods, setHealthy_foods] = useState([]);
  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newFoodItems = [...Healthy_foods, newFoodItem];
      setHealthy_foods(newFoodItems);
      event.target.value = "";
    }
  };
  return (
    <>
      <Container>
        <AppName />
        <FoodInput handleOnKeyDown={handleOnKeyDown} />
        <Message items={Healthy_foods} />
        <FoodItems items={Healthy_foods} />
      </Container>
    </>
  );
}

export default App;
