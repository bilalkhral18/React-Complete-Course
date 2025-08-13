import React from "react";
import AppName from "./components/AppName";
import Message from "./components/Message";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import "./App.css";
import FoodInput from "./components/FoodInput";

function App() {
  const Healthy_foods = ["Sabzi", "Fruits", "Nuts", "Dairy", "Grains"];
  let texttoshow = "Text Enter By the User";
  const handleOnChange = (event) => {
    console.log(event.target.value);
    texttoshow = event.target.value;
  };
  return (
    <>
      <Container>
        <AppName />
        <FoodInput handleOnChange={handleOnChange} />
        <p>{texttoshow}</p>
        <Message items={Healthy_foods} />
        <FoodItems items={Healthy_foods} />
      </Container>
      {/* <Container>
        <p>
          Above is the list of all the healthy foods that we have to consume in
          a day time
        </p>
      </Container> */}
    </>
  );
}

export default App;
