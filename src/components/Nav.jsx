import "../blocks/Nav.css";
import helpingHand from "../assets/goodHand.svg";

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
            <a href="#clothing" className="nav__link">
              Clothing
            </a>
          </li>
          <li>
            <a href="#pantries" className="nav__link">
              Pantries
            </a>
          </li>
          <li>
            <a href="#shelters" className="nav__link">
              Shelters
            </a>
          </li>
          <li>
            <a href="#about" className="nav__link">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
