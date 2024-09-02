import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter, FaStrava } from "react-icons/fa";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="py-8 text-white bg-black">
      <div className="container mx-auto">
        {/* SHOP Section */}
        <div className="mb-4">
          <h3 className="font-bold tracking-widest cursor-pointer" onClick={() => toggleSection("shop")}>
            SHOP
          </h3>
          <ul className={`${openSection === "shop" ? "block" : "hidden"} md:block`}>
            <li><a href="/" className="hover:underline">Bikes</a></li>
            <li><a href="/" className="hover:underline">Accessories</a></li>
          </ul>
        </div>

        {/* CONNECT Section */}
        <div className="mb-4">
          <h3 className="font-bold tracking-widest cursor-pointer" onClick={() => toggleSection("connect")}>
            CONNECT
          </h3>
          <ul className={`${openSection === "connect" ? "block" : "hidden"} md:block`}>
            <li><a href="tel:555-555-5555" className="hover:underline">(555) 255-5011</a></li>
            <li><a href="/" className="hover:underline">Returns</a></li>
            <li><a href="/" className="hover:underline">Warranty</a></li>
            <li><a href="/" className="hover:underline">FAQ</a></li>
            <li><a href="mailto:support@purecycles.com" className="hover:underline">support@purecycles.com</a></li>
            <li><a href="/" className="hover:underline">Become a Dealer</a></li>
            <li><a href="/" className="hover:underline">Register your Bike</a></li>
            <li><a href="/" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/" className="hover:underline">E-Bike Battery Recycling</a></li>
          </ul>
        </div>

        {/* Other Sections Follow Similarly... */}
      </div>
    </footer>
  );
};

export default Footer;
