import { faShieldAlt } from "@fortawesome/free-solid-svg-icons"; // 🛡️ WHS icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../styles/sections/OhsObjectives.css";

export default function OhsObjectives() {
  return (
    <section className="ohs-objectives-section" id="ohs-objectives">
      <div className="ohs-content">
        <h2>WH&S Objectives</h2>
        <div className="card-grid">
          <div className="objective-card">
            <FontAwesomeIcon icon={faShieldAlt} className="icon" />
            <p>
              Promote a safety culture where incidents and hazards are promptly reported,
              investigated, and measures are implemented to minimise recurrence,
              while also fostering initiatives for injury and illness prevention
            </p>
          </div>
          <div className="objective-card">
            <FontAwesomeIcon icon={faShieldAlt} className="icon" />
            <p>
              Maintain and promote a safety culture that encourages workers to proactively manage
              health and safety risks through participation, consultation, education, cooperation,
              coordination and supervision
            </p>
          </div>
          <div className="objective-card">
            <FontAwesomeIcon icon={faShieldAlt} className="icon" />
            <p>
              Promote environmental awareness among employees and subcontractors via regular training
            </p>
          </div>
          <div className="objective-card">
            <FontAwesomeIcon icon={faShieldAlt} className="icon" />
            <p>
              Comply with all applicable environmental legislation, regulations, legal obligations, and
              other requirements to ensure risks to the environment are identified, assessed, and appropriately controlled
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
