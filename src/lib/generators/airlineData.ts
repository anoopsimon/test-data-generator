interface AirlineData {
  flightNumber: string;
  departure: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  aircraft: string;
  status: string;
}

const cities = ['New York', 'London', 'Tokyo', 'Paris', 'Dubai', 'Singapore'];
const aircrafts = ['Boeing 737', 'Airbus A320', 'Boeing 787', 'Airbus A350'];
const statuses = ['On Time', 'Delayed', 'Boarding', 'Departed', 'Arrived'];

export function generateAirlineData(): AirlineData {
  const departure = cities[Math.floor(Math.random() * cities.length)];
  let destination;
  do {
    destination = cities[Math.floor(Math.random() * cities.length)];
  } while (destination === departure);

  return {
    flightNumber: `${['AA', 'BA', 'EK', 'SQ'][Math.floor(Math.random() * 4)]}${Math.floor(Math.random() * 9000 + 1000)}`,
    departure,
    destination,
    departureTime: new Date(Date.now() + Math.random() * 86400000).toISOString(),
    arrivalTime: new Date(Date.now() + Math.random() * 86400000 + 7200000).toISOString(),
    aircraft: aircrafts[Math.floor(Math.random() * aircrafts.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
  };
}
