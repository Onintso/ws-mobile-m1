const express = require('express');
const router = express.Router();

const MatiereController = require('../controllers/matiereController');

router.post('/addmatiere', MatiereController.addMatiere);

module.exports = router;
