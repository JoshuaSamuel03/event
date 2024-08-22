// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateEventPage from './pages/CreateEventPage';
import Navbar from './components/Navbar';

const App = () => {
  const [events, setEvents] = useState([
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
  ]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage events={events} />} />
        <Route path="/create" element={<CreateEventPage onAddEvent={addEvent} />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes to the homepage */}
      </Routes>
    </Router>
  );
};

export default App;