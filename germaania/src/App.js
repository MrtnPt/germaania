import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import NavbarHook from "./NavbarHook/NavbarHook";
import Home from "./pages/Start";
import AboutMe from "./pages/Rolam";
import Prices from "./pages/Arak";
import Contact from "./pages/Kapcsolat";


const App = () => {
  return  (
    <Router>
      <NavbarHook />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rolam" element={<AboutMe />} />
          <Route path="/arak" element={<Prices />} />
          <Route path="/kapcsolat" element={<Contact />} />
        </Routes>

      </main>
    </Router>
  );
}

export default App;
