const _ = require('lodash');
const client = require('./client');

/**
 *
 * @param {object} config
 * @returns {Promise<flights[]>}
 */
async function getFlights(config) {
  const response = await getResponse(config);
  const mergedFlights = getMergedFlights(response);
  return getUniqFlights(mergedFlights);
}

/**
 *
 * @param {object} config
 * @returns {Promise<*>}
 */
async function getResponse(config) {
  return await client.getResponse(config);
}

/**
 *
 * @param {object} response
 * @returns {flights[]}
 */
function getMergedFlights(response) {
  const [{data: {flights: flights1}}, {data: {flights: flights2}}] = response;
  return _.concat(flights1, flights2);
}

/**
 *
 * @param {array} flights
 * @returns {flights[]}
 */
function getUniqFlights(flights) {
  return _.uniqWith(flights, (f1, f2) => _.isEqualWith(f1['slices'], f2['slices'], [
    'flight_number',
    'departure_date_time_utc',
    'arrival_date_time_utc'
  ]));
}

module.exports = {
  getFlights: getFlights,
};
