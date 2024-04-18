import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Err from "./components/Err";
import FoodInput from "./components/FoodInput";
import Fooditems from "./components/Fooditems";

function App() {
  let [foodItems, setFoodItems] = useState([]);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newFoodItems = [...foodItems, newFoodItem];
      setFoodItems(newFoodItems);
      console.log(newFoodItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="heading">Healthy Food</h1>
        <FoodInput handleKeyDown={handleKeyDown}></FoodInput>
        <Err items={foodItems}></Err>
        <Fooditems items={foodItems}></Fooditems>
      </Container>
    </>
  );
}

export default App;
