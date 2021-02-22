import { dateDiff, lowResDateDiff } from './diff';

test('Display a difference of two dates moments apart', () => {
  const now = new Date(2020, 1, 1, 14, 30, 0);
  const then = new Date(2020, 1, 1, 14, 29, 58);
  const result = dateDiff(now, then);
  expect(result).toEqual('just now');
});

test('Display a difference of two dates seconds apart', () => {
  const now = new Date(2020, 1, 1, 14, 30, 0);
  const then = new Date(2020, 1, 1, 14, 29, 30);
  const result = dateDiff(now, then);
  expect(result).toEqual('30 seconds ago');
});

test('Display a difference of two dates minutes apart', () => {
  const now = new Date(2020, 1, 1, 14, 30, 0);
  const then = new Date(2020, 1, 1, 14, 0, 0);
  const result = dateDiff(now, then);
  expect(result).toEqual('30 minutes ago');
});

test('Display a difference of two dates a minute apart', () => {
  const now = new Date(2020, 1, 1, 14, 30, 0);
  const then = new Date(2020, 1, 1, 14, 29, 0);
  const result = dateDiff(now, then);
  expect(result).toEqual('a minute ago');
});

test('Display a difference of two dates hours apart', () => {
  const now = new Date(2020, 1, 1, 14, 30, 0);
  const then = new Date(2020, 1, 1, 12, 30, 0);
  const result = dateDiff(now, then);
  expect(result).toEqual('2 hours ago');
});

test('Display a difference of two dates an hour apart', () => {
  const now = new Date(2020, 1, 1, 14, 30, 0);
  const then = new Date(2020, 1, 1, 13, 30, 0);
  const result = dateDiff(now, then);
  expect(result).toEqual('an hour ago');
});

test('Display a difference of two dates days apart', () => {
  const now = new Date(2020, 1, 1, 14, 30, 0);
  const then = new Date(2019, 12, 30, 14, 30, 0);
  const result = dateDiff(now, then);
  expect(result).toEqual('2 days ago');
});

test('Display a difference of two dates months apart', () => {
  const now = new Date(2021, 4, 1, 0, 0, 0);
  const then = new Date(2021, 1, 1, 0, 0, 0);
  const result = dateDiff(now, then);
  expect(result).toEqual('3 months ago');
});

test('Display a difference of two dates years apart', () => {
  const now = new Date(2021, 1, 1, 0, 0, 0);
  const then = new Date(2020, 1, 1, 0, 0, 0);
  const result = dateDiff(now, then);
  expect(result).toEqual('1 year ago');
});

test('Round the result to the nearest unit', () => {
  const now = new Date(2020, 1, 1, 14, 30, 0);
  const then = new Date(2019, 12, 29, 14, 28, 92832);
  const result = dateDiff(now, then);
  expect(result).toEqual('2 days ago');
});

test('Low res version of date diff has minimum of 1 day', () => {
  const now = new Date(2021, 22, 2, 12, 39, 3);
  const then = new Date(2021, 22, 2, 0, 0, 0);
  const result = lowResDateDiff(now, then);
  expect(result).toEqual('today');
});

test('Low res version of date diff returns value of "yesterday"', () => {
  const now = new Date(2021, 22, 2, 12, 39, 3);
  const then = new Date(2021, 22, 1, 0, 0, 0);
  const result = lowResDateDiff(now, then);
  expect(result).toEqual('yesterday');
});
