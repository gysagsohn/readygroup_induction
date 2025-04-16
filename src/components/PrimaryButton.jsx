import React from "react";
import "../styles/ButtonStyles.css";

export default function PrimaryButton({ onClick, children, type = "button", className = "" }) {
  return (
    <button className={`primary-button ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
