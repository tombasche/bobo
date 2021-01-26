import { DateTime } from 'luxon';

export const parseServerDate = (serverDate: string): Date => {
    return DateTime.fromSQL(serverDate + " UTC").toJSDate()
}