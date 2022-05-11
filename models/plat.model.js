const mongoose = require("mongoose");

const PlatSchema = mongoose.Schema({
  nom: String,
  prix_achat: Number,
  prix_vente: Number,
  restaurant: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model("Plat", PlatSchema);