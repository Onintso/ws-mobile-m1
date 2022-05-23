const express = require('express');
const router = express.Router();

const MatiereController = require('../controllers/matiereController');

const UserController = require('../controllers/uersController');
const vocab = require('../controllers/vocabulaire.controller.js');
const matiere = require('../models/matiere');
const cours = require('../controllers/coursController');

router.post('/addmatiere', MatiereController.addMatiere);

router.post('/addUser', UserController.addUser);
router.post('/authentification', UserController.authentification);
router.post('/getChiffre');
router.get('/getToken', UserController.getToken);
router.post('/addmatiere', MatiereController.addMatiere);
router.get('/getMatiere', MatiereController.getMatiere);
router.post('/upload', MatiereController.uploadsImage);
router.get('/searchMatiere', MatiereController.search);
router.get('/getCours/:idMatiere/:typeCours', cours.getCours);
router.post('/addCousr', cours.addCours);

router.get('/getByType', vocab.findByType);

module.exports = router;
