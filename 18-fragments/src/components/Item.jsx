import styles from "./Item.module.css";
function Item({ item, bought, handleBuy }) {
  return (
    <li
      className={`list-group-item ${styles["kg-item"]} ${bought && "active"}`}
    >
      <span className={styles["kg-span"]}>{item}</span>
      <button
        type="button"
        className={`btn btn-info ${styles.button}`}
        onClick={handleBuy}
      >
        Buy
      </button>
    </li>
  );
}

export default Item;
