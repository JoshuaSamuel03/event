// src/components/EventCard.js
import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img className="w-full h-40 object-cover" src={event.image} alt={event.name} />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-blue-600 mb-2">{event.name}</h3>
        <p className="text-gray-700 mb-4">{event.description}</p>
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <FaCalendarAlt className="mr-2" /> {event.date}
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <FaMapMarkerAlt className="mr-2" /> {event.location}
        </div>
      </div>
      <div className="px-6 py-4 bg-blue-50">
        <span className="text-sm font-semibold text-blue-700">{event.category}</span>
      </div>
    </div>
  );
};

export default EventCard;
