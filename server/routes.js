const express = require('express');
const router = express.Router();
const flights = require('./controller/flights');
const activities = require('./controller/activities');

router.get('/flights/*', flights);
router.post('/activities', activities);

module.exports = router;
