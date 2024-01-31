import getTemp from './temp.js';
import getCoordinates from './coordinates.js';
import { getDates } from './date.js';

// TODO: Upon page load, ask user for loc perms and get weather

const location = prompt("Enter City: ");
console.log(location);
const coordinates = await getCoordinates(location);

// TODO: Get today's current weather

const dates = getDates();

for(let i = 0; i < dates.length; i++) {
  let mode = "";
  if(i === 0) {
    mode = "today";
  } else {
    mode = "hist";
  }
  const temp = await getTemp(dates[i], coordinates, mode);
  console.log(dates[i] + " " + temp);
}
