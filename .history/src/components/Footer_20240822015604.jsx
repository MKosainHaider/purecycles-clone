import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaStrava,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4 tracking-widest">SHOP</h3>
          <ul>
            <li>
              <a href="/" className="hover:underline">
                Bikes
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Accessories
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 tracking-widest">CONNECT</h3>
          <ul>
            <li>
              <a href="tel:555-555-5555" className="hover:underline">
                (555) 255-5011
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Returns
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Warranty
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a
                href="mailto:support@purecycles.com"
                className="hover:underline"
              >
                support@purecycles.com
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Become a Dealer
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Register your Bike
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                E-Bike Battery Recycling
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 tracking-widest">ABOUT</h3>
          <ul>
            <li>
              <a href="/" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Find a Dealer
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Press
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Promotional Videos
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 tracking-widest">DON'T MISS OUT</h3>
          <p className="mb-4">
            These days our bikes sell out fast! Sign up so you don't miss it.
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full mb-4 bg-black border-b border-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 w-full"
            >
              Sign Up
            </button>
          </form>
          <div className="flex space-x-4 mt-4">
            <a href="/" className="hover:text-gray-400">
              <FaInstagram size={20} />
            </a>
            <a href="/" className="hover:text-gray-400">
              <FaFacebookF size={20} />
            </a>
            <a href="/" className="hover:text-gray-400">
              <FaYoutube size={20} />
            </a>
            <a href="/" className="hover:text-gray-400">
              <FaTwitter size={20} />
            </a>
            <a href="/" className="hover:text-gray-400">
              <FaStrava size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
