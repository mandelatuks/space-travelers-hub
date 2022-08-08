import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RocketPage from './components/pages/RocketPage';
import MissionPage from './components/pages/MissionPage';
import ProfilePage from './components/pages/ProfilePage';
import Navbar from './components/pages/Navbar';
import { fetchRockets } from './Redux/Rocket/rockets';
import { FetchMissions } from './Redux/Mission/Mission';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
    dispatch(FetchMissions());
  }, [dispatch]);

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
