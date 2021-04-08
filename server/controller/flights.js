const axios = require('axios');
const path = 'http://ec2-3-142-95-22.us-east-2.compute.amazonaws.com:3000';


const flights = (req, res) => {
  axios(path + req.url)
  .then(({ data }) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(400);
  })
}

module.exports = flights;
