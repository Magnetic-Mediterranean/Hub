const axios = require('axios');

const hotels = (req, res) => {
  console.log(req.url)
  axios.get(`http://52.91.136.121:4000${req.url}`).then((response) => {

    res.send(response.data);
  })
  .catch((err) => {
    res.status(404);
  })
}

module.exports = hotels;
