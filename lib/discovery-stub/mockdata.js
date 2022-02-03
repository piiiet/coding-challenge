const f1 = {
  slices: [
    {
      flight_number: 1, departure_date_time_utc: 1, arrival_date_time_utc: 1,
    },
    {
      flight_number: 2, departure_date_time_utc: 2, arrival_date_time_utc: 2,
    }],
};

const f2 = {
  slices: [
    {
      flight_number: 3, departure_date_time_utc: 3, arrival_date_time_utc: 3,
    },
    {
      flight_number: 4, departure_date_time_utc: 4, arrival_date_time_utc: 4,
    }],
};

const f3 = {
  slices: [
    {
      flight_number: 1, departure_date_time_utc: 1, arrival_date_time_utc: 1,
    },
    {
      flight_number: 3, departure_date_time_utc: 3, arrival_date_time_utc: 3,
    }],
};

const response1 = {data: {flights: [f1, f2]}};
const response2 = {data: {flights: [f1, f3]}};
const uniqFlights = [f1, f2, f3];

module.exports = {
  response1,
  response2,
  uniqFlights,
};
