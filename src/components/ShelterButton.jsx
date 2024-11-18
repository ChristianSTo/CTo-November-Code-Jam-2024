import { useState, useEffect } from "react";

import "../blocks/ShelterButton.css";

function ShelterButton({ name, handleOnClick, color }) {
  const [buttonStyle, setButtonStyle] = useState({});

  // change the button color based on its name its parent's color in order to match
  useEffect(() => {
    if (name === "Why" && color === "Why") {
      setButtonStyle({
        backgroundColor: "#CC5A3D",
      });
    } else if (name === "How" && color === "How") {
      setButtonStyle({
        backgroundColor: "#833C62",
      });
    } else if (name === "Where" && color === "Where") {
      setButtonStyle({
        backgroundColor: "#7D2020",
      });
    } else {
      setButtonStyle({
        backgroundColor: "#fff",
      });
    }
  }, [name, color]);

  return (
    <button
      type="button"
      className="shelter-button"
      onClick={() => handleOnClick(name)}
      style={buttonStyle}
    >
      <p className="shelter-button__name">{name}</p>
    </button>
  );
}

export default ShelterButton;
