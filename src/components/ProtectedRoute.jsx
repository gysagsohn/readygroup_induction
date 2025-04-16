import React, { useState } from "react";
import "../styles/AuthStyles.css";
import { authenticateUser } from "../utils/auth";
import PrimaryButton from "./PrimaryButton";

export default function ProtectedRoute({ children, setAuth }) {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  const handleLogin = () => {
    if (authenticateUser(enteredPassword)) {
      setIsAuth(true);
      setAuth(true);
    } else {
      alert("Incorrect password. Try again.");
    }
  };

  return isAuth ? (
    children
  ) : (
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
          onChange={(e) => setEnteredPassword(e.target.value)}
          className="auth-input"
        />
        <PrimaryButton type="submit" className="login-button">
          Login
        </PrimaryButton>
      </form>
    </div>
  );
}
