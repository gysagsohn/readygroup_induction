import React from "react";
import "../../styles/sections/AdditionalServices.css";

const additionalServices = [
  { title: "CCTV", image: "/assets/WebsitePhotos/CCTV.jpeg" },
  { title: "Service Locating & Survey", image: "/assets/WebsitePhotos/ServiceLocation.jpg" },
];

export default function AdditionalServices() {
  return (
    <section className="additional-services-section" id="additional-services">
      <h1>Additional Services</h1>
      <p className="subtitle">Service provided by our trusted partners</p>
      <div className="additional-services-grid">
        {additionalServices.map((service, index) => (
          <div
            className="additional-service-card"
            key={index}
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="overlay" />
            <div className="service-title">{service.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
