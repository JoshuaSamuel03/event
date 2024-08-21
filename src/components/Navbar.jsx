// src/components/Navbar.js
import React from 'react';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-xl font-bold flex items-center">
          <FaHome className="mr-2" /> Event Organizer
        </a>
        <div>
          <a href="/" className="text-white ml-4 hover:underline">Home</a>
          <a href="/create-event" className="text-white ml-4 hover:underline">Create Event</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
