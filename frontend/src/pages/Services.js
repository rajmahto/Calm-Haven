import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import therapies from "../data/therapies";

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Therapies & Services</h2>
      <div className="services-grid">
        {therapies.map((therapy, index) => (
          <div key={index} className="service-card">
            {therapy.link ? (
              // External links open in a new tab
              <a
                href={therapy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="service-link"
              >
                <img
                  src={therapy.image}
                  alt={therapy.name}
                  className="service-image"
                />
                <h3 className="service-name">{therapy.name}</h3>
                <p className="service-description">{therapy.description}</p>
              </a>
            ) : (
              // Internal routes for other therapies
              <Link to={`/${therapy.path}`} className="service-link">
                <img
                  src={therapy.image}
                  alt={therapy.name}
                  className="service-image"
                />
                <h3 className="service-name">{therapy.name}</h3>
                <p className="service-description">{therapy.description}</p>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
