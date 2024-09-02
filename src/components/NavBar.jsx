import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import styled from "styled-components";
import LogoImage from "../assets/logo.png";

const NavBar = ({ bgColor = "#333333", textColor = "white" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`py-4`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="container flex items-center justify-between mx-auto ">
        <div className="ml-6 text-xl font-bold tracking-widest">
          <Link to="/" className="text-white">
            <Logo src={LogoImage} alt="PURE CYCLES" />
          </Link>
        </div>

        <div className="hidden space-x-8 md:flex">
          <Link to="/single-speed" className="hover:text-gray-400">
            SINGLE SPEED
          </Link>
          <Link to="/city-bikes" className="hover:text-gray-400">
            CITY BIKES
          </Link>
          <Link to="/commuter-bikes" className="hover:text-gray-400">
            COMMUTER BIKES
          </Link>
          {/* <Link to="/gravel-bikes" className="hover:text-gray-400">
            GRAVEL BIKES
          </Link> */}
          <Link to="/all-bikes" className="hover:text-gray-400">
            ALL BIKES
          </Link>
          <Link to="/accessories" className="hover:text-gray-400">
            ACCESSORIES
          </Link>
        </div>

        <div className="flex mr-6 space-x-6">
          <Link to="/search" className="hover:text-gray-400">
            <FaSearch size={18} />
          </Link>
          <Link to="/cart" className="hover:text-gray-400">
            <FaShoppingCart size={18} />
          </Link>
          <button
            onClick={toggleMenu}
            className="md:hidden hover:text-gray-400"
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="text-white bg-gray-800 md:hidden">
          <Link
            to="/single-speed"
            className="block px-4 py-2 hover:bg-gray-700"
          >
            SINGLE SPEED
          </Link>
          <Link to="/city-bikes" className="block px-4 py-2 hover:bg-gray-700">
            CITY BIKES
          </Link>
          <Link
            to="/commuter-bikes"
            className="block px-4 py-2 hover:bg-gray-700"
          >
            COMMUTER BIKES
          </Link>
          {/* <Link
            to="/gravel-bikes"
            className="block px-4 py-2 hover:bg-gray-700"
            GRAVEL BIKES
          </Link> */}
          <Link to="/all-bikes" className="block px-4 py-2 hover:bg-gray-700">
            ALL BIKES
          </Link>
          <Link to="/accessories" className="block px-4 py-2 hover:bg-gray-700">
            ACCESSORIES
          </Link>
        </div>
      )}
    </nav>
  );
};

const Logo = styled.img`
  max-height: 40px;
`;

export default NavBar;
