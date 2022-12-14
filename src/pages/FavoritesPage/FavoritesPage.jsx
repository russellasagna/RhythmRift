import { useState, useEffect } from 'react';
import FavoritesCard from '../../components/FavoritesCard/FavoritesCard';
import * as favoritesAPI from '../../utilities/favorites-api';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(null);

  useEffect(function () {
    async function pullFavorites() {
      const favorites = await favoritesAPI.getFavorites();
      console.log(favorites);
      setFavorites(favorites);
    }
    pullFavorites();
  }, []);
  if (!favorites) return null;
  return (
    <main className="FavoritesPage">
      <hr />
      <h1>Favorites</h1>
      <div>
        {favorites.map((f) =>
          <FavoritesCard
            trackName={f.trackName}
            artistName={f.artistName}
            artworkUrl100={f.artworkUrl100}
            trackViewUrl={f.trackViewUrl}
            key={f.trackId}
          />
        )}
      </div>
    </main>
  );
}