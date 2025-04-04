import React from "react";
import WelcomeSection from "..//components/sections/WelcomeSection";
import "../styles/HandbookPage.css";

export default function HandbookPage() {
  return (
    <div className="scroll-container">
      <section className="section"><WelcomeSection /></section>
      <section className="section">Who We Are</section>
      <section className="section">Our Vision</section>
      <section className="section">Services</section>
      <section className="section">Policies</section>
      <section className="section">Contact</section>
    </div>
  );
}
