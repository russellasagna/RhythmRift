import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';
import FeaturedPage from '../FeaturedPage/FeaturedPage';
import ExplorePage from '../ExplorePage/ExplorePage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import AuthPage from '../AuthPage/AuthPage';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path='/signin' element={<AuthPage user={user} setUser={setUser}/>} />
        <Route path='/featured' element={<FeaturedPage />} />
        <Route path='/explore' element={<ExplorePage user={user}/>} />
        <Route path='/favorites' element={<FavoritesPage user={user} setUser={setUser}/>} />
        <Route path="/*" element={<Navigate to="/featured" />} />
      </Routes>
    </main>
  );
}
