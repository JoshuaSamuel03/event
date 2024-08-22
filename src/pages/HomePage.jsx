// src/pages/HomePage.jsx
import React from 'react';
import EventCard from '../components/EventCard';

const HomePage = ({ events }) => {
  return (
    <div className="bg-blue-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-12">
          Discover Upcoming Events
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
