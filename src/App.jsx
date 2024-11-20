import Header from "../src/components/Header";
import Warmth from "../src/components/Warmth.jsx";
import Shelter from "../src/components/Shelter.jsx";
import Footer from "../src/components/Footer.jsx";
import FoodSection from "./components/Food.jsx";

import "./App.css";
import About from "../src/components/About.jsx";
import Organization from "../src/components/Organization.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Shelter />
      <Warmth />
      <FoodSection />
      <Organization />
      <Footer />
    </div>
  );
}

export default App;
