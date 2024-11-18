import { useState } from "react";

import "./App.css";
import Warmth from "../src/components/Warmth.jsx";
import Shelter from "../src/components/Shelter.jsx";
import Footer from "../src/components/Footer.jsx";

function App() {
  return (
    <>
      <Shelter />
      <Warmth />
      <Footer />
    </>
  );
}

export default App;
