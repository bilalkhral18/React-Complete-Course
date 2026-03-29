import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import InitialItemsLoader from "../components/InitialItemsLoader";
import Spinner from "../components/Spinner";
import { useSelector } from "react-redux";
function App() {
  const { currentlyFetching } = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <InitialItemsLoader />
      {currentlyFetching ? <Spinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
