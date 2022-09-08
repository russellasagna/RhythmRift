import { useState, useEffect } from 'react';
import * as musicAPI from '../../utilities/music-api';
import './FeaturedPage.css';

export default function FeaturedPage() {
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
        <div>
            <p style={{color: "red"}}>
            {JSON.stringify(results[0])}
            </p>
        </div>
    );
}