import styles from "./Buttons.module.css";
function Buttons({ buttonsarr }) {
  return (
    <div className={`${styles["buttons-container"]}`}>
      {buttonsarr.map((item, index) => {
        return (
          <button className={styles.button} key={index}>
            {item}
          </button>
        );
      })}
    </div>
  );
}
export default Buttons;
