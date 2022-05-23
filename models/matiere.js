const mongoose = require('mongoose');

const matiereSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { data: Buffer, contentType: String },
});

module.exports = mongoose.model('Matiere', matiereSchema);
