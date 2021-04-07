const axios = require('axios');

const path = 'http://ec2-13-52-242-226.us-west-1.compute.amazonaws.com:3000'

const activities = (req, res) => {
  axios.post(path + '/activities', req.body)
  .then(({ data }) => {
    res.send(data);
  })
  .catch((err) => {
    res.send('error');
  })
}

module.exports = activities;