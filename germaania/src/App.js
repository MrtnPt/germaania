import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarHook from "./navbarhook/NavbarHook";

import Heading from "./heading/Heading";

// PAGES
import Home from "./pages/Kezdolap";
import AboutMe from "./pages/Rolam";
import Prices from "./pages/Arak";
import Contact from "./pages/Kapcsolat";
import Footer from "./footer/Footer";

window.BRAND_FULL_NAME = 'GerMánia';
window.BRAND_SLOGAN = 'eredményesen németül';


const App = () => {
  return (
      <div className="wrapper col-xl-8 col-lg-10 col-md-12">
        <Router basename='/germaania'>
          <div className="row">
            <header className='col-12'>
              <Heading />
              <NavbarHook />
            </header>
          </div>
          <main className="row">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rolam" element={<AboutMe />} />
              <Route path="/arak" element={<Prices />} />
              <Route path="/kapcsolat" element={<Contact />} />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </Router>
      </div>
  );
}

export default App;
