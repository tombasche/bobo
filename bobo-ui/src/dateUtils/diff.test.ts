import { diffDate } from './diff';

test('Display a difference of two dates moments apart', () => {
  const now = new Date(2020, 1, 1, 14, 30, 0);
  const then = new Date(2020, 1, 1, 14, 29, 58);
  const result = diffDate(now, then);
  expect(result).toEqual('just now');
});

test('Display a difference of two dates seconds apart', () => {
  const now = new Date(2020, 1, 1, 14, 30, 0);
  const then = new Date(2020, 1, 1, 14, 29, 30);
  const result = diffDate(now, then);
  expect(result).toEqual('30 seconds ago');
});

test('Display a difference of two dates minutes apart', () => {
  const now = new Date(2020, 1, 1, 14, 30, 0);
  const then = new Date(2020, 1, 1, 14, 0, 0);
  const result = diffDate(now, then);
  expect(result).toEqual('30 minutes ago');
});

test('Display a difference of two dates hours apart', () => {
  const now = new Date(2020, 1, 1, 14, 30, 0);
  const then = new Date(2020, 1, 1, 12, 30, 0);
  const result = diffDate(now, then);
  expect(result).toEqual('2 hours ago');
});

test('Display a difference of two dates days apart', () => {
  const now = new Date(2020, 1, 1, 14, 30, 0);
  const then = new Date(2019, 12, 30, 14, 30, 0);
  const result = diffDate(now, then);
  expect(result).toEqual('2 days ago');
});

test('Display a difference of two dates months apart', () => {
  const now = new Date(2021, 4, 1, 0, 0, 0);
  const then = new Date(2021, 1, 1, 0, 0, 0);
  const result = diffDate(now, then);
  expect(result).toEqual('3 months ago');
});

test('Display a difference of two dates years apart', () => {
  const now = new Date(2021, 1, 1, 0, 0, 0);
  const then = new Date(2020, 1, 1, 0, 0, 0);
  const result = diffDate(now, then);
  expect(result).toEqual('1 year ago');
});

test('Round the result to the nearest unit', () => {
  const now = new Date(2020, 1, 1, 14, 30, 0);
  const then = new Date(2019, 12, 29, 14, 28, 92832);
  const result = diffDate(now, then);
  expect(result).toEqual('2 days ago');
});
