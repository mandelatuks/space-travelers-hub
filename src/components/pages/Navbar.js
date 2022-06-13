import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import './page.css';

const Navbar = () => (
  <header>
    <h1>
      <img src={logo} className="App-logo" alt="logo" />
      {' '}
      Space Traveler&#39;s Hub
    </h1>
    <nav className="navBar">
      <ul>
        <li>
          <NavLink to="/">
            Rocket
          </NavLink>
        </li>
        <li>
          <NavLink to="MissionPage">
            Missions
          </NavLink>
        </li>
        <li>|</li>
        <li>
          <NavLink to="ProfilePage">
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
export default Navbar;
