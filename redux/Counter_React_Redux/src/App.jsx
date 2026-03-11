import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Heading from "./components/Heading/Heading";
import ReadOnlyInput from "./components/ReadOnlyInput/ReadOnlyInput";
import Buttons from "./components/Buttons";
function App() {
  return (
    <div className="app-container">
      <Heading />
      <ReadOnlyInput />
     
      <Buttons />
    </div>
  );
}

export default App;
