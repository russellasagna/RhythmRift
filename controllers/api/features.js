const fetch = require('node-fetch');

module.exports = {
    getSongs,
};

const BASE_URL = 'https://itunes.apple.com/search?term=jack+johnson&limit=2';

async function getSongs(req, res) {
    const options = {
        headers: {
          'Authorization': '',
          'Content-Type': 'application/json',
        }
    };
    const songs = await fetch(BASE_URL).then(res => res.json());
    console.log(songs);
    res.json(songs);
}