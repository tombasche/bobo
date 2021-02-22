import { DateTime } from 'luxon';

export const parseServerDate = (serverDate: string): Date => {
  return DateTime.fromSQL(serverDate + ' UTC').toJSDate();
};

export const parseSimpleDate = (d: string): string => {
  const date = DateTime.fromISO(d);
  return date.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
};

export const parseSimpleDateToDate = (d: string): Date => {
  return DateTime.fromISO(d).toJSDate();
};

export const serialiseJSDate = (d: Date): string => {
  return DateTime.fromJSDate(d).toFormat('yyyy-LL-dd');
};
