import { format } from 'date-fns';

export const dateFormat = (date: Date) => {
  const convertDate = new Date(date);
  return format(convertDate, 'yyyy MM, dd');
};
