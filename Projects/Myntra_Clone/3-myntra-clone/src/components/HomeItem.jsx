import { useDispatch, useSelector } from "react-redux";
import { bagSliceActions } from "../store/bagSlice";
import { IoMdAddCircle } from "react-icons/io";
import { RiDeleteBin3Fill } from "react-icons/ri";
const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bag = useSelector((store) => store.bag);
  const handleAddToBag = () => {
    dispatch(bagSliceActions.addToBag(item.id));
  };
  const handleRemoveFromBag = () => {
    dispatch(bagSliceActions.removeFromBag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item?.rating?.stars} ⭐ | {item?.rating?.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {bag.includes(item.id) ? (
        <button
          onClick={handleRemoveFromBag}
          type="button"
          class="btn-add-bag"
          style={{ backgroundColor: "#ba1111", color: "white" }}
        >
          <RiDeleteBin3Fill className="addRemoveItems" /> Remove
        </button>
      ) : (
        <button className="btn-add-bag" onClick={handleAddToBag}>
          <IoMdAddCircle className="addRemoveItems" /> Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
