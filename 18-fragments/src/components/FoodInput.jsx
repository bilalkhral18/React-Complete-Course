import styles from "./FoodInput.module.css";
function FoodInput({ handleOnKeyDown }) {
  return (
    <input
      type="text"
      placeholder="Enter food item here"
      className={`${styles.foodinput}`}
      onKeyDown={handleOnKeyDown}
    />
  );
}
export default FoodInput;
