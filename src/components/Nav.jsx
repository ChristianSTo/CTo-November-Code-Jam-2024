import "../blocks/Nav.css";
import helpingHand from "../assets/handNavLogo.png";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__container">
        <img
          src={helpingHand}
          alt="Project Helping Hand logo"
          className="nav__logo"
        />

        <ul className="nav__links">
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
