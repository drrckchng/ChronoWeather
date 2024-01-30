import getPastTemp from './historical-temp.js';
import getCoordinates from './coordinates.js';
import { getDates } from './date.js';

// TODO: Upon page load, ask user for loc perms and get weather

const location = prompt("Enter City: ");
const coordinates = await getCoordinates(location);
console.log(coordinates);

const dates = getDates();

for(let i = 0; i < dates.length; i++) {
  const temp = await getPastTemp(dates[i], coordinates);
  console.log(dates[i] + " " + temp);
}
