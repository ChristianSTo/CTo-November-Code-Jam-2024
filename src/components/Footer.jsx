import "../blocks/Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <p className="footer__title"> Meet the Helping Hands</p>

        <div className="footer__links">
          <a className="footer__link" href="https://github.com/ajuarezse">
            Angel
          </a>
          <a className="footer__link" href="https://github.com/ChristianSTo">
            Christian
          </a>
          <a className="footer__link" href="https://github.com/lu-guzman">
            Luci
          </a>
          <a className="footer__link" href="https://github.com/Maurice284">
            Maurice
          </a>
        </div>
        <p className="footer__copyright">&copy; 2024 Project Helping Hands</p>
      </div>
    </section>
  );
}

export default Footer;
