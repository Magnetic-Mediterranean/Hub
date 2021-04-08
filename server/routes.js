const express = require('express');
const router = express.Router();
const flights = require('./controller/flights');
const activities = require('./controller/activities');
const hotels = require('./controller/hotels');

router.get('/flights/*', flights);
router.post('/activities', activities);
router.get('/hotels', hotels);

module.exports = router;
