import { useState, useEffect } from 'react';
import * as musicAPI from '../../utilities/music-api';
import './FeaturedPage.css';

export default function FeaturedPage() {
    const [songs, setSongs] = useState([]);
    useEffect(function() {
        async function getSongs() {
            const songs = await musicAPI.getTracks();
            setSongs(Object.values(songs)[1]);
        }
        getSongs();
    }, []);
    return (
        <div>
            <br />
            iTunes JSON:
            <br />
            <p>
            {songs.map((song) => song.kind)}
            </p>
        </div>
    );
}