import headerLogo from "../assets/Icon-Only-Color.svg";
import Nav from "./Nav";
import "../blocks/Header.css";
import headerBck from "../assets/Screenshot 2024-11-19 232800.png";

function Header() {
  return (
    <>
      <Nav />
      <header className="header">
        <h1 className="header__title title">
          <span className="header__span-accent">Helping the Community</span>{" "}
        </h1>

        <p className="header__description">
          Welcome! Project Helping Hand is a nonprofit organization that
          provides resources to Food Pantries, Free Clothing Stores, and Housing
          shelters across America. We care, and Strive to lend a helping hand.
        </p>
      </header>
    </>
  );
}

export default Header;
