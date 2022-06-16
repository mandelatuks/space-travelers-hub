import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './page.css';

const Navbar = () => (
  <header>
    <h1>
      <img src={logo} className="app-logo" alt="logo" />
      {' '}
      Space Traveler&#39;s Hub
    </h1>
    <nav className="navBar">
      <ul>
        <li>
          <NavLink to="/">
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink to="mission">
            Missions
          </NavLink>
        </li>
        <li>|</li>
        <li>
          <NavLink to="my-profile">
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
export default Navbar;
