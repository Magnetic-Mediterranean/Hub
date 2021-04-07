const express = require('express');
const router = express.Router();
const { flights } = require('./controller/flights');

router.get('/flights/*', flights);

module.exports = router;
