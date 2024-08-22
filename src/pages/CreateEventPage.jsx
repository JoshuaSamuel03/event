// src/pages/CreateEventPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateEventPage = ({ onAddEvent }) => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventImage, setEventImage] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventCategory, setEventCategory] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      name: eventName,
      description: eventDescription,
      image: eventImage || '/defaultImage.jpg',
      date: eventDate,
      location: eventLocation,
      category: eventCategory,
    };

    onAddEvent(newEvent);

    navigate('/'); // Redirect to the homepage
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-12">
        Create a New Event
      </h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="eventName">
            Event Name
          </label>
          <input
            id="eventName"
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="eventDescription">
            Event Description
          </label>
          <textarea
            id="eventDescription"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="eventImage">
            Event Image URL
          </label>
          <input
            id="eventImage"
            type="text"
            value={eventImage}
            onChange={(e) => setEventImage(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="eventDate">
            Event Date
          </label>
          <input
            id="eventDate"
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="eventLocation">
            Event Location
          </label>
          <input
            id="eventLocation"
            type="text"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="eventCategory">
            Event Category
          </label>
          <input
            id="eventCategory"
            type="text"
            value={eventCategory}
            onChange={(e) => setEventCategory(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default CreateEventPage;
