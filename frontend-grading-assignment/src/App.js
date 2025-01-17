import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import { Component, useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import HelpFAQs from "./routes/HelpFAQs";

function App() {
  // Using the useState hook to manage the route state
  const [route, setRoute] = useState("login");

  return (
    <div className="App">
      {/* Conditional rendering based on the 'route' state */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<HelpFAQs />} />
      </Routes>
    </div>
  );
}

export default App;
