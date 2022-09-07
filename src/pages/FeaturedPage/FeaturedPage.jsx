import { useState, useEffect } from 'react';
import * as spotifyAPI from '../../utilities/spotify-api';
import './FeaturedPage.css';

export default function FeaturedPage() {
    const [songs, setSongs] = useState([]);
    useEffect(function() {
        async function getSong() {
            const songs = await spotifyAPI.getTracks();
            setSongs(songs);
        }
        getSong();
    }, []);
    return (
        <div>
            <br />
            Spotify JSON:
            <br />
        </div>
    );
}