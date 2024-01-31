import { format, sub } from 'date-fns';

// Return array of dates formatted as strings
export function getDates() {
  const today = format(new Date(), "yyyy-MM-dd");
  const years =
    [1, 5, 10, 15, 20, 25,
    30, 35, 40, 45, 50, 55,
    60, 65, 70, 75, 80];
  const dates = [];
  for(let i = 0; i < years.length; i++) {
    const newDate = format(sub(today, {
      years: years[i]
    }), "yyyy-MM-dd");
    dates.push(newDate);
  }
  return dates;
}