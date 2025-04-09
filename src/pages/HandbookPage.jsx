import React from "react";
import WelcomeSection from "..//components/sections/WelcomeSection";
import SectionNavMenu from "../components/SectionNavMenu";
import AboutSection from "../components/sections/AboutSection";
import CompanyDetails from "../components/sections/CompanyDetails";
import CoreValues from "../components/sections/CoreValues";
import OurMission from "../components/sections/OurMission";
import OurVision from "../components/sections/OurVision";
import VisionMissionIntro from "../components/sections/VisionMissionIntro";
import WhoWeAre from "../components/sections/WhoWeAre";
import "../styles/HandbookPage.css";

export default function HandbookPage() {
  return (
    <div className="scroll-container">
      <SectionNavMenu /> 
      <section className="section"><WelcomeSection /></section>
      <section className="section"><AboutSection /></section>
      <section className="section"><WhoWeAre /></section>
      <section className="section"><CompanyDetails /></section>
      <section className="section"><VisionMissionIntro /></section>
      <section className="section"><OurVision/></section>
      <section className="section"><OurMission /></section>
      <section className="section"><CoreValues /></section>
      <section className="section">Contact</section>
    </div>
  );
}
