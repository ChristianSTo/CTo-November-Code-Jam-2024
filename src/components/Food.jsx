import React, { useState, useEffect } from "react";
import "../blocks/Food.css";

function FoodSection({ selectedCity }) {
  const allResources = {
    chicago: [
      {
        id: 1,
        name: "Greater Chicago Food Depository",
        description:
          "We strive to end hunger by connecting our neighbors with healthy food and advancing solutions that address the root causes of hunger.",
        location: "4100 W Ann Lurie Pl, Chicago, IL 60632",
        contact: "(773) 247-3663",
        hours: "Mon-Fri: 8:30 AM - 5 PM",
        link: "https://www.chicagosfoodbank.org/",
      },
    ],
    newyork: [
      {
        id: 2,
        name: "Food Bank For New York City - Community Kitchen & Food Pantry",
        description:
          "As the city's largest hunger-relief organization, our mission is to end hunger by organizing food, information and support for community survival and ...",
        location: "252 W 116th St, New York, NY 10026",
        contact: "(212) 566-7855",
        hours: "M/W/F 4 PM - 6 PM, T/Th 11 AM - 3:30 PM",
        link: "https://www.foodbanknyc.org/",
      },
    ],
    losangeles: [
      {
        id: 3,
        name: "Los Angeles Regional Food Bank",
        description:
          "Give to the LA Food Bank — Fight Hunger in LA County. Your gift today is vital to distributing food to our neighbors. Your donation today will help us to continue our work and provide food to your neighbors.",
        location: "2300 Pellissier Pl, City of Industry, CA 90601",
        contact: "(323) 234-3030",
        hours: "Mon-Fri: 8 AM - 5 PM",
        link: "https://www.lafoodbank.org/",
      },
    ],
    houston: [
      {
        id: 4,
        name: "Houston Food Bank",
        description:
          "Houston Food Bank ... America's largest food bank in distribution leading hunger relief in 18 southeast Texas counties",
        location: " 535 Portwall St, Houston, TX 77029",
        contact: "(713) 223-3700",
        hours: "Mon-Sat: 8 AM - 5 PM",
        link: "https://www.houstonfoodbank.org/",
      },
    ],
    phoenix: [
      {
        id: 5,
        name: "Nourish Phoenix",
        description:
          "We need help daily in our clothing closet, sorting room and food pantry! Register today for a morning or afternoon shift, Monday-Friday. Volunteer Now ...",
        location: "501 S 9th Avenue, Phoenix, AZ 85007",
        contact: "(602) 254-7450",
        hours: "Everyday: 9 AM - 11 AM",
        link: "https://nourishphx.org/",
      },
    ],
  };

  const [resources, setResources] = useState([]);

  useEffect(() => {
    setResources(allResources[selectedCity] || []); // Update resources based on selectedCity
  }, [selectedCity]);

  return (
    <section className="food" id="food">
      <div className="food__container">
        {/* Left Side: Food Resources */}
        <div className="food__carousel">
          {resources.length > 0 ? (
            resources.map((resource) => (
              <div key={resource.id} className="food__card">
                <h3 className="food__resource-name">{resource.name}</h3>
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
              {selectedCity.toUpperCase()}
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
