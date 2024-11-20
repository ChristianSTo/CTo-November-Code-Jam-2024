import React, { useState, useEffect } from "react";
import "../blocks/Food.css";

function FoodSection({ selectedCity }) {
  const allResources = {
    chicago: [
      {
        id: 1,
        name: "Chicago Food Pantry",
        description: "Providing meals and groceries to those in need.",
        location: "123 Windy St",
        contact: "555-1111",
        hours: "Mon-Fri: 9 AM - 5 PM",
        link: "https://example.com/chicago-food-pantry",
      },
    ],
    newyork: [
      {
        id: 2,
        name: "New York Soup Kitchen",
        description: "Hot meals served daily in Manhattan.",
        location: "456 Broadway",
        contact: "555-2222",
        hours: "Everyday: 10 AM - 6 PM",
        link: "https://example.com/ny-soup-kitchen",
      },
    ],
    losangeles: [
      {
        id: 3,
        name: "Los Angeles Harvest Center",
        description: "Free food and groceries in LA.",
        location: "789 Sunset Blvd",
        contact: "555-3333",
        hours: "Weekdays: 8 AM - 4 PM",
        link: "https://example.com/la-harvest-center",
      },
    ],
    houston: [
      {
        id: 4,
        name: "Houston Helping Hands",
        description: "Groceries for the holidays in Houston.",
        location: "321 Space City Ave",
        contact: "555-4444",
        hours: "Weekends: 10 AM - 2 PM",
        link: "https://example.com/houston-helping-hands",
      },
    ],
    phoenix: [
      {
        id: 5,
        name: "Phoenix Community Kitchen",
        description: "Providing meals for Phoenix residents.",
        location: "654 Sun St",
        contact: "555-5555",
        hours: "Everyday: 9 AM - 6 PM",
        link: "https://example.com/phoenix-kitchen",
      },
    ],
  };

  const [resources, setResources] = useState([]);

  useEffect(() => {
    setResources(allResources[selectedCity] || []); // Update resources based on selectedCity
  }, [selectedCity]);

  return (
    <section className="food">
      <div className="food__container">
        {/* Left Side: Food Resources */}
        <div className="food__carousel">
          {resources.length > 0 ? (
            resources.map((resource) => (
              <div key={resource.id} className="food__card">
                <h3 className="food__resource-name">
                  {selectedCity.toUpperCase()}
                </h3>
                <p className="food__resource-description">
                  {resource.description}
                </p>
                <p className="food__resource-location">
                  <strong>Location:</strong> {resource.location}
                </p>
                <p className="food__resource-contact">
                  <strong>Contact:</strong> {resource.contact}
                </p>
                <p className="food__resource-hours">
                  <strong>Hours:</strong> {resource.hours}
                </p>
                <button
                  className="food__resource-button"
                  onClick={() => window.open(resource.link, "_blank")}
                >
                  More Info
                </button>
              </div>
            ))
          ) : (
            <p>No food resources available for {selectedCity}.</p>
          )}
        </div>

        {/* Right Side: Title and Subtitle */}
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
