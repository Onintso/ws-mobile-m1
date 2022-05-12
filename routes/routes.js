const express = require('express');
const router = express.Router();

const MatiereController = require('../controllers/matiereController');

const UserController = require('../controllers/uersController');

router.post('/addmatiere', MatiereController.addMatiere);

router.post('/addUser', UserController.addUser);
router.post('/authentification', UserController.authentification);
router.get('/getToken', UserController.getToken);

module.exports = router;
