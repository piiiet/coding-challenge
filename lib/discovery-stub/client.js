const axios = require('axios');

/**
 *
 * @param {object} config
 * @returns {Promise<*>}
 */
async function getResponse(config) {
  return await Promise.all(config.endpoints.map((endpoint) => axios.get(endpoint, config.request)));
}

module.exports = {
  getResponse: getResponse,
};
