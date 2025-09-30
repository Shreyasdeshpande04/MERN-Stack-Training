import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <NavLink to="/" className="text-xl font-bold">
          MyApp
        </NavLink>

        {/* Right: Menu */}
        <div className="flex space-x-6">
          <NavLink to="/" className="hover:text-gray-200">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-gray-200">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
