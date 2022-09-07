import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';
import FeaturedPage from '../FeaturedPage/FeaturedPage';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <FeaturedPage />
      <Routes>
        {/* Route components in here */}
        {/* <Route path='/login' element={<Component />} /> */}
      </Routes>
    </main>
  );
}
