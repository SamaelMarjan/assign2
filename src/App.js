import React from "react";
import About from "./components/About";
import Home from "./components/Home";

import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Teachers from "./components/Teachers";
import Footer from '../src/components/Footer';

function App() {
  return (
    <div className="fit-screen relative">
      <Navbar />
      <Home />
      <About />
      <Teachers />
      <Footer />
      <Logo />
    </div>
  );
}

export default App;
