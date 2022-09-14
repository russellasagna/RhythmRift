const fetch = require('node-fetch');
const Song = require('../../models/favorite');

module.exports = {
    getFavorites,
    addFavorite,
    deleteFavorite,
};

async function getFavorites(req, res) {
    console.log(req.user._id);
    const songs = await Song.find({users: req.user._id});
    console.log(songs);
    res.json(songs);
}

// Add an item to the favorites
async function addFavorite(req, res) {
    // console.log(req.body);
    const song = await Song.findOne({trackId: req.body.trackId});
    if (song) {
        song.users.push(req.user._id);
        await song.save();
        res.json(song);
    } else {
        // req.body.users(req.user._id);
        const newSong = new Song(req.body.data);
        newSong.users = req.user._id;
        await newSong.save();
        res.json(newSong);
    }
}

async function deleteFavorite(req, res) {
    // const song = await Song.findOne({trackId: req.body.trackId});
    // console.log(req.body.data);
    // if (song) {
    //     song.users.pop(req.user._id);
    //     await song.save();
    //     res.json(song);
    // }
    // res.json(song);
}