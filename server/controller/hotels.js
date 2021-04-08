const axios = require('axios');

const hotels = (req, res) => {
  axios.get(`http://ec2-52-91-136-121.compute-1.amazonaws.com:${req.url}`).then((response) => {
    res.send(response.data);
  })
  .catch((err) => {
    res.status(404);
  })
}

module.exports = hotels;
