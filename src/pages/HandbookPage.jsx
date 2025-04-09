import React from "react";
import WelcomeSection from "..//components/sections/WelcomeSection";
import AboutSection from "../components/sections/AboutSection";
import CompanyDetails from "../components/sections/CompanyDetails";
import WhoWeAre from "../components/sections/WhoWeAre";
import "../styles/HandbookPage.css";

export default function HandbookPage() {
  return (
    <div className="scroll-container">
      <section className="section"><WelcomeSection /></section>
      <section className="section"><AboutSection /></section>
      <section className="section"><WhoWeAre /></section>
      <section className="section"><CompanyDetails /></section>
      <section className="section">Our Vision</section>
      <section className="section">Services</section>
      <section className="section">Policies</section>
      <section className="section">Contact</section>
    </div>
  );
}
