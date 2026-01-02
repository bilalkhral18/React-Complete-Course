import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import PostList from "./components/PostList";
import { useState } from "react";
function App() {
  const [activeoption, setactiveoption] = useState("Home");
  return (
    <>
      <div className="app-container">
        <Sidebar
          setactiveoption={setactiveoption}
          activeoption={activeoption}
        />
        <div className="content">
          <Header />
          <Form activeoption={activeoption} />
          <PostList activeoption={activeoption} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
