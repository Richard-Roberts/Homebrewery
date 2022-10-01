const express = require('express');
const equipmentController = require('../controllers/equipmentController');
const router = express.Router();

router.get('/',
  equipmentController.getEquipment, (req, res) => (res.status(200).json(res.locals.equipment))
);

router.post('/create',
  equipmentController.createEquipment, (req, res) => (res.status(200).json(res.locals.create)));

module.exports = router;