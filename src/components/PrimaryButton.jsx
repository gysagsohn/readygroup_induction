import React from "react";
import "../styles/ButtonStyles.css";

export default function PrimaryButton({ onClick, children }) {
  return (
    <button className="primary-button" onClick={onClick}>
      {children}
    </button>
  );
}
