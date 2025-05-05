import React from "react";
import "../../styles/sections/FinalConfirmation.css";

export default function FinalConfirmation() {
  return (
    <section className="final-confirmation-section" id="confirmation">
      <div className="confirmation-box">
        <h2>You're all set!</h2>
        <p>
          Please confirm that you’ve read and understood the content of this site.
          If you have any questions, refer to the <a href="#meet-the-team">Meet the Team</a> section or contact your manager or HR.
        </p>
        <a
          className="confirmation-button"
          href="https://formitize.co/IK2Ii-HQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Confirm & Finish
        </a>
      </div>
    </section>
  );
}
