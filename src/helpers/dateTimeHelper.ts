import moment from 'moment';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const dateTimeFromSeconds = (timeInSeconds: number): string => {
  return moment(timeInSeconds, 'X').format(DATE_TIME_FORMAT);
};

export const dateTimeFromISOString = (timeString: string): string => {
  return moment(timeString).format(DATE_TIME_FORMAT);
};
