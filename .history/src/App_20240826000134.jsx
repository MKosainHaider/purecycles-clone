import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home"
import SingleSpeedPage from "./pages/Single Speed/SingleSpeedPage";
import CityBikesPage from "./pages/city Bikes/CityBikesPage";
// import CommuterBikesPage from "./pages/CommuterBikesPage";
// import GravelBikesPage from "./pages/GravelBikesPage";
// import AllBikesPage from "./pages/AllBikesPage";
// import AccessoriesPage from "./pages/AccessoriesPage";
// import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/single-speed" element={<SingleSpeedPage />} />
        <Route path="/city-bikes" element={<CityBikesPage />} />
        {/* <Route path="/commuter-bikes" element={<CommuterBikesPage />} />
        <Route path="/gravel-bikes" element={<GravelBikesPage />} />
        <Route path="/all-bikes" element={<AllBikesPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
