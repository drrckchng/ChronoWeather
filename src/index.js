import getPastTemp from './getHistoricTemp.js';
import getCoordinates from './getCoordinates.js';

// TODO: Upon page load, ask user for loc perms and get weather

const location = prompt("Enter City: ");
const coordinates = await getCoordinates(location);
console.log(coordinates);

// TODO: Get temps of past 1, 5, 10, 20, 50, 80 years (from today)
const temp = await getPastTemp("1940-01-21", coordinates);
console.log(temp);
