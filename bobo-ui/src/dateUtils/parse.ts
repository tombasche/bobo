import { DateTime } from 'luxon';

export const parseServerDate = (serverDate: string): Date => {
  return DateTime.fromSQL(serverDate + ' UTC').toJSDate();
};

export const parseSimpleDate = (d: string): string => {
  const date = DateTime.fromISO(d);
  return date.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
};
