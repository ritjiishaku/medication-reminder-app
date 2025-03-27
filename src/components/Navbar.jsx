import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-neutral-50 p-4 text-blue-500 border-b border-neutral-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-8">
        <h1 className="text-2xl font-bold">MedRemind</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-blue-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/medications" className="hover:text-blue-700">
              Medications
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
