const SpotifyAPI = require('../');

module.exports = {
    show,
};

const BASE_URL = 'https://api.spotify.com';

function show(req, res) {
    const options = {
        headers: {
          'Authorization': '',
          'Content-Type': 'application/json',
        }
    };
    const songs = await fetch(BASE_URL, options).then(res => res.json());
}