// models/movie.js

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  introduce: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Movie', movieSchema);
