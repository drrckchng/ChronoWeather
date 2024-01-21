import getPastTemp from './getHistoricTemp.js';

// TODO: Add function to take location -> lat,long
// TODO: Pass lat, long to getPastTemp() call
const temp = await getPastTemp("1940-01-21", "1940-01-21");

console.log(temp);
