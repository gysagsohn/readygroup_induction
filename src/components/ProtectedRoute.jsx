import React, { useState } from "react";
import "../styles/AuthStyles.css";
import { authenticateUser, isAuthenticated } from "../utils/auth";
import PrimaryButton from "./PrimaryButton";

export default function ProtectedRoute({ children }) {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState("");
  // Lazy initialiser: reads localStorage once, on the first render only.
  const [isAuth, setIsAuth] = useState(() => isAuthenticated());

  const handleLogin = () => {
    if (authenticateUser(enteredPassword)) {
      setIsAuth(true);
    } else {
      setError("Incorrect password. Please try again.");
      setEnteredPassword("");
    }
  };

  if (isAuth) return children;

  return (
    <div className="auth-container">
      <h2>Enter Password</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <input
          type="password"
          placeholder="Enter password"
          value={enteredPassword}
          onChange={(e) => {
            setEnteredPassword(e.target.value);
            if (error) setError("");
          }}
          className="auth-input"
          autoFocus
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? "auth-error" : undefined}
        />
        {error && (
          <p id="auth-error" className="auth-error" role="alert">
            {error}
          </p>
        )}
        <PrimaryButton type="submit" className="login-button">
          Login
        </PrimaryButton>
      </form>
    </div>
  );
}