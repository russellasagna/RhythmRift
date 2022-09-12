// routes/api/features.js

const express = require('express');
const router = express.Router();
const featuresCtrl = require('../../controllers/api/features');

// POST /api/features
router.post('/', featuresCtrl.getSongs);

module.exports = router;
