import React from "react";
import "../../styles/sections/OurCoreServices.css";
import SectionNavMenu from "../SectionNavMenu";

const services = [
  { title: "Vacuum Truck Excavation", image: "/assets/WebsitePhotos/VaccumeTruck.jpg" },
  { title: "Liquid Waste Management", image: "/assets/WebsitePhotos/LiquidWaste.jpg" },
  { title: "Civil Services", image: "/assets/WebsitePhotos/CivilServics.jpg" },
  { title: "Jetting & Drain Cleaning", image: "/assets/WebsitePhotos/JettingDrain.jpg" },
  { title: "Water Cart", image: "/assets/WebsitePhotos/WaterCart.jpg" },
  { title: "Street Sweeper", image: "/assets/WebsitePhotos/StreetSweeper.jpg" },
];

export default function OurCoreServices() {
  return (
    <section className="our-core-services-section" id="core-services">
      <SectionNavMenu />
      <h1>Our Core Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className="service-card"
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
