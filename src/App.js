import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import EventDetailsPage from './pages/EventDetailsPage';
import CreateEventPage from './pages/CreateEventPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event/:id" element={<EventDetailsPage />} />
        <Route path="/create-event" element={<CreateEventPage />} />
      </Routes>
    </Router>
  );
}

export default App;
