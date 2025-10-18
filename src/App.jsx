import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import MateriDetail from "./components/MateriDetail";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/materi/:id" element={<MateriDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
