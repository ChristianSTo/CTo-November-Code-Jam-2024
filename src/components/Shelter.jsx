import { useState } from "react";

import "../blocks/Shelter.css";
import ShelterButton from "./ShelterButton.jsx";
import holdingPumpkin from "../assets/johannes-hofmann-6Jfyr6Ihiq0-unsplash.jpg";
import homeless from "../assets/rio-space-zjgcXYZQ_e4-unsplash.jpg";
import celebratingPeople from "../assets/william-krause-aSwigmwLS8A-unsplash.jpg";
function Shelter() {
  //make a names array with relevant name.
  const names = ["Why", "How", "Where"];
  //make an array the length of the names array and have the elements null for it to be blank,
  //so we can fill it up later with components
  const cards = new Array(names.length).fill(null);

  //update the color based on the clicked state
  const [screenStyle, setScreenStyle] = useState({
    backgroundColor: "#CC5A3D",
  });
  const [tab, setTab] = useState("Why");
  const handleOnClick = (name) => {
    if (name === "Why") {
      setScreenStyle({
        backgroundColor: "#CC5A3D",
      });
      setTab("Why");
    }
    if (name === "How") {
      setScreenStyle({
        backgroundColor: "#833C62",
      });
      setTab("How");
    }
    if (name === "Where") {
      setScreenStyle({
        backgroundColor: "#7D2020",
      });
      setTab("Where");
    }
  };

  return (
    <section className="shelter">
      <h2 className="shelter__title title">Sheltering the Community</h2>
      <ul className="shelter__grid">
        <li className="shelter__buttons">
          {/* map the blank cards array with the card component(s), which will receive its name */}
          {cards.map((_, index) => (
            <ShelterButton
              key={index}
              name={names[index]}
              handleOnClick={handleOnClick}
              color={tab}
            />
          ))}
        </li>
      </ul>
      <div className="shelter__container">
        <div className="shelter__screen" style={screenStyle}>
          {tab === "Why" ? (
            <img
              className="shelter__image"
              src={homeless}
              alt="a homeless structure"
            ></img>
          ) : tab === "How" ? (
            <img
              className="shelter__image "
              src={holdingPumpkin}
              alt="hands holding pumpkin"
            ></img>
          ) : (
            <img
              className="shelter__image"
              src={celebratingPeople}
              alt="people celebrating in the sun"
            ></img>
          )}
          {tab === "Why" ? (
            <div className="shelter__info">
              <p className="shelter__info-title">Why Help</p>
              <p className="shelter__info-paragraph">
                In the spirit of giving,
              </p>
            </div>
          ) : tab === "How" ? (
            <div className="shelter__info">
              <p className="shelter__info-title">How to Help</p>
            </div>
          ) : (
            <div className="shelter__info">
              <p className="shelter__info-title">Where to Help</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Shelter;
