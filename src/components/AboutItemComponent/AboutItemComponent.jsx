// src/components/AboutItemComponent/AboutItemComponent.jsx
import React from 'react';
import './AboutItemComponent.scss';

const AboutItemComponent = () => {
  const itemDetails = {
    responsibility: "Seller assumes all responsibility for this listing.",
    itemNumber: "387531456033",
    lastUpdated: "Oct 24, 2024 06:45:21 PDT",
    specifics: [
      { label: "Condition", value: "New/Factory Sealed" },
      { label: "Convention/Event", value: "Yu-Gi-Oh! TCG World Championship" },
      { label: "Card Size", value: "Standard" },
      { label: "Set", value: "2017" },
      { label: "Configuration", value: "Box" },
      { label: "Character", value: "Joey Wheeler, Yami Yugi" },
      { label: "Year Manufactured", value: "2017" },
      { label: "Game", value: "Yu-Gi-Oh! TCG" },
      { label: "Language", value: "English" },
      { label: "Manufacturer", value: "Konami" },
      { label: "Country/Region of Manufacture", value: "United States" },
    ],
  };

  return (
    <div className="about-item">
      <h2>About This Item</h2>
      <div className="item-details">
        <p>{itemDetails.responsibility}</p>
        <p><strong>eBay item number:</strong> {itemDetails.itemNumber}</p>
        <p><strong>Last updated on:</strong> {itemDetails.lastUpdated}</p>

        <div className="item-specific">
          {itemDetails.specifics.map((specific, index) => (
            <div key={index} className="specific-item">
              <strong>{specific.label}</strong>
              <span>{specific.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutItemComponent;
