// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Event Organizer
        </Link>
        <div>
          <Link to="/" className="text-white mr-4">
            Home
          </Link>
          <Link to="/create" className="bg-white text-blue-800 py-2 px-4 rounded">
            Add Event
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
