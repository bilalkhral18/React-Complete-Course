import BagItems from "../components/BagItems";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";
const Bag = () => {
  const allItems = useSelector((store) => store.items);
  const bagIds = useSelector((store) => store.bag);
  const items = allItems.filter((item) => bagIds.includes(item.id));
  console.log(items);
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {items.map((item) => (
            <BagItems item={item} />
          ))}
        </div>
        <BagSummary items={items} />
      </div>
    </main>
  );
};
export default Bag;
