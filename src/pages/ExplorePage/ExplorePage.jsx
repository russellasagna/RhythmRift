import { useState } from 'react';
import * as musicAPI from '../../utilities/music-api';
import * as favoritesAPI from '../../utilities/favorites-api';
import './ExplorePage.css';

export default function ExplorePage({ user }) {
    async function getSongs(e) {
        e.preventDefault();
        const allSongs = await musicAPI.getTracks(query);
        setSongs(allSongs);
    }
    async function handleAddFavorite(song) {
        const data = {
            trackId: song.trackId,
            artistId: song.artistId,
            trackName: song.trackName,
            artworkUrl100: song.artworkUrl100,
            trackViewUrl: song.trackViewUrl,
        };
        await favoritesAPI.addFavorite(data);
    }
    async function handleDeleteFavorite(song) {
        await favoritesAPI.deleteFavorite(song);
    }

    const [query, setQuery] = useState('');
    const [songs, setSongs] = useState([]);
    // console.log(songs);
    return (
        <div className='main'>
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
            <div className='cardgroup'>
                {songs.map((r) =>
                    <>
                        {/* <a href={`/explore/${r.trackId}`} className='card'> */}
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
                            {/* <button onClick={() => handleDeleteFavorite(r)} type="submit">Delete Favorite</button> */}
                            {/* {r.users.includes(user) ? */}
                            {/* : */}
                            {/* } */}
                        </a>
                    </>
                )}
            </div>
        </div>
    );
}