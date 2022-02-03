const {send} = require('micro');
const config = require('./config/config');
const director = require('./lib/discovery-stub/director');

module.exports = async (req, res) => {
  try {
    res.setHeader('content-type', 'application/json')
    res.end(JSON.stringify({'flights': await director.getFlights(config)}));
  } catch (err) {
    send(res, 500, err.message);
  }
};
