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
        <div className='main'>
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
            {/* {songs.length > 2 ?
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
            } */}
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
                        </a>
                    </>
                )}
            </div>
        </div>
    );
}