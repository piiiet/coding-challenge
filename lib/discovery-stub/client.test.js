const axios = require('axios');
const config = require('../../config/config');
const client = require('./client');
const {response1} = require('./mockdata')

jest.mock('axios');

describe('client.getResponse', () => {
  test('should fetch array of 2 responses', async () => {
    axios.get.mockResolvedValue(response1);
    expect(await client.getResponse(config)).toEqual([response1, response1]);
  });
});
