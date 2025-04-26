import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaInstagram, FaFacebookF, FaGoogle } from "react-icons/fa";
import SearchBar from "./SearchBar";
import assets from "../assets/assets";  

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on link click
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      {/* Desktop Header */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img
              className="h-10 w-auto sm:h-12"
              src= {assets.Logo}
              alt="Capture A Trip"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="flex items-center space-x-4">
          {/* Social Media Icons - visible only on xl screens */}
          <div className="hidden lg:hidden xl:flex items-center space-x-4 mr-6">
            <a
              href="https://www.instagram.com/trippy_blinders"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/trippyblinders/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a
              href="https://g.co/kgs/h59zMW8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <FaGoogle className="h-5 w-5" />
            </a>
          </div>

          {/* Phone Number - visible on lg and above */}
          <a
            href="tel:+919266517788
"
            className="hidden lg:flex items-center text-gray-600 hover:text-blue-500"
          >
            <PhoneIcon className="h-5 w-5 mr-1" />
            <span>(+91) 9266517788</span>
          </a>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex lg:space-x-2">
            {[
              { to: "/", label: "Home" },
              { to: "/international", label: "International" },
              { to: "/domestic", label: "Domestic" },
              { to: "/honeymoon", label: "Honeymoon" },
              { to: "/weekend", label: "Weekend" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-900 hover:bg-blue-500 hover:text-white px-2 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* SearchBar - Desktop */}
          <SearchBar containerClass="ml-4" />
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex lg:hidden items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center">
          <img
            className="h-10 w-auto sm:h-12"
            src="https://trippyblinders.com/wp-content/uploads/2025/02/logo.png"
            alt="Capture A Trip"
          />
        </Link>

        {/* Mobile Search Bar */}
        <div className="flex-1 mx-2">
          <SearchBar containerClass="w-full" />
        </div>

        {/* Phone Icon & Mobile Menu Button */}
        <div className="flex items-center space-x-2">
          <a
            href="tel:+919266517788"
            className="text-gray-600 hover:text-blue-500"
          >
            <PhoneIcon className="h-6 w-6" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { to: "/", label: "Home" },
              { to: "/international", label: "International Trips" },
              { to: "/domestic", label: "Domestic Trips" },
              { to: "/honeymoon", label: "Honeymoon Trip" },
              { to: "/weekend", label: "Weekend Trips" },
              { to: "/services", label: "Our Services" },
              { to: "/contact", label: "Contact Us" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={handleLinkClick}
                className={`block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-blue-500 hover:text-white transition-colors ${
                  link.to === "/contact" ? "bg-blue-600 text-white" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Icons in Mobile Menu */}
          <div className="px-5 py-3 border-t border-gray-200">
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.instagram.com/trippy_blinders"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/trippyblinders/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500"
              >
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a
                href="https://g.co/kgs/h59zMW8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500"
              >
                <FaGoogle className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
