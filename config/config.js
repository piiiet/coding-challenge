const endpoints = [
  '/source1',
  '/source2'
];

const request = {
  baseURL: 'https://discovery-stub.comtravo.com',
  timeout: 1000,
  auth: {
    username: 'ct_interviewee',
    password: 'supersecret',
  },
};

module.exports = {
  endpoints,
  request
}
