import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <>
      {/* Wrap the entire application with NoteState to provide context */}
      <NoteState>
        {/* Set up the router for navigation */}
        <Router>
          <Navbar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
