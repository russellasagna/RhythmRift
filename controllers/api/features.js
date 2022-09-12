const fetch = require('node-fetch');

module.exports = {
    getSongs,
};

async function getSongs(req, res) {
    console.log(req.body.query);
    const BASE_URL = `https://itunes.apple.com/search?term=${req.body.query}&limit=20`;
    // const options = {
    //     headers: {
    //       'Authorization': '',
    //       'Content-Type': 'application/json',
    //     }
    // };
    const songs = await fetch(BASE_URL).then(res => res.json());
    console.log(songs);
    res.json(songs.results);
}