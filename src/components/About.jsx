import "../blocks/About.css";
import aboutImage from "../assets/aboutImage.jpg";

function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="about__container">
          <p className="about__info">
            Welcome! Project Helping Hand is a nonprofit organization that
            provides resources to Food Pantries, Free Clothing Stores, and
            Housing shelters across America. We care, and Strive to lend a
            helping hand. We believe in the power of community and the warmth
            that comes from helping one another. We are dedicated to connecting
            families and individuals with the resources they need, all over the
            country. Whether it's finding food, a warm meal, or housing support,
            we work closely with churches, community centers, and other local
            organizations to lend a helping hand. This Thanksgiving week, we are
            especially focused on making sure every family has access to the
            support and resources they need. Our goal is simple: to give back
            and bring our community closer together by ensuring no one goes
            without the essentials during this special time of year. Together,
            we can make a difference.
          </p>
        </div>
      </section>
    </>
  );
}
export default About;
