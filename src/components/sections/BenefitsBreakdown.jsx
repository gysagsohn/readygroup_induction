import React from "react";
import "../../styles/sections/BenefitsBreakdown.css";

const benefits = [
  {
    title: "Training & Development",
    description: "Opportunities for skill enhancement",
    icon: "🛠️",
  },
  {
    title: "Career Progression",
    description: "Internal job application process",
    icon: "🛠️",
  },
  {
    title: "Performance Reviews & Feedback",
    description: "Structured assessment and improvement plans",
    icon: "🛠️",
  },
  {
    title: "Work Anniversaries & Recognition",
    description: "Acknowledgment of employee milestones",
    icon: "🛠️",
  },
];

export default function BenefitsBreakdown() {
  return (
    <section className="benefits-breakdown-section" id="benefits-breakdown">
      <div className="benefits-grid">
        {benefits.map((item, index) => (
          <div className="benefit-card" key={index}>
            <h3>{item.title}</h3>
            <div className="benefit-icon">{item.icon}</div>
            <p>{item.description}</p>
        </div>
        ))}
      </div>
    </section>
  );
}
