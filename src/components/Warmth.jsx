import { useState, useRef } from "react";
import {
  chicagoSrc,
  newYorkSrc,
  losAngelesSrc,
  houstonSrc,
  phoenixSrc,
} from "../utils/constants.js";

import "../blocks/Warmth.css";

function Warmth({ onCityChange }) {
  const [mapSource, setMapSource] = useState(chicagoSrc);

  const currentSelect = useRef(null);

  const handleOnChange = () => {
    const city = currentSelect.current.value; // Define the city variable
    if (city === "newyork") {
      setMapSource(newYorkSrc);
      onCityChange("newyork");
    }
    if (city === "chicago") {
      setMapSource(chicagoSrc);
      onCityChange("chicago");
    }
    if (city === "losangeles") {
      setMapSource(losAngelesSrc);
      onCityChange("losangeles");
    }
    if (city === "houston") {
      setMapSource(houstonSrc);
      onCityChange("houston");
    }
    if (city === "phoenix") {
      setMapSource(phoenixSrc);
      onCityChange("phoenix");
    }
  };

  return (
    <section className="warmth" id="clothes">
      <div className="warmth__container">
        <div className="warmth__info">
          <h2 className="warmth__title title">Keeping the Community Warm</h2>

          <p className="warmth__description">
            Find locations for clothing donations!
          </p>
          <iframe
            title="Map of clothes donation centers"
            className="warmth__map"
            src={mapSource}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <form className="warmth__filter-form">
            <label htmlFor="cities" className="warmth__label">
              Select Your City:
            </label>
            <select
              className="warmth__location-select"
              id="cities"
              name="cities"
              onChange={handleOnChange}
              ref={currentSelect}
            >
              <option className="warmth__option" value="chicago">
                Chicago
              </option>
              <option className="warmth__option" value="newyork">
                New York
              </option>
              <option className="warmth__option" value="losangeles">
                Los Angeles
              </option>
              <option className="warmth__option" value="houston">
                Houston
              </option>
              <option className="warmth__option" value="phoenix">
                Phoenix
              </option>
            </select>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Warmth;
