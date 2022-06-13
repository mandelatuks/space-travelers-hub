import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<RocketPage />} />
      <Route exact path="MissionPage" element={<MissionPage />} />
      <Route exact path="ProfilePage" element={<ProfilePage />} />
    </Routes>
  </main>
  );
}

export default App;
