import { useDispatch } from "react-redux";
import { useRef } from "react";

import InputContainer from "../components/InputContainer/InputContainer";

function Buttons() {
  const dispatch = useDispatch();
  let numberEl = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAddition = () => {
    const number = Number(numberEl.current.value);
    dispatch({ type: "ADDITION", payload: { number } });
    numberEl.current.value = " ";
  };

  const handleSubtraction = () => {
    const number = Number(numberEl.current.value);
    dispatch({ type: "SUBTRACTION", payload: { number } });
    numberEl.current.value = " ";
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
