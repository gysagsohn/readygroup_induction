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
              Provide adequate resources, training, plant and personal protective equipment,
              supported by competent supervision, to maintain high safety standards across
              every site we work on
            </p>
          </div>
          <div className="objective-card">
            <FontAwesomeIcon icon={faShieldAlt} className="icon" />
            <p>
              Comply with the WHS Act 2011, WHS Regulations 2025 and the relevant SafeWork NSW
              Codes of Practice, ensuring workplace health and safety risks are identified,
              assessed and appropriately controlled
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}