const axios = require('axios');
const path = 'ec2-13-52-242-226.us-west-1.compute.amazonaws.com/activities';


const activities = (req, res) => {
  console.log(req.body);
  axios(path, req.body)
  .then(({ data }) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(400);
  })
}

module.exports = activities;