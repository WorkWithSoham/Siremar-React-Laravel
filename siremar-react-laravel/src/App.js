import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        {/* <Route exact path="/contact" element={<Contact />} /> */}
        {/* <Route exact path="/aboutus" element={<AboutUs />} /> */}
        <Route exact path="/dashboard" element={<Dashboard />} />

      </Routes>
    </div>
  );
}

export default App;
