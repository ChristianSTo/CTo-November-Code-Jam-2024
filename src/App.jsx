import { useState } from "react";
import Header from "../src/components/Header";

import Warmth from "../src/components/Warmth.jsx";
import Shelter from "../src/components/Shelter.jsx";
import Footer from "../src/components/Footer.jsx";

import "./App.css";
import About from "../src/components/About.jsx";
import Organization from "../src/components/Organization.jsx";

function App() {
  return (
    <>
      <Header />
      <About />
      <Shelter />
      <Warmth />
      <Organization />
      <Footer />
    </>
  );
}

export default App;
