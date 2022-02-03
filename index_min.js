const {send} = require('micro');
const axios = require('axios');
const _ = require('lodash');

const endpoints = [
  '/source1',
  '/source2'
];

const config = {
  baseURL: 'https://discovery-stub.comtravo.com',
  timeout: 1000,
  auth: {
    username: 'ct_interviewee',
    password: 'supersecret',
  },
};

module.exports = async (req, res) => {
  try {
    const [{data: {flights: flights1}}, {data: {flights: flights2}}] = await Promise.all(endpoints.map((endpoint) => axios.get(endpoint, config)));

    const flights = _.uniqWith(_.concat(flights1, flights2), (f1, f2) => _.isEqualWith(f1['slices'], f2['slices'], [
          'flight_number',
          'departure_date_time_utc',
          'arrival_date_time_utc'
        ]));

    res.setHeader('content-type', 'application/json').end(JSON.stringify({'flights': flights}));
  } catch (err) {
    send(res, 500, err.message);
  }
};
