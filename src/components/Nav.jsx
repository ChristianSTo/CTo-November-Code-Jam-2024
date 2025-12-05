import { useState } from "react";
import "../blocks/Nav.css";
import helpingHand from "../assets/heartLogo.svg";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuLinksStyle, setMenuLinksStyle] = useState({ display: "" });
  const menuHandler = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setMenuLinksStyle({ display: "flex" });
    } else {
      setIsMenuOpen(false);
      setMenuLinksStyle({ display: "none" });
    }
  };
  return (
    <nav className="nav">
      <div className="nav__container">
        <img
          src={helpingHand}
          alt="Project Helping Hand logo"
          className="nav__logo"
        />
        <button type="button" className="nav__hamburger" onClick={menuHandler}>
          ︾
        </button>
        <ul className="nav__links" style={menuLinksStyle}>
          <li>
            <a href="#about" className="nav__link">
              About
            </a>
          </li>
          <li>
            <a href="#shelters" className="nav__link">
              Shelters
            </a>
          </li>
          <li>
            <a href="#clothes" className="nav__link">
              Clothes
            </a>
          </li>
          <li>
            <a href="#food" className="nav__link">
              Food
            </a>
          </li>
          <li>
            <a href="#organizations" className="nav__link">
              Organizations
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
