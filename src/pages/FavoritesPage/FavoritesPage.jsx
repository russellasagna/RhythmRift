import { useState, useEffect } from 'react';
import * as favoritesAPI from '../../utilities/favorites-api';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(null);

  useEffect(function() {
    async function pullFavorites() {
      const favorites = await favoritesAPI.getFavorites();
      setFavorites(favorites);
    }
    pullFavorites();
  }, []);

  return (
    <main className="FavoritesPage">
      <div>{typeof favorites}</div>
    </main>
  );
}