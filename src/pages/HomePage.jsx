// src/pages/HomePage.js
import React from 'react';
import EventCard from '../components/EventCard';

const HomePage = () => {
  const events = [
    {
      name: 'Music Festival',
      description: 'Enjoy live music from various artists.',
      date: '2024-09-01',
      location: 'New York',
      image: process.env.PUBLIC_URL + '/image1.jpg',
      category: 'Music',
    },
    {
      name: 'Art Exhibition',
      description: 'Explore the latest modern art trends.',
      date: '2024-09-10',
      location: 'San Francisco',
      image: process.env.PUBLIC_URL + '/image2.jpg',
      category: 'Art',
    },
    {
      name: 'Tech Conference',
      description: 'Join the tech conference of the year.',
      date: '2024-10-05',
      location: 'Los Angeles',
      image: process.env.PUBLIC_URL + '/image3.jpg',
      category: 'Technology',
    },
    {
      name: 'Food Festival',
      description: 'Taste the world’s best cuisines.',
      date: '2024-08-25',
      location: 'Chicago',
      image: process.env.PUBLIC_URL + '/image4.jpg',
      category: 'Food',
    },
    {
      name: 'Film Premiere',
      description: 'Be the first to see the latest blockbuster.',
      date: '2024-09-20',
      location: 'Los Angeles',
      image: process.env.PUBLIC_URL + '/image5.jpg',
      category: 'Film',
    },
    {
      name: 'Literature Festival',
      description: 'Celebrate in contemporary literature.',
      date: '2024-11-12',
      location: 'Boston',
      image: process.env.PUBLIC_URL + '/image6.jpg',
      category: 'Literature',
    },
  ];

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
