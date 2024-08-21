// src/pages/EventDetailsPage.js
import React from 'react';

const EventDetailsPage = ({ match }) => {
  const event = {
    name: 'Music Festival',
    description: 'Enjoy live music from various artists.',
    date: '2024-09-01',
    location: 'New York',
    image: 'path_to_image',
    category: 'Music',
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold my-8">{event.name}</h1>
      <img src={event.image} alt={event.name} className="w-full h-64 object-cover mb-8" />
      <p className="text-gray-700">{event.description}</p>
      <div className="mt-4">
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
      </div>
    </div>
  );
};

export default EventDetailsPage;
