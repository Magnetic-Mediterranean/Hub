const axios = require('axios');

const hotels = (req, res) => {
  axios.get(`http://52.91.136.121:3000${req.url}`).then((response) => {
    res.send(response.data);
  })
  .catch((err) => {
    res.status(404);
  })
}

module.exports = hotels;
