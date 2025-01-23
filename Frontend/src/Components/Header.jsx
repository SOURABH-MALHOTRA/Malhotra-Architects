import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assests/images/Logo.jpg";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}

          <img
            src={logo}
            className="mr-3 h-8 sm:h-10 lg:h-12 flex items-center ml-2 "
            alt="Logo"
          />

          {/* Mobile Menu Button and Blog Button */}
          <div className="flex items-center lg:hidden">
            <Link
              to="/login"
              className="text-white bg-gray-900 hover:bg-blue-600 font-medium rounded-lg text-sm px-4 py-2 mr-2 focus:outline-none transition-colors duration-200"
            >
              Blog
            </Link>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-900 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Blog Button */}
          <div className="hidden lg:flex items-center lg:order-2">
            <Link
              to="/login"
              className="text-white bg-gray-900 hover:bg-blue-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-colors duration-200"
            >
              Blog
            </Link>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {[
                { path: "/", name: "Home" },
                { path: "/about", name: "About" },
                { path: "/services", name: "Services" },
                { path: "/project", name: "Projects" },
                { path: "/contact", name: "Contact" },
              ].map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 
                                            ${
                                              isActive
                                                ? "text-blue-600"
                                                : "text-gray-900"
                                            }
                                            border-b border-gray-100 
                                            hover:bg-gray-50 lg:hover:bg-transparent 
                                            lg:border-0 hover:text-blue-600 lg:p-0
                                            ${
                                              item.path === "/contact"
                                                ? "border-b-0"
                                                : ""
                                            }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
