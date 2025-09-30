import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/Applayout/Applayout"
import Home from "./components/Home";

import About from "./components/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
