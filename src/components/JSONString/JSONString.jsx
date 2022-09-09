import { useState, useEffect } from 'react';
import * as musicAPI from '../../utilities/music-api';

export default function JSONString() {
    const [songs, setSongs] = useState([]);
    const results = Object.values(songs)[1];
    useEffect(function() {
        async function getSongs() {
            const songs = await musicAPI.getTracks();
            setSongs(songs);
        }
        getSongs();
    }, []);
    return (
        <>
            <p style={{ color: "red" }}>
                {/* {JSON.stringify(results[0])} */}
            </p>
        </>
    );
}