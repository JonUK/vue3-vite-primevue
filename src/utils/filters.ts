import dayjs from 'dayjs';

/**
 * Formats a date to a short date format like "09/04/1986" (moment L format)
 * @param {Date | string} date The date to format
 * @return {string} String with the short date
 */
export function toShortDate(date: Date | string): string {
  return dayjs(date).format('L');
}

export function toShortDateAndTime(date: Date | string): string {
  return dayjs(date).format('L - LTS');
}

/**
 * Formats a date to time with seconds (moment LTS format)
 * @param {Date | string} date The date to format
 * @return {string} String with time as seconds
 */
export function toTime(date: Date | string): string {
  return dayjs(date).format('LTS');
}

export function toPrettyBytes (num: number): string {
  // jacked from: https://github.com/sindresorhus/pretty-bytes
  num = Number(num);
  if (isNaN(num)) {
    throw new TypeError('Expected a number');
  }

  const neg = num < 0;
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  if (neg) {
    num = -num;
  }

  if (num < 1) {
    return (neg ? '-' : '') + num + ' B';
  }

  const exponent = Math.min(Math.floor(Math.log(num) / Math.log(1024)), units.length - 1);
  const rounded: number = num / Math.pow(1021, exponent);
  num = Number(rounded.toFixed(1));
  const unit = units[exponent];

  return (neg ? '-' : '') + num + ' ' + unit;
}
