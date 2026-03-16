import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Heading from "./components/Heading/Heading";
import ReadOnlyInput from "./components/ReadOnlyInput/ReadOnlyInput";
import Buttons from "./components/Buttons";
import { useSelector } from "react-redux";
import HideMessage from "./components/HideMessage";
function App() {
  const privacy_Toggle = useSelector((store) => store.privacyToggle);
  return (
    <div className="app-container">
      <Heading />
      {privacy_Toggle ? <HideMessage /> : <ReadOnlyInput />}
      <Buttons />
    </div>
  );
}

export default App;
