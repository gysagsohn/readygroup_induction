import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../styles/sections/LeadershipTeam.css";

const leaders = [
  {
    name: "Matthew Spaninks",
    role: "Managing Director",
    phone: "0419949739",
    email: "M.spaninks@readygroup.au",
    image: "/assets/WebsitePhotos/matt.jpeg",
  },
  {
    name: "Pascal Beylacq",
    role: "Chief Operations Officer",
    phone: "0450244977",
    email: "p.beylacq@readygroup.au",
    image: "/assets/WebsitePhotos/pascal.jpeg",
  },
  {
    name: "Michael Kearney",
    role: "Operations Manager",
    phone: "0401050403",
    email: "M.kearney@readygroup.au",
    image: "/assets/WebsitePhotos/michael.jpeg",
  },
  {
    name: "Katherine Burnett",
    role: "People and Compliance Manager",
    phone: "0419267941",
    email: "k.burnett@readygroup.au",
    image: "/assets/WebsitePhotos/katherine.jpeg",
  },
];

export default function LeadershipTeam() {
  return (
    <section className="leadership-section" id="leadership-team">
      <h1>Meet the Leadership Team</h1>
      <div className="leader-grid">
        {leaders.map((leader, index) => (
          <div key={index} className="leader-card">
            <img
              src={leader.image}
              alt={`${leader.name}, ${leader.role}`}
              className="leader-image"
            />
            <h3>{leader.role}</h3>
            <p>{leader.name}</p>
            <p>
              <FontAwesomeIcon icon={faPhone} />{" "}
              <a href={`tel:${leader.phone}`}>{leader.phone}</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <a href={`mailto:${leader.email}`}>{leader.email}</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
