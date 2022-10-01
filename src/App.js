import React from "react";
import About from "./components/About";
import Home from "./components/Home";

import Logo from "./components/Logo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="fit-screen relative">
      <Navbar />
      <Home />
      <About />
      <Logo />
    </div>
  );
}

export default App;
