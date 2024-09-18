import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/navbar'; // Adjust the path as necessary
import Home from './components/Home/home'; // Ensure the path matches the file structure

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here for different pages as needed */}
      </Routes>
    </Router>
  );
};

export default App;