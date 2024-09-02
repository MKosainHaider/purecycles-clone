import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import SingleSpeedPage from "./pages/Single Speed/SingleSpeedPage";
import CityBikes
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />


        </Routes>
      </div>
    </Router>
  );
};

export default App;
