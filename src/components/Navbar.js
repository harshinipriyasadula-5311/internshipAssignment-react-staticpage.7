import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
      <NavLink to="/services" className="nav-link">Services</NavLink>
      <NavLink to="/contact" className="nav-link">Contact</NavLink>

    </nav>
  );
}

export default Navbar;
