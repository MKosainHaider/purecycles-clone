import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Profile from "./pages/Profile.jsx";  
import Cart from "./pages/Cart.jsx";
import BuyNowPage from "./pages/BuyNowPage.jsx";
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
        <Route path="/home" element={<HomePage />} />

        <Route path="/single-speed" element={<SingleSpeedPage />} />
        <Route path="/city-bikes" element={<CityBikesPage />} />
        <Route path="/commuter-bikes" element={<CommuterBikesPage />} />
        <Route path="/all-bikes" element={<AllBikesPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/accessories/:id" element={<RenderProductDetail type={"accessories"} />} />
        <Route path="/bikes/:id" element={<RenderProductDetail type={"bike"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/buy-now" element={<BuyNowPage />} /> 
        <Route path="/profile" element={<Profile />} /> 
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
