import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import PostList from "./components/PostList";
import PostListStoreProvider from "./context/Post-list-store";
import { useState } from "react";
function App() {
  const [activeoption, setactiveoption] = useState("Home");
  return (
    <>
      <PostListStoreProvider>
        <div className="app-container">
          <Sidebar
            setactiveoption={setactiveoption}
            activeoption={activeoption}
          />
          <div className="content">
            <Header />
            {/* {activeoption === "Home" ? (
              <PostList activeoption={activeoption} />
            ) : (
              <Form activeoption={activeoption} />
            )} */}
            <Outlet />
            <Footer />
          </div>
        </div>
      </PostListStoreProvider>
    </>
  );
}

export default App;
