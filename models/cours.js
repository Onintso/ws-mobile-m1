const mongoose = require('mongoose');

const CoursShema = mongoose.Schema({
  name: { type: String, required: true },
  idMatiere: { type: mongoose.Schema.Types.ObjectId, required: true },
  typeCours: { type: String, require: true },
  image: { data: Buffer, contentType: String },
});

module.exports = mongoose.model('Cours', CoursShema);
