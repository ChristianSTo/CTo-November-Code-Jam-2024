import { useState, useRef } from "react";
import {
  chicagoSrc,
  newYorkSrc,
  losAngelesSrc,
  houstonSrc,
  phoenixSrc,
} from "../utils/constants.js";

import "../blocks/Warmth.css";

function Warmth() {
  const [mapSource, setMapSource] = useState(chicagoSrc);

  const currentSelect = useRef(null);

  const handleOnChange = () => {
    if (currentSelect.current.value === "newyork") {
      setMapSource(newYorkSrc);
    }
    if (currentSelect.current.value === "chicago") {
      setMapSource(chicagoSrc);
    }
    if (currentSelect.current.value === "losangeles") {
      setMapSource(losAngelesSrc);
    }
    if (currentSelect.current.value === "houston") {
      setMapSource(houstonSrc);
    }
    if (currentSelect.current.value === "phoenix") {
      setMapSource(phoenixSrc);
    }
  };

  return (
    <section className="warmth">
      <div className="warmth__container">
        <div className="warmth__info">
          <h2 className="warmth__title title">Keeping the Community Warm</h2>

          <p className="warmth__description">
            Find locations for clothing donations!
          </p>
          <iframe
            className="warmth__map"
            src={mapSource}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <form className="warmth_filter-form">
            <label htmlFor="cities" className="warmth__label">
              Major City:
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
