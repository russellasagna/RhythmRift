import { useState, useEffect } from 'react';
import * as musicAPI from '../../utilities/music-api';
import './ExplorePage.css';

export default function ExplorePage() {
    const [query, setQuery] = useState('');
    const [songs, setSongs] = useState([]);
    async function getSongs(e) {
        e.preventDefault();
        const allSongs = await musicAPI.getTracks(query);
        setSongs(allSongs);
    }
    console.log(songs);
    return (
        <div>
            <form onSubmit={getSongs}>
                <input
                    type="text" name='keyword' value={query}
                    onChange={(evt) => setQuery(evt.target.value)}
                    style={{ "textAlign": "center" }}
                    autoComplete="off" placeholder="Enter keywords..."
                    spellCheck="false"
                />
                <button type="submit">Search</button>
            </form>
            <p style={{ color: "red" }}>
                {songs.map((r) => r.artistName)}
            </p>
        </div>
    );
}