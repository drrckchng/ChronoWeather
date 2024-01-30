import { format, sub } from 'date-fns';

// Return array of dates formatted as strings
export function getDates() {
  const today = format(new Date(), "yyyy-MM-dd");
  const years = [1, 5, 10, 20, 30, 40, 50, 60, 70, 80];
  const dates = [];
  for(let i = 0; i < years.length; i++) {
    const newDate = format(sub(today, {
      years: years[i]
    }), "yyyy-MM-dd");
    dates.push(newDate);
  }
  return dates;
}