import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RocketPage from './components/pages/RocketPage';
import MissionPage from './components/pages/MissionPage';
import ProfilePage from './components/pages/ProfilePage';
import Navbar from './components/pages/Navbar';
import './App.css';

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RocketPage />} />
        <Route exact path="mission" element={<MissionPage />} />
        <Route exact path="my-profile" element={<ProfilePage />} />
      </Routes>
    </main>
  );
}

export default App;
