const mongoose = require('mongoose')
const Schema = mongoose.Schema

const videoSchema = new Schema({
    title:  { type: String, required: true},
    category: { type: String, required: true},
    poster: { type: String, required: true},
    url:   { type: String, required: true},
    overview:  String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    meta: {
      votes: Number,
      views:  Number
    }
  });

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;