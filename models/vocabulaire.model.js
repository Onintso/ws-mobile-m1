const mongoose = require("mongoose");

const VocabSchema = mongoose.Schema({
  nom: String,
  img: Number,
  type: Number,
  idMatiere: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model("Vocabulaire", VocabSchema);
