import headerLogo from "../assets/handHeartSymbol.svg";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <img
          src={headerLogo}
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
        ``
      </nav>

      <img
        src={headerLogo}
        alt="Project Helping Hand"
        className="header__image"
      />

      <h1 className="header__title">
        <span className="header__span-accent">Project Helping Hand</span>{" "}
        Leading a helping hand to our community
      </h1>

      <p className="header__description">
        Welcome! Project Helping Hand is a nonprofit organization that provides
        resources to Food Pantries, Free Clothing Stores, and Housing shelters
        across America. We care, and Strive to lend a helping hand.
      </p>

      <div className="header__footer">
        <div>
          <p className="header__paragraph">Hours:</p>
          <p className="header__paragraph">Monday-Friday (9:00am-5:00pm)</p>
          <p className="header__paragraph">Saturday-Sunday (9:00am-5:00pm)</p>
        </div>
        <p className="header__paragraph">
          200 Happylane Avenue, The Town of America
        </p>
      </div>
    </header>
  );
}

export default Header;
