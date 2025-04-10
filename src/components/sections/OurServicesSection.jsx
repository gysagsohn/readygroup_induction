import React from "react";
import "../../styles/sections/OurServicesSection.css";
import SectionNavMenu from "../SectionNavMenu";

export default function OurServicesSection() {
  return (
    <section className="our-services-section" id="services">
      <SectionNavMenu />
      <div className="overlay">
        <h1>Our Services</h1>
      </div>
    </section>
  );
}
