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

  return `${rounded(toDays(hours))} days ago`;
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

const rounded = (n: number): string => {
  return n.toFixed(0);
};
