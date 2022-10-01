import React from "react";

import Logo from "./components/Logo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="fit-screen relative">
      <Navbar />
      <Logo />
    </div>
  );
}

export default App;
