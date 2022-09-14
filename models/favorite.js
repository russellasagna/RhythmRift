const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  trackId: { type: String },
  trackName: { type: String },
  artistName: { type: String },
  artworkUrl100: { type: String },
  trackViewUrl: { type: String },
});

module.exports = mongoose.model('Song', songSchema);