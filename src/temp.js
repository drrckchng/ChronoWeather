import { fetchWeatherApi } from 'openmeteo';

export default async function getTemp(date, coordinates, mode) {
  const params = {
    "latitude": coordinates[0],
    "longitude": coordinates[1],
    "start_date": date,
    "end_date": date,
    "hourly": "temperature_2m",
  };

  let url = "";
  if(mode === "hist") {
    url = "https://archive-api.open-meteo.com/v1/archive";
  } else if (mode === "today") {
    url = "https://api.open-meteo.com/v1/forecast";
  }

  const responses = await fetchWeatherApi(url, params);

  // Helper function to form time ranges
  const range = (start, stop, step) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];

  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();
  const timezone = response.timezone();
  const timezoneAbbreviation = response.timezoneAbbreviation();
  const latitude = response.latitude();
  const longitude = response.longitude();

  const hourly = response.hourly();

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    hourly: {
      time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
        (t) => new Date((t + utcOffsetSeconds) * 1000)
      ),
      temperature2m: hourly.variables(0).valuesArray(),
    },
  };

  const temperatures = weatherData.hourly.temperature2m;

  return [Math.max.apply(Math, temperatures), Math.min.apply(Math, temperatures)];
}
	