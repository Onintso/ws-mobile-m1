const Matiere = require('../models/matiere');
const multer = require('multer');

exports.addMatiere = async (req, res, next) => {
  delete req.body._id;
  const matieres = new Matiere({
    ...req.body,
  });
  await matieres
    .save()
    .then(() => res.status(201).json({ message: 'matiere creer' }))
    .catch((error) => {
      res.status(400).json({ error });
    });
  next();
};

exports.getMatiere = async (req, res, next) => {
  await Matiere.find()
    .then((Matieres) => res.status(201).json(Matieres))
    .catch((error) => res.status(404).json(error));
  next();
};
const Storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single('testImage');

exports.search = async (req, res, next) => {
  await Matiere.find({ name: { $regex: '.*' + req.params.key + '.*' } })
    .then((data) => res.status(201).json(data))
    .catch((error) => res.statatus(404).json(error));
  next();
};

exports.uploadsImage = async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const matiere = new Matiere({
        name: req.body.name,
        image: {
          data: req.file.filename,
          contentType: 'image/png',
        },
      });
      matiere
        .save()
        .then(() => res.status(201).json({ message: 'matiere creer' }))
        .catch((error) => {
          res.status(400).json({ error });
        });
    }
  });
};
