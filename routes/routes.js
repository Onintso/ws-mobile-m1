const express = require('express');
const router = express.Router();

const MatiereController = require('../controllers/matiereController');

const UserController = require('../controllers/uersController');
const vocab = require('../controllers/vocabulaire.controller.js');

router.post('/addmatiere', MatiereController.addMatiere);

router.post('/addUser', UserController.addUser);
router.post('/authentification', UserController.authentification);
router.get('/getToken', UserController.getToken);
router.post('/addmatiere', MatiereController.addMatiere);
router.get('/getByType', vocab.findByType);

module.exports = router;

