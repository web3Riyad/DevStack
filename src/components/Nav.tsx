import { useState } from "react";
import logo from "../assets/logo-text.png";
import { FaBars, FaXmark } from "react-icons/fa6";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <div className="sticky top-0 z-50 bg-purple-100/95 backdrop-blur-md shadow-sm border-b border-purple-200/50">
        {/* Navbar Container */}
        <nav className="container m-auto flex items-center justify-between py-3 px-4 md:px-6">
          {/* Mobile Left: Hamburger Icon | Desktop Left: Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-pink-600 focus:outline-none p-1 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
            
            <img
              src={logo}
              alt="DevStack Logo"
              className="hidden md:block h-8 md:h-10 object-contain"
            />
          </div>

          {/* Mobile Center: Logo */}
          <div className="md:hidden flex-1 flex justify-center">
            <img src={logo} alt="DevStack Logo" className="h-7 object-contain" />
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center justify-between gap-6 font-medium text-gray-700 text-sm">
            <li className="hover:text-pink-600 transition-colors cursor-pointer">Home</li>
            <li className="hover:text-pink-600 transition-colors cursor-pointer">Technologies</li>
            <li className="hover:text-pink-600 transition-colors cursor-pointer">Projects</li>
            <li className="hover:text-pink-600 transition-colors cursor-pointer">About</li>
            <li className="hover:text-pink-600 transition-colors cursor-pointer">Contact</li>
          </ul>

          {/* Right: Sign In and Sign Up Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="text-xs sm:text-sm font-semibold text-gray-700 hover:text-pink-600 transition-colors px-2 py-1 cursor-pointer">
              Sign In
            </button>
            <button className="btn btn-secondary text-xs sm:text-sm rounded-full px-3 py-1.5 font-semibold transition-transform active:scale-95 cursor-pointer">
              Sign Up
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-purple-50 border-t border-purple-200/60 px-4 py-3 shadow-md">
            <ul className="flex flex-col gap-2 font-medium text-gray-700 text-sm">
              <li
                onClick={() => setIsMenuOpen(false)}
                className="py-1.5 px-3 rounded-lg hover:bg-purple-200/50 hover:text-pink-600 cursor-pointer"
              >
                Home
              </li>
              <li
                onClick={() => setIsMenuOpen(false)}
                className="py-1.5 px-3 rounded-lg hover:bg-purple-200/50 hover:text-pink-600 cursor-pointer"
              >
                Technologies
              </li>
              <li
                onClick={() => setIsMenuOpen(false)}
                className="py-1.5 px-3 rounded-lg hover:bg-purple-200/50 hover:text-pink-600 cursor-pointer"
              >
                Projects
              </li>
              <li
                onClick={() => setIsMenuOpen(false)}
                className="py-1.5 px-3 rounded-lg hover:bg-purple-200/50 hover:text-pink-600 cursor-pointer"
              >
                About
              </li>
              <li
                onClick={() => setIsMenuOpen(false)}
                className="py-1.5 px-3 rounded-lg hover:bg-purple-200/50 hover:text-pink-600 cursor-pointer"
              >
                Contact
              </li>
            </ul>
          </div>
        )}
      </div>
    );
};

export default Nav;