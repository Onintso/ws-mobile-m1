const Matiere = require('../models/matiere');

exports.addMatiere = async (req, res, next) => {
  delete req.body._id;
  const matieres = new Matiere({
    ...req.body,
  });
  await matieres
    .save()
    .then(() => res.status(201).json({ message: '---- plat creer' }))
    .catch((error) => {
      res.status(400).json({ error });
    });
  next();
};
