import React from 'react';
import './App.css';
import Home from './components/Home';
import Register from "./components/Register"
//import Navbar from './components/Navbar';
import Login from "./components/Login"
import {Routes, Route } from "react-router-dom";

function App() {
   return (
    <Routes>
     <Route path="/" exact element={<Home />} />
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} />
     </Routes>
   );
}

export default App;
