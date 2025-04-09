import React from "react";
import "../../styles/sections/CoreValues.css";

const coreValues = [
  {
    title: "Integrity",
    icon: "🛠️",
    description: "Commitment to honest and ethical business practices.",
  },
  {
    title: "Reliability",
    icon: "🛠️",
    description: "Consistent, high-quality service delivery.",
  },
  {
    title: "Innovation",
    icon: "🛠️",
    description: "Embracing cutting-edge techniques for efficiency.",
  },
  {
    title: "Safety",
    icon: "🛠️",
    description: "Prioritizing worker and public safety.",
  },
  {
    title: "Environmental Stewardship",
    icon: "🛠️",
    description: "Sustainable operations with minimal ecological impact.",
  },
  {
    title: "Continuous Improvement",
    icon: "🛠️",
    description: "Ongoing enhancement of services and skills.",
  },
  {
    title: "Customer-Centric Approach",
    icon: "🛠️",
    description: "Meeting and exceeding client needs.",
  },
];

export default function CoreValues() {
  return (
    <section className="core-values-section" id="core-values">
      <h1>Our Core Values</h1>
      <p className="intro-text">
        Our core values are the bedrock of our organisation, shaping our culture
        and guiding every decision and action we take, influencing how we interact
        with our team, clients, communities and environment.
      </p>

      <div className="core-values-grid">
        {coreValues.map((value, index) => (
          <div className="value-card" key={index}>
            <h2>{value.title}</h2>
            <div className="value-icon">{value.icon}</div>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
