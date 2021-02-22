export const dateDiff = (now: Date, then: Date): string => {
  const diff: number = now.getTime() - then.getTime();
  const seconds = Math.abs(toSeconds(diff));
  if (seconds < 60) {
    if (seconds < 5) {
      return 'just now';
    }
    return `${rounded(seconds)} seconds ago`;
  }
  const minutes = toMinutes(seconds);
  if (minutes < 60) {
    return `${rounded(minutes)} minutes ago`;
  }
  const hours = toHours(minutes);
  if (hours < 24) {
    return `${rounded(hours)} hours ago`;
  }

  const days = toDays(hours);
  return daysMonthsYearsDisplay(days);
};

const toSeconds = (ms: number): number => {
  return ms / 1000;
};

const toMinutes = (s: number): number => {
  return s / 60;
};

const toHours = (m: number): number => {
  return m / 60;
};

const toDays = (h: number): number => {
  return h / 24;
};

const toMonths = (d: number): number => {
  return d / 30;
};

const toYears = (m: number): number => {
  return m / 12;
};

const rounded = (n: number): number => {
  return Math.round(n);
};

export const dateDiffTilNow = (then: Date): string => {
  return dateDiff(new Date(), then);
};

export const lowResDateDiff = (now: Date, then: Date): string => {
  const diff: number = now.getTime() - then.getTime();
  const days = toDays(toHours(toMinutes(toSeconds(diff))));
  if (days <= 1) return 'today';
  if (days > 1 && days <= 2) return 'yesterday';
  if (days < 30) {
    return `${rounded(days)} days ago`;
  }
  return daysMonthsYearsDisplay(days);
};

const daysMonthsYearsDisplay = (days: number): string => {
  if (days < 30) {
    return `${rounded(days)} days ago`;
  }
  const months = rounded(toMonths(days));
  if (months < 12) {
    return `${months} month${months > 1 ? 's' : ''} ago`;
  }
  const years = rounded(toYears(months));
  return `${years} year${years > 1 ? 's' : ''} ago`;
};
