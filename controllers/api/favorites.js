const fetch = require('node-fetch');
const Song = require('../../models/favorite');

module.exports = {
    getFavorites,
    addFavorite,
};

async function getFavorites(req, res) {
    console.log(req.user._id);
    const songs = await Song.find({users: req.user._id});
    console.log(songs);
    res.json(songs);
}

async function addFavorite(req, res) {
    const song = await Song.findOne({trackId: req.body.trackId});
    if (song) {
        song.users.push(req.user._id);
        await song.save();
        res.json(song);
    } else {
        const newSong = new Song(req.body.data);
        newSong.users = req.user._id;
        await newSong.save();
        res.json(newSong);
    }
}