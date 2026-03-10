import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Heading from "./components/Heading/Heading";
import ReadOnlyInput from "./components/ReadOnlyInput/ReadOnlyInput";
import InputContainer from "./components/InputContainer/InputContainer";
import Buttons from "./components/Buttons";
function App() {
  return (
    <>
      <Heading />
      <ReadOnlyInput />
      <InputContainer />
      <Buttons />
    </>
  );
}

export default App;
