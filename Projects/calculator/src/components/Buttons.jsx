import styles from "./Buttons.module.css";
function Buttons({ buttonsarr, handleIndividualButtonClick }) {
  return (
    <div className={`${styles["buttons-container"]}`}>
      {buttonsarr.map((item, index) => {
        return (
          <button
            className={styles.button}
            key={index}
            onClick={(event) => handleIndividualButtonClick(event)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
export default Buttons;
