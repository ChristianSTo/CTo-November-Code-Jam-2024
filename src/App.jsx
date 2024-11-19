import { useState } from "react";
import Header from "../src/components/Header";

import Warmth from "../src/components/Warmth.jsx";
import Shelter from "../src/components/Shelter.jsx";
import Footer from "../src/components/Footer.jsx";
import FoodSection from "./components/Food.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Shelter />
      <Warmth />
      <FoodSection />
      <Footer />
    </>
  );
}

export default App;
