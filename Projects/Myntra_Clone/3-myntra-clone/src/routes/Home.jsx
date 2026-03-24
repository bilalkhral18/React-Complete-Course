import HomeItem from "../components/HomeItem";
import { useSelector, useDispatch } from "react-redux";
const Home = () => {
  const items = useSelector((store) => store.items[0]);
  // const newItems = useSelector((store) => store.items);
  return (
    <main>
      <div className="items-container">
        for (const item of items){" "}
        {Home.push(<HomeItem key={item.id} item={item} />)}
      </div>
    </main>
  );
};
export default Home;
