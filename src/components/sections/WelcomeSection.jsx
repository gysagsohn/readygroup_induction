import React from "react";
import heroImage from "../..//assets/WebstiePhotos /HeroImage.jpg";
import "../../styles/sections/WelcomeSection.css";

export default function WelcomeSection() {
  return (
    <div
      className="welcome-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="welcome-overlay">
        <h1>Welcome to Ready Group</h1>
        <p>
          Ready Group is a leading provider of civil construction and excavation services,
          specializing in advanced solutions for infrastructure projects. Established in 2011,
          we are committed to delivering high-quality, reliable, and innovative services to
          our clients across Australia.
        </p>
      </div>
    </div>
  );
}

