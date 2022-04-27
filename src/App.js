import React from "react";
import About from "./components/routes/About";
import Contact from "./components/routes/Contact";
import Home from "./components/routes/Home";
import Projects from "./components/routes/Projects";
import "./index.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
