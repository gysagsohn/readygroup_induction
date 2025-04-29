import { faLeaf } from "@fortawesome/free-solid-svg-icons"; // 🌿 Optional environmental icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../styles/sections/EnvironmentalObjectives.css";

export default function EnvironmentalObjectives() {
  return (
    <section className="environmental-objectives-section" id="environmental-objectives">
      <div className="environmental-content">
        <h2>Environmental Objectives</h2>
        <div className="card-grid">
          <div className="objective-card">
            <FontAwesomeIcon icon={faLeaf} className="icon" />
            <p>
              Promote efficient resource utilisation and waste management principles 
              including avoidance, re-use, recycling, energy recovery, treatment, 
              containment, and disposal
            </p>
          </div>
          <div className="objective-card">
            <FontAwesomeIcon icon={faLeaf} className="icon" />
            <p>
              Minimise adverse impacts from our activities on the environment, and 
              require subcontractors to do the same (noise, vibration, groundwater, 
              air quality, water quality, and land contamination)
            </p>
          </div>
          <div className="objective-card">
            <FontAwesomeIcon icon={faLeaf} className="icon" />
            <p>
              Promote environmental awareness among employees and subcontractors via 
              regular training
            </p>
          </div>
          <div className="objective-card">
            <FontAwesomeIcon icon={faLeaf} className="icon" />
            <p>
              Comply with all applicable environmental legislation, regulations, 
              legal obligations and other requirements to ensure risks to the 
              environment are identified, assessed and appropriately controlled
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
