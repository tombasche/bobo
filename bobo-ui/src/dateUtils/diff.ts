export const diffDate = (now: Date, then: Date): string => {
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
