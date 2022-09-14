import { useState } from 'react';
import * as musicAPI from '../../utilities/music-api';
import * as favoritesAPI from '../../utilities/favorites-api';
import './ExplorePage.css';

export default function ExplorePage() {
    async function getSongs(e) {
        e.preventDefault();
        const allSongs = await musicAPI.getTracks(query);
        setSongs(allSongs);
    }
    async function handleAddFavorite(song) {
        const data = {
            trackId: song.trackId,
            artistName: song.artistName,
            trackName: song.trackName,
            artworkUrl100: song.artworkUrl100,
            trackViewUrl: song.trackViewUrl,
        };
        await favoritesAPI.addFavorite(data);
    }

    const [query, setQuery] = useState('');
    const [songs, setSongs] = useState([]);
    return (
        <div className='main'>
            <form onSubmit={getSongs}>
                <button type="submit">Search</button>
                <div>
                <input
                    type="text" name='keyword' value={query}
                    onChange={(evt) => setQuery(evt.target.value)}
                    style={{ "textAlign": "center" }}
                    autoComplete="off" placeholder="Enter keywords..."
                    spellCheck="false"
                    />
                </div>
            </form>
            <div className='cardgroup'>
                {songs.map((r) =>
                    <>
                        <a className='card'>
                            <div style={{ color: "red" }}>
                                {r.trackName} <br />
                            </div>
                            <div style={{ color: "cyan" }}>
                                {r.artistName} <br />
                            </div>
                            <img src={r.artworkUrl100}></img>
                            <a href={r.trackViewUrl} target={'_blank'}>See on Apple Music</a>
                            <button onClick={() => handleAddFavorite(r)} type="submit">Add Favorite</button>
                        </a>
                    </>
                )}
            </div>
        </div>
    );
}