import React, { useState } from "react";
import "../styles/SectionNavMenu.css";
import menuIcon from "/assets/WebsitePhotos/menu.svg";

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
          <li><a href="#services">Services</a></li>
        </nav>
      )}
    </div>
  );
}
