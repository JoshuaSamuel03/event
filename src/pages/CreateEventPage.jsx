// src/pages/CreateEventPage.js
import React, { useState } from 'react';

const CreateEventPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    location: '',
    category: '',
    image: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold my-8">Create Event</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Event Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {/* Add other form fields */}
        <div className="mb-4">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEventPage;
