import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import Landing from "./pages/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/signup" element={<Navigate to="/auth" />} />
      <Route path="/login" element={<Navigate to="/auth" />} />
    </Routes>
  );
}

export default App;
