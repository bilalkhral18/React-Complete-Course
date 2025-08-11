import Item from "./Item";
function FoodItems({ items }) {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </ul>
  );
}

export default FoodItems;
