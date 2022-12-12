const MINUTE = 60 * 1000; // single minute in ms
const HOUR = 60 * 60 * 1000; // single hour in ms
const DAY = 24 * 60 * 60 * 1000; // single day in ms

/**
 * Gets a user readable string for the difference between the passed date and the current date
 */
export function getDateDifferenceString(date: Date, locale: string = 'en-US'): string {
  const now = new Date();
  const diff: number = now.getTime() - date.getTime();
  if (diff > DAY * 30) {
    return date.toLocaleString(locale, {
      year: '2-digit',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: undefined
    });
  } else if (diff > DAY) {
    return `${Math.ceil(diff / DAY)} days ago`;
  } else if (diff > HOUR) {
    return `${new Date(diff).getHours()} hours ago`;
  } else if (diff > MINUTE) {
    return `${new Date(diff).getMinutes()} minutes ago`;
  } else {
    return 'few seconds ago';
  }
}
