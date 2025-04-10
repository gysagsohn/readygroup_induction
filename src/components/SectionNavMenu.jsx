import React, { useState } from "react";
import "../styles/SectionNavMenu.css";
import menuIcon from "/assets/icons/menu.svg";

export default function SectionNavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="section-nav-menu">
      <img
        src={menuIcon}
        alt="Menu"
        className="menu-icon"
        onClick={handleToggle}
      />
      {isOpen && (
        <nav className="menu-dropdown">
          <a href="#welcome" onClick={handleLinkClick}>Welcome</a>
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#who" onClick={handleLinkClick}>Who We Are</a>
          <a href="#details" onClick={handleLinkClick}>Company Details</a>
          <a href="#vision" onClick={handleLinkClick}>Vision & Mission</a>
          <a href="#our-vision" onClick={handleLinkClick}>Our Vision</a>
          <a href="#our-mission" onClick={handleLinkClick}>Our Mission</a>
          <a href="#core-values" onClick={handleLinkClick}>Our Core Values</a>
          <a href="#services" onClick={handleLinkClick}>Core Services</a>
          <a href="#core-services" onClick={handleLinkClick}>Our Core Services</a>
          <a href="#additional-services" onClick={handleLinkClick}>Additional Services</a>
          <a href="#company-objectives" onClick={handleLinkClick}>Objectives & Growth</a>
          <a href="#quality-objectives" onClick={handleLinkClick}>Quality Objective</a>
          <a href="#environmental-objectives" onClick={handleLinkClick}>Environmental Objective</a>
          <a href="#ohs-objectives" onClick={handleLinkClick}>OH&S Objectives</a>
          <a href="#employee-handbook" onClick={handleLinkClick}>Employee Handbook</a>
          <a href="#employee-resources" onClick={handleLinkClick}>Employee Resources</a>     
          <a href="#employee-benefits">Employee Benefits</a>
          <a href="#benefits-breakdown">Benefits Breakdown</a>
        </nav>
      )}
    </div>
  );
}
