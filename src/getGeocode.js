export default async function getGeocode(location) {
  const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=5&language=en&format=json`);

  // TODO: Add error handling in case of no result
  const matches = await response.json();
  const coordinates = [matches.results[0].latitude, matches.results[0].longitude];
  
  return coordinates;
}
