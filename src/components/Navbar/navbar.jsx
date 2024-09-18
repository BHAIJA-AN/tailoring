import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Importing CSS for the Navbar
import logo from '../../assets/logo.png'; // Adjusted path to logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="Brand Logo" className="logo" />
          <span className="brand-name">Eagle Tailor</span>
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="#contact">Contact</Link></li>
        <li><Link to="#customize">Customize</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;