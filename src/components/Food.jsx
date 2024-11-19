import React from "react";
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

  return (
    <section className="food">
      <h2 className="food__title title">Feeding the community</h2>
      <p className="food__subtitle">
        Celebrate Thanksgiving by connecting with local food resources and
        spreading joy!
      </p>
      <ul className="food__resources">
        {resources.map((resource) => (
          <li key={resource.id} className="food__resource-card">
            <h3 className="food__resource-name">{resource.name}</h3>
            <p className="food__resource-description">{resource.description}</p>
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
              onClick={() =>
                alert(`You clicked on ${resource.name}! Happy Thanksgiving!`)
              }
            >
              More Info
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FoodSection;
