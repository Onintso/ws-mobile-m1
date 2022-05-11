const mongoose = require('mongoose');

const matiereSchema = mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model('Matiere', matiereSchema);
