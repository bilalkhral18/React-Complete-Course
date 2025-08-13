import styles from "./Item.module.css";
function Item({ item, handleBuyButton }) {
  return (
    <li
      onClick={handleBuyButton}
      className={`list-group-item ${styles["kg-item"]}`}
    >
      <span className={styles["kg-span"]}>{item}</span>
      <button type="button" className={`btn btn-info ${styles.button}`}>
        Buy
      </button>
    </li>
  );
}
export default Item;
