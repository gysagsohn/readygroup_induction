import React from "react";
import "../../styles/sections/OhsObjectives.css";

export default function OhsObjectives() {
  return (
    <section className="ohs-objectives-section" id="ohs-objectives">
      <h2>OH&S Objectives</h2>
      <div className="ohs-columns">
        <div className="ohs-column">
          <ul>
            <li>
              Promote a safety culture where incidents and hazards are promptly reported,
              investigated, and measures are implemented to minimise recurrence,
              while also fostering initiatives for injury and illness prevention
            </li>
            <li>
              Maintain and promote a safety culture that encourages workers to proactively manage
              health and safety risks through participation, consultation, education, cooperation,
              coordination and supervision;
            </li>
          </ul>
        </div>
        <div className="ohs-column">
          <ul>
            <li>
              Promote environmental awareness among employees and subcontractors via regular training
            </li>
            <li>
              Comply with all applicable environmental legislation, regulations, legal obligations and
              other requirements to ensure risks to the environment are identified, assessed and appropriately controlled
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
