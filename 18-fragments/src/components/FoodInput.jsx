import styles from "./FoodInput.module.css";
function FoodInput({ handleOnChange }) {
  return (
    <input
      type="text"
      placeholder="Enter food item here"
      className={`${styles.foodinput}`}
      onChange={handleOnChange}
    />
  );
}
export default FoodInput;
