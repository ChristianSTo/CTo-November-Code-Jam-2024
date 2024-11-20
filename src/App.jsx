import { useState } from "react";
import Header from "../src/components/Header";
import Warmth from "../src/components/Warmth.jsx";
import Shelter from "../src/components/Shelter.jsx";
import Footer from "../src/components/Footer.jsx";
import FoodSection from "./components/Food.jsx";

import "./App.css";
import About from "../src/components/About.jsx";
import Organization from "../src/components/Organization.jsx";

function App() {
  const [selectedCity, setSelectedCity] = useState("chicago");

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };
  return (
    <div className="app">
      <Header />
      <About />
      <Shelter />
      <Warmth onCityChange={handleCityChange} />
      <FoodSection selectedCity={selectedCity} />
      <Organization />
      <Footer />
    </div>
  );
}

export default App;
