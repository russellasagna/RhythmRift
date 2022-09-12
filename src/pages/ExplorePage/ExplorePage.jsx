import { useState, useEffect } from 'react';
import * as musicAPI from '../../utilities/music-api';
import SearchBar from '../../components/SearchBar/SearchBar';
import './ExplorePage.css';

export default function ExplorePage() {
    async function getSongs(e) {
        e.preventDefault();
        const allSongs = await musicAPI.getTracks(query);
        setSongs(allSongs);
    }
    const [query, setQuery] = useState('');
    const [songs, setSongs] = useState([]);
    console.log(songs);
    return (
        <div>
            {/* <SearchBar getSongs={getSongs} query={query} setQuery={setQuery}/> */}
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
            {songs.length > 2 ?
                <>
                    yes
                    <br />
                    {typeof songs}
                </>
                :
                <>
                    no
                    <br />
                    {typeof songs.trackName}
                </>
            }
            <div className='cardgroup'>
                {songs.map((r) =>
                    <>
                        <div className='card'>
                            <div style={{ color: "red" }}>
                                {r.trackName} <br />
                            </div>
                            <div style={{ color: "cyan" }}>
                                {r.artistName} <br />
                            </div>
                            <a href={r.artistViewUrl}>See on Apple Music</a>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}