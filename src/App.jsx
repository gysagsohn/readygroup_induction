import React from "react";
import { Route, Routes } from "react-router-dom";

const Home = () => <h1>Welcome to Ready Group Handbook</h1>;

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}