const axios = require('axios');
const path = 'ec2-3-142-95-22.us-east-2.compute.amazonaws.com:3000';


const flights = (req, res, next) => {
  axios(path + req.url)
  .then(({ data }) => {
    res.send(data);
    next();
  })
  .catch((err) => {
    res.status(400);
    next();
  })
}

module.exports = flights;
