import {
  faAward,
  faBriefcase,
  faChalkboardUser,
  faChampagneGlasses
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
    title: "Social Events & Culture",
    description: "We host two big social events and other smaller gatherings throughout the year.",
    icon: faChampagneGlasses,
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
