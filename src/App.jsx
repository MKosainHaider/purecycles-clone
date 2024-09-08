import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import SingleSpeedPage from "./pages/Single Speed/SingleSpeedPage"

import CityBikesPage from "./pages/city Bikes/CityBikesPage";
import CommuterBikesPage from "./pages/Commuter Bikes/CommuterBikePage";
import AllBikesPage from "./pages/All Bikes/AllBikesPage";
import AccessoriesPage from "./pages/Accessories/AccessoriesPage";
import NotFoundPage from "./pages/NotFoundPage";
import RenderProductDetail from "./RenderProductDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/single-speed" element={<SingleSpeedPage />} />
        <Route path="/city-bikes" element={<CityBikesPage />} />
        <Route path="/commuter-bikes" element={<CommuterBikesPage />} />
        <Route path="/all-bikes" element={<AllBikesPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/product/:id" element={<RenderProductDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
