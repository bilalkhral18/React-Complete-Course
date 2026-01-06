import { useState } from "react";
import Item from "./Item";
function FoodItems({ items }) {
  const [activeItems, setActiveItems] = useState([]);
  const onBuy = (index, item) => {
    setActiveItems((prev) => [...prev, index]);
  };
  return (
    <ul classNameName="list-group">
      {items.map((item, index) => (
        <Item
          key={index}
          item={item}
          bought={activeItems.includes(index)}
          handleBuy={() => onBuy(index, item)}
        />
      ))}
    </ul>
  );
}

export default FoodItems;
