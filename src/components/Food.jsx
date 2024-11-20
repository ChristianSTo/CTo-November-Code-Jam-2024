import React, { useState } from "react";
import "../blocks/Food.css";

function FoodSection() {
  const resources = [
    {
      id: 1,
      name: "Thanksgiving Food Drive",
      description: "Special meals and groceries for families this season.",
      location: "123 Elm Street",
      contact: "555-1234",
      hours: "Mon-Fri: 9 AM - 5 PM",
    },
    {
      id: 2,
      name: "Holiday Soup Kitchen",
      description: "Hot Thanksgiving meals served daily for those in need.",
      location: "456 Maple Avenue",
      contact: "555-5678",
      hours: "Everyday: 11 AM - 7 PM",
    },
    {
      id: 3,
      name: "Harvest Feast Fridays",
      description: "Free produce and pies for the holiday season.",
      location: "789 Oak Blvd",
      contact: "555-8765",
      hours: "Fridays: 8 AM - 12 PM",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % resources.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + resources.length) % resources.length
    );
  };

  return (
    <section className="food">
      <div className="food__container">
        {/* Left side: Card Carousel */}
        <div className="food__carousel">
          <button
            className="food__button food__button-prev"
            onClick={handlePrevious}
          >
            &#9664;
          </button>

          <div className="food__card">
            <h3 className="food__resource-name">
              {resources[currentIndex].name}
            </h3>
            <p className="food__resource-description">
              {resources[currentIndex].description}
            </p>
            <p className="food__resource-location">
              <strong>Location:</strong> {resources[currentIndex].location}
            </p>
            <p className="food__resource-contact">
              <strong>Contact:</strong> {resources[currentIndex].contact}
            </p>
            <p className="food__resource-hours">
              <strong>Hours:</strong> {resources[currentIndex].hours}
            </p>
          </div>

          <button
            className="food__button food__button-next"
            onClick={handleNext}
          >
            &#9654;
          </button>
        </div>

        {/* Right side: Title and Subtitle */}
        <div className="food__details">
          <div className="food__intro">
            <h2 className="food__title title">
              Feeding <br />
              the <br /> Community
            </h2>
            <p className="food__subtitle">
              Celebrate Thanksgiving by connecting with local food resources and
              spreading joy!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoodSection;
