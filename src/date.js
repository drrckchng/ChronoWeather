import { format } from 'date-fns';

export function getDates() {
  const today = format(new Date(), "yyyy-MM-dd");
  return today;
}