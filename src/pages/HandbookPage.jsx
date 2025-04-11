import React from "react";
import WelcomeSection from "..//components/sections/WelcomeSection";
import SectionNavMenu from "../components/SectionNavMenu";
import AboutSection from "../components/sections/AboutSection";
import AdditionalServices from "../components/sections/AdditionalServices";
import BenefitsBreakdown from "../components/sections/BenefitsBreakdown";
import CompanyDetails from "../components/sections/CompanyDetails";
import CompanyObjectives from "../components/sections/CompanyObjectives";
import ContactUs from "../components/sections/ContactUs";
import CoreValues from "../components/sections/CoreValues";
import EmployeeBenefits from "../components/sections/EmployeeBenefits";
import EmployeeHandbook from "../components/sections/EmployeeHandbook";
import EmployeeResources from "../components/sections/EmployeeResources";
import EnvironmentalObjectives from "../components/sections/EnvironmentalObjectives";
import LeadershipTeam from "../components/sections/LeadershipTeam";
import OhsObjectives from "../components/sections/OhsObjectives";
import OurCoreServices from "../components/sections/OurCoreServices";
import OurMission from "../components/sections/OurMission";
import OurServicesSection from "../components/sections/OurServicesSection";
import OurVision from "../components/sections/OurVision";
import QualityObjectives from "../components/sections/QualityObjectives";
import VisionMissionIntro from "../components/sections/VisionMissionIntro";
import WhoWeAre from "../components/sections/WhoWeAre";
import "../styles/HandbookPage.css";

export default function HandbookPage() {
  return (
    <main className="scroll-container">
      <SectionNavMenu /> 
      <section className="section"><WelcomeSection /></section>
      <section className="section"><AboutSection /></section>
      <section className="section"><WhoWeAre /></section>
      <section className="section"><CompanyDetails /></section>
      <section className="section"><VisionMissionIntro /></section>
      <section className="section"><OurVision/></section>
      <section className="section"><OurMission /></section>
      <section className="section"><CoreValues /></section>
      <section className="section"><OurServicesSection /></section>
      <section className="section"><OurCoreServices /></section>
      <section className="section"><AdditionalServices /></section>
      <section className="section"><CompanyObjectives /></section>
      <section className="section"><QualityObjectives /></section>
      <section className="section"><EnvironmentalObjectives /></section>
      <section className="section"><OhsObjectives /></section>
      <section className="section"><EmployeeHandbook /></section>    
      <section className="section"><EmployeeResources /></section>
      <section className="section"><EmployeeBenefits /></section>
      <section className="section"><BenefitsBreakdown /></section>
      <section className="section"><ContactUs /></section>
      <section className="section"><LeadershipTeam /></section>
    </main>
  );
}
