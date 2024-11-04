const express = require('express');
const router = express.Router();

// Define the GET route for gadgets
router.get('/gadgets', (req, res) => {
  res.render('gadgets', { title: 'Search Results - Gadgets' });
});

module.exports = router;
