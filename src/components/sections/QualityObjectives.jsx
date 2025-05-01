import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"; // ✅ Pick your icon here
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../styles/sections/QualityObjectives.css";

export default function QualityObjectives() {
  return (
    <section className="quality-objectives-section" id="quality-objectives">
      <div className="quality-content">
        <h2>Quality Objectives</h2>
        <div className="card-grid">
          <div className="objective-card">
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            <p>Provide an exceptional and reliable service</p>
          </div>
          <div className="objective-card">
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            <p>Deliver high calibre work through dedicated and well-trained personnel, while upholding ethical standards and professionalism</p>
          </div>
          <div className="objective-card">
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            <p>Foster positive relationships with clients through effective communication and encouraging feedback</p>
          </div>
          <div className="objective-card">
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            <p>Satisfy requirements by our clients, industry regulators, and employees</p>
          </div>
        </div>
      </div>
    </section>
  );
}
