import { format } from 'date-fns';

export const dateFormat = (date: Date) => {
  const convertDate = new Date(date);
  return format(convertDate, 'yyyy MM, dd');
};

export const formatMMMdYYYt = (date: Date) => {
  const convertDate = new Date(date);
  return format(convertDate, 'MMMM d, yyyy');
};
