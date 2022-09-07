// routes/api/features.js

const express = require('express');
const router = express.Router();
const featuresCtrl = require('../../controllers/api/features');

// GET /api/features
router.get('/', featuresCtrl.show);

module.exports = router;
