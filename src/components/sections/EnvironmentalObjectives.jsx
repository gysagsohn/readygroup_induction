import React from "react";
import "../../styles/sections/EnvironmentalObjectives.css";

export default function EnvironmentalObjectives() {
  return (
    <section className="environmental-objectives-section" id="environmental-objectives">
      <h2>Environmental Objectives</h2>
      <div className="objectives-columns">
        <ul>
          <li>
            Promote efficient resource utilisation and waste management principles 
            including avoidance, re-use, recycling, energy recovery, treatment, 
            containment, and disposal
          </li>
          <li>
            Minimise adverse impacts from our activities on the environment, and 
            requiring our subcontractors to do the same (noise, vibration, 
            groundwater, air quality, water quality and land contamination)
          </li>
        </ul>
        <ul>
          <li>
            Promote environmental awareness among employees and subcontractors via 
            regular training
          </li>
          <li>
            Comply with all applicable environmental legislation, regulations, 
            legal obligations and other requirements to ensure risks to the 
            environment are identified, assessed and appropriately controlled
          </li>
        </ul>
      </div>
    </section>
  );
}
