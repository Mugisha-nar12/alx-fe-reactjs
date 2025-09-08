import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    backgroundColor: '#181e29ff',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    maxWidth: '100%',
    boxSizing: 'border-box',
    gap: '10px',
    
  };

  const brandStyle = {
    color: '#12a9e0d3',
    textDecoration: 'none',
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginRight: '20px'
  };

  const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    gap: '25px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1em',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const activeLinkStyle = {
    backgroundColor: '#34b4d8ff',
    color: '#282c34',
  };

  return (
    <nav style={navStyle}>
      <NavLink to="/" style={brandStyle}>MyCompany</NavLink>
      <ul style={ulStyle}>
        <li>
          <NavLink to="/" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}>About</NavLink>
        </li>
        <li>
          <NavLink to="/services" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;