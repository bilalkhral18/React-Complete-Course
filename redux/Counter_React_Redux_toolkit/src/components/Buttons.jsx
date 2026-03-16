import { useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions } from "../store/counter";
import InputContainer from "../components/InputContainer/InputContainer";
import { privacyToggleActions } from "../store/privacy";
function Buttons() {
  const dispatch = useDispatch();
  let numberEl = useRef();
  const handlePrivacyToggle = () => {
    dispatch(privacyToggleActions.toggleVal());
  };
  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAddition = () => {
    const number = Number(numberEl.current.value);
    dispatch(counterActions.add(number));
    numberEl.current.value = "";
  };

  const handleSubtraction = () => {
    const number = Number(numberEl.current.value);
    dispatch(counterActions.subtract(number));
    numberEl.current.value = "";
  };

  return (
    <>
      <div className="buttons-container">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>

      <div className="input_add_sub">
        <InputContainer ref={numberEl} />
        <button type="button" className="btn btn-info" onClick={handleAddition}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtraction}
        >
          Subtract
        </button>
      </div>
    </>
  );
}

export default Buttons;
