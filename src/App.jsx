import Header from "../src/components/Header";
import Warmth from "../src/components/Warmth.jsx";
import Shelter from "../src/components/Shelter.jsx";
import Footer from "../src/components/Footer.jsx";
import FoodSection from "./components/Food.jsx";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Shelter />
      <Warmth />
      <FoodSection />
      <Footer />
    </div>
  );
}

export default App;
