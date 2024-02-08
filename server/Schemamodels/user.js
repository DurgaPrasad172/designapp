const mongoose = require('mongoose');
const { Schema } = mongoose;

const PoemSchema = new Schema({
  poemTitle: {
    type: String,
    required: true
  },

  poemBody: {
    type: String,
    required: true
  },

  authorName: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Poemdata', PoemSchema);
