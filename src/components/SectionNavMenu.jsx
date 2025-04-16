import React, { useEffect, useRef, useState } from "react";
import "../styles/SectionNavMenu.css";
import menuIcon from "/assets/icons/menu.svg";

export default function SectionNavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  // Close on scroll or hash change
  useEffect(() => {
    const handleClose = () => setIsOpen(false);
    window.addEventListener("scroll", handleClose);
    window.addEventListener("hashchange", handleClose);
    return () => {
      window.removeEventListener("scroll", handleClose);
      window.removeEventListener("hashchange", handleClose);
    };
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="section-nav-menu" ref={menuRef}>
      <img
        src={menuIcon}
        alt="Menu"
        className="menu-icon"
        onClick={handleToggle}
      />
      <nav className={`menu-dropdown ${isOpen ? "open" : ""}`}>
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
        <a href="#ohs-objectives" onClick={handleLinkClick}>WH&S Objectives</a>
        <a href="#employee-handbook" onClick={handleLinkClick}>Employee Handbook</a>
        <a href="#employee-resources" onClick={handleLinkClick}>Employee Resources</a>
        <a href="#employee-benefits" onClick={handleLinkClick}>Employee Benefits</a>
        <a href="#benefits-breakdown" onClick={handleLinkClick}>Benefits Breakdown</a>
        <a href="#contact-us" onClick={handleLinkClick}>Contact Us</a>
        <a href="#leadership-team" onClick={handleLinkClick}>Leadership Team</a>
      </nav>
    </div>
  );
}
