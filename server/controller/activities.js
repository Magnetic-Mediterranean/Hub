const axios = require('axios');

const activities = (req, res) => {
  console.log(req.body);
  axios.post('http://ec2-13-52-242-226.us-west-1.compute.amazonaws.com/activities', req.body)
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(400);
  })
}

module.exports = activities;