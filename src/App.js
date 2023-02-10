import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textforms from "./Components/Textforms";
import React, { useState } from "react";
// import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert();
    }, 1500);
  };

  const toggle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#1c2648";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar title="Text Utlis" about="About Us" mode={mode} toggle={toggle} />
        {/* <Alert alert={alert} />

        <Routes>
          <Route exact path="/" element={<Textforms mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router> */}
      <Textforms mode={mode} showAlert={showAlert} />
    </>
  );
}

export default App;
