import Item from "./Item";
function FoodItems({ items }) {
  // const handleBuyButton = (event, item) => {
  //   console.log(`${item} being bought`);
  // };
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <Item
          key={index}
          item={item}
          handleBuyButton={() => console.log(`${item} bought`)}
        />
      ))}
    </ul>
  );
}

export default FoodItems;
