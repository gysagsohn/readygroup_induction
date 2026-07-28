import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import HandbookPage from "./pages/HandbookPage";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HandbookPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}