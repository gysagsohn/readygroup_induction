import React from "react";
import "../../styles/sections/WelcomeSection.css";

export default function WelcomeSection() {
  return (
    <div className="welcome-minimal" id="welcome">
      <div className="scroll-cue">
        <p>Scroll to get started</p>
        <span>↓</span>
      </div>
    </div>
  );
}