import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaBars, FaUser, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import LogoImage from "../assets/logo.png";

const NavBar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const updateCartCount = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    // Ensure it counts the total number of items based on quantity
    const totalItems = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);
    setCartCount(totalItems);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      updateCartCount(); // Initial update

      // Listen for both 'storage' and custom 'cartUpdated' events
      const handleCartChange = () => updateCartCount();
      window.addEventListener("storage", handleCartChange);
      window.addEventListener("cartUpdated", handleCartChange);

      // Cleanup listeners on unmount
      return () => {
        window.removeEventListener("storage", handleCartChange);
        window.removeEventListener("cartUpdated", handleCartChange);
      };
    }
  }, []);

  return (
    <Nav>
      <Container>
        <LogoLink to="/">
          <Logo src={LogoImage} alt="PURE CYCLES" />
        </LogoLink>

        {/* Desktop Menu */}
        <MenuItems className="desktop-menu">
          <NavItem to="/single-speed">SINGLE SPEED</NavItem>
          <NavItem to="/city-bikes">CITY BIKES</NavItem>
          <NavItem to="/commuter-bikes">COMMUTER BIKES</NavItem>
          <NavItem to="/all-bikes">ALL BIKES</NavItem>
          <NavItem to="/accessories">ACCESSORIES</NavItem>
        </MenuItems>

        {/* Right Icons */}
        <Icons>
          <IconLink to="/search">
            <FaSearch size={24} /> {/* Increased size */}
          </IconLink>
          <IconLink to="/cart">
            <FaShoppingCart size={24} /> {/* Increased size */}
            {cartCount > 0 && <CartCount>({cartCount})</CartCount>}
          </IconLink>
          <IconLink to="/login">Login</IconLink>
          <IconLink to="/profile">
            <FaUser size={24} /> {/* Increased size */}
          </IconLink>
          <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />} {/* Increased size */}
          </MenuButton>
        </Icons>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <MobileMenu>
            <MobileNavItem to="/single-speed">SINGLE SPEED</MobileNavItem>
            <MobileNavItem to="/city-bikes">CITY BIKES</MobileNavItem>
            <MobileNavItem to="/commuter-bikes">COMMUTER BIKES</MobileNavItem>
            <MobileNavItem to="/all-bikes">ALL BIKES</MobileNavItem>
            <MobileNavItem to="/accessories">ACCESSORIES</MobileNavItem>
          </MobileMenu>
        )}
      </Container>
    </Nav>
  );
};

// Styled Components
const Nav = styled.nav`
  background-color: #333;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.img`
  max-height: 40px;
`;

const MenuItems = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 20px;
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #ccc;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 12px; /* Further decreased font size */
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const IconLink = styled(Link)`
  color: white;
  position: relative;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #ccc;
  }
`;

const CartCount = styled.span`
  font-size: 10px;  /* Reduced font size */
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 4px;  /* Reduced padding */
`;

const MenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  color: white;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: #333;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 999;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavItem = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  transition: background 0.3s;

  &:hover {
    background-color: #444;
  }
`;

export default NavBar;
