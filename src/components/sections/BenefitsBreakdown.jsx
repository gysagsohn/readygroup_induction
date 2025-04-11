import {
  faAward,
  faBriefcase,
  faChalkboardUser,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../styles/sections/BenefitsBreakdown.css";

const benefits = [
  {
    title: "Training & Development",
    description: "Opportunities for skill enhancement",
    icon: faChalkboardUser,
  },
  {
    title: "Career Progression",
    description: "Internal job application process",
    icon: faBriefcase,
  },
  {
    title: "Performance Reviews & Feedback",
    description: "Structured assessment and improvement plans",
    icon: faClipboardCheck,
  },
  {
    title: "Work Anniversaries & Recognition",
    description: "Acknowledgment of employee milestones",
    icon: faAward,
  },
];

export default function BenefitsBreakdown() {
  return (
    <section className="benefits-breakdown-section" id="benefits-breakdown">
      <div className="benefits-grid">
        {benefits.map((item, index) => (
          <div className="benefit-card" key={index}>
            <div className="benefit-icon">
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
