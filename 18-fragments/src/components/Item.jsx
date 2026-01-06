import styles from "./Item.module.css";
function Item({ item, bought, handleBuy }) {
  return (
    <li
      classNameName={`list-group-item ${styles["kg-item"]} ${
        bought && "active"
      }`}
    >
      <span classNameName={styles["kg-span"]}>{item}</span>
      <button
        type="button"
        classNameName={`btn btn-info ${styles.button}`}
        onClick={handleBuy}
      >
        Buy
      </button>
    </li>
  );
}

export default Item;
