import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./components/AuthPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/signup" element={<Navigate to="/auth" />} />
      <Route path="/login" element={<Navigate to="/auth" />} />
    </Routes>
  );
}

export default App;
