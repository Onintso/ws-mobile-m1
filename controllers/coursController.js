const Cours = require('../models/cours');
const multer = require('multer');

const Storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single('testImage');

exports.addCours = async (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const cours = new Cours({
        name: req.body.name,
        typeCours: req.body.typeCours,
        idMatiere: req.body.IdMatiere,
        image: {
          data: req.file.filename,
          contentType: 'image/png',
        },
      });
      cours
        .save()
        .then(() => res.status(201).json({ message: 'cours creer' }))
        .catch((error) => {
          res.status(400).json({ error });
        });
    }
  });
};

exports.getCours = async (req, res, next) => {
  await Cours.find({
    $and: [
      { idMatiere: req.params.idMatiere },
      { typeCours: req.params.typeCours },
    ],
  })
    .then((Cours) => res.status(201).json(Matieres))
    .catch((error) => res.status(404).json(error));
  next();
};
