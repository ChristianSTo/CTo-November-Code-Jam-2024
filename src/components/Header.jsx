import headerLogo from "../assets/handHeartSymbol.svg";

function Header() {
  return (
    <header class="header">
      <nav class="nav">
        <img
          src={headerLogo}
          alt="Project Helping Hand logo"
          class="nav__logo"
        />

        <ul class="nav__links">
          <li>
            <a href="#clothing" class="nav__link">
              Clothing
            </a>
          </li>
          <li>
            <a href="#pantries" class="nav__link">
              Pantries
            </a>
          </li>
          <li>
            <a href="#shelters" class="nav__link">
              Shelters
            </a>
          </li>
          <li>
            <a href="#about" class="nav__link">
              About
            </a>
          </li>
        </ul>
      </nav>

      <img src="" alt="Project Helping Hand" class="header__image" />

      <h1 class="header__title">
        <span class="header__span-accent">Project Helping Hand</span> Leading a
        helping hand to our community
      </h1>

      <p class="header__description">
        Welcome! Project Helping Hand is a nonprofit organization that provides
        resources to Food Pantries, Free Clothing Stores, and Housing shelters
        across America. We care, and Strive to lend a helping hand.
      </p>

      <div class="header__footer">
        <div>
          <p class="header__paragraph">Hours:</p>
          <p class="header__paragraph">Monday-Friday (9:00am-5:00pm)</p>
          <p class="header__paragraph">Saturday-Sunday (9:00am-5:00pm)</p>
        </div>
        <p class="header__paragraph">
          200 Happylane Avenue, The Town of America
        </p>
      </div>
    </header>
  );
}

export default Header;
