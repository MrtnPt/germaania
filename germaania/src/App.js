import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import NavbarHook from "./navbarhook/NavbarHook";
import Home from "./pages/Start";
import AboutMe from "./pages/Rolam";
import Prices from "./pages/Arak";
import Contact from "./pages/Kapcsolat";
import Heading from "./heading/Heading";

const App = () => {
  return (
    <div className="container-fluid">
      <Router>
        <div className="row">
          <div className="col-xl-2 col-md-1 col-sm-0"></div>
          <div className="col-xl-8 col-md-10 col-12">
            <Heading />
            <NavbarHook />
          </div>
          <div className="col-xl-2 col-md-1 col-sm-0"></div>
        </div>
        <main className="row">
          <div className="col-xl-2 col-md-1 col-sm-0"></div>
          <div className="col-xl-8 col-md-10 col-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rolam" element={<AboutMe />} />
              <Route path="/arak" element={<Prices />} />
              <Route path="/kapcsolat" element={<Contact />} />
            </Routes>
          </div>
          <div className="col-xl-2 col-md-1 col-sm-0"></div>
        </main>

      </Router>
    </div>
  );
}

export default App;
