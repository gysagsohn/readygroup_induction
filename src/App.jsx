import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import "./styles/Layout.css";
import { isAuthenticated } from "./utils/auth";

export default function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(isAuthenticated());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute setAuth={setAuth}><Home /></ProtectedRoute>} />
    </Routes>
  );
}
