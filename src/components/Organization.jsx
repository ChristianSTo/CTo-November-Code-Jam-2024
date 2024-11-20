import "../blocks/Organization.css";
import unitedWayLogo from "../assets/unitedWayLogo.png";
import goodWillLogo from "../assets/goodWillLogo.png";
import salvationArmyLogo from "../assets/salvationArmyLogo.png";
import noKidHungryLogo from "../assets/noKidHungryLogo.jpeg";

function Organization() {
  return (
    <>
      <section className="organization">
        <h2 className="organization__title">Nationwide Organizations</h2>
        <ul className="organization__lists">
          <li className="organization__list-item">
            <a
              href="https://www.salvationarmyusa.org/usn/"
              target="_blank"
              className="organization__list-item_link"
            >
              <img
                src={salvationArmyLogo}
                alt="los angeles food icon"
                className="organization__list-item_icon"
              />
              Salvation Army
            </a>
          </li>
          <li className="organization__list-item">
            <a
              href="https://www.goodwill.org/"
              target="_blank"
              className="organization__list-item_link"
            >
              <img
                src={goodWillLogo}
                alt="arizona food icon"
                className="organization__list-item_icon"
              />
              GoodWill
            </a>
          </li>
          <li className="organization__list-item">
            <a
              href="https://www.unitedway.org/"
              target="_blank"
              className="organization__list-item_link"
            >
              <img
                src={unitedWayLogo}
                alt="arizona food icon"
                className="organization__list-item_icon"
              />
              United Way World wide
            </a>
          </li>
          <li className="organization__list-item">
            <a
              href="https://www.nokidhungry.org/"
              target="_blank"
              className="organization__list-item_link"
            >
              <img
                src={noKidHungryLogo}
                alt="los angeles food icon"
                className="organization__list-item_icon"
              />
              No Kid Hungry
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
export default Organization;
