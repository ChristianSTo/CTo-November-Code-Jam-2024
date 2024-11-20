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
      </header>
    </>
  );
}

export default Header;
