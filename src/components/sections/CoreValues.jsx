import {
  faArrowTrendUp,
  faHandshake,
  faLeaf,
  faLightbulb,
  faScaleBalanced,
  faShieldHeart,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../styles/sections/CoreValues.css";

const coreValues = [
  {
    title: "Integrity",
    icon: faScaleBalanced,
    description: "Commitment to honest and ethical business practices.",
  },
  {
    title: "Reliability",
    icon: faThumbsUp,
    description: "Consistent, high-quality service delivery.",
  },
  {
    title: "Innovation",
    icon: faLightbulb,
    description: "Embracing cutting-edge techniques for efficiency.",
  },
  {
    title: "Safety",
    icon: faShieldHeart,
    description: "Prioritizing worker and public safety.",
  },
  {
    title: "Environmental Stewardship",
    icon: faLeaf,
    description: "Sustainable operations with minimal ecological impact.",
  },
  {
    title: "Continuous Improvement",
    icon: faArrowTrendUp,
    description: "Ongoing enhancement of services and skills.",
  },
  {
    title: "Customer-Centric Approach",
    icon: faHandshake,
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
            <div className="value-icon">
              <FontAwesomeIcon icon={value.icon} />
            </div>
            <h2>{value.title}</h2>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
