import getPastTemp from './getHistoricTemp.js';
import getGeocode from './getGeocode.js';

// TODO: Upon page load, ask user for loc perms and get weather

const geocode = await getGeocode("Seoul");
console.log(geocode);

// TODO: Add function to take location -> lat,long
// TODO: Pass lat, long to getPastTemp() call
const temp = await getPastTemp("1940-01-21", "1940-01-21");
console.log(temp);
