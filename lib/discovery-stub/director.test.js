const config = require('../../config/config');
const rewire = require('rewire');
const director = rewire('./director');
const {response1, response2, uniqFlights} = require('./mockdata');

describe('director.getFlights', () => {
  test('should return array of unique flights', async () => {
    director.__set__('getResponse', jest.fn(() => [response1, response2]));
    expect(uniqFlights).toEqual(await director.getFlights(config));
  });
});
