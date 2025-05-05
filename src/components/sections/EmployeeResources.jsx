import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../styles/sections/EmployeeResources.css";

const onboarding = [
  { name: "Employee Handbook", link: "/policies/Employee_Induction_Manual.pdf" },
  { name: "Code of Conduct", link: "/policies/Code_of_Conduct.pdf" },
];

const policies = [
  { name: "Anti-Harassment & Bullying Policy", link: "/policies/Anti_Harassment_&_Bullying_Policy.pdf" },
  { name: "Company Vehicle Policy", link: "/policies/Company_Vehicle_Policy.pdf" },
  { name: "COR Policy", link: "/policies/COR_Policy.pdf" },
  { name: "Fitness for Work Policy", link: "/policies/Fitness_For_Work_Policy.pdf" },
  { name: "PPE Policy", link: "/policies/PPE_Policy.pdf" },
  { name: "Social Media Policy", link: "/policies/Social_Media_Policy.pdf" },
  { name: "Sun Safe Policy", link: "/policies/Sun_Safe_Policy.pdf" },
  { name: "Workplace Surveillance Policy", link: "/policies/Workplace_Surveillance_Policy.pdf" },
];

export default function EmployeeResources() {
  return (
    <section className="employee-resources-section" id="employee-resources">
      <div className="employee-resources-container">
        <h1>Employee Policies & Resources</h1>
        <p className="subtext">
          Access important documents for onboarding, workplace conduct, and compliance. <br />
          <em>(Clicking a policy will open a PDF in a new tab.)</em>
        </p>

        <div className="resource-columns">
          <div className="resource-card">
            <h3>Induction & Onboarding</h3>
            <ul>
              {onboarding.map((item, i) => (
                <li key={i}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                    <FontAwesomeIcon icon={faFilePdf} className="pdf-icon" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="resource-card">
            <h3>Workplace Policies</h3>
            <ul>
              {policies.map((item, i) => (
                <li key={i}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                    <FontAwesomeIcon icon={faFilePdf} className="pdf-icon" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
