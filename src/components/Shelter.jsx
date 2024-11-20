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
    backgroundColor: "#4F000B",
  });
  const [tab, setTab] = useState("Why");
  const handleOnClick = (name) => {
    if (name === "Why") {
      setScreenStyle({
        backgroundColor: "#4F000B",
      });
      setTab("Why");
    }
    if (name === "How") {
      setScreenStyle({
        backgroundColor: "#CE4257",
      });
      setTab("How");
    }
    if (name === "Where") {
      setScreenStyle({
        backgroundColor: "#FF7F51",
      });
      setTab("Where");
    }
  };

  return (
    <section className="shelter">
      <div className="shelter__container">
        <div className="shelter__intro">
          <h2 className="shelter__title title">Sheltering the Community</h2>
        </div>

        <div className="shelter__box">
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

          {/* <div className="shelter__body"> */}
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
                  In the spirit of giving, this is the best time to start the
                  habit of lending a hand to the homeless. Once the habit gets a
                  running start, it can persist throughout the year and even
                  your life. It will eventually build up and make a difference
                  in the lives of everyone including yourself.
                  <br></br>
                  <br></br>
                  Everyone will become healthier, safer, and more thankful for
                  what you have done to help.
                </p>
              </div>
            ) : tab === "How" ? (
              <div className="shelter__info">
                <p className="shelter__info-title">How to Help</p>
                <p className="shelter__info-paragraph">
                  Let's strengthen our community by uplifting the homeless. If
                  you are capable, you can donate to shelters and help fund
                  efforts to expand the charities that protect and make the
                  community a warmer and more welcoming place, allowing all
                  people to eventually be connected with one another.
                  <br></br>
                  <br></br>
                  If you are not able to donate, at the very least, you can
                  raise awareness and influence others to help.
                </p>
              </div>
            ) : (
              <div className="shelter__info">
                <p className="shelter__info-title">Where to Help</p>
                <p className="shelter__info-paragraph">
                  There are numerous locations and organizations where you are
                  able to make a difference. Churches, community centers, and
                  other organizations at local, national, and global levels are
                  available. You just need a heart to search.
                  <br></br>
                  <br></br>
                  Let's cheer each other on this Thanksgiving!
                </p>
              </div>
            )}
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}

export default Shelter;
