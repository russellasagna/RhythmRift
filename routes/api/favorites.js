const express = require('express');
const router = express.Router();
const favoritesCtrl = require('../../controllers/api/favorites');

// GET /api/favorites/
router.get('/', favoritesCtrl.getFavorites);
// POST /api/favorites/:id
router.post('/:id', favoritesCtrl.addFavorite);
// DELETE /api/favorites/:id
router.delete('/:id', favoritesCtrl.deleteFavorite);

module.exports = router;
