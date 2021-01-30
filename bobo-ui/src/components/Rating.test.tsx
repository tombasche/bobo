import { toEmoji } from './Rating';

test('Convert a number into a graphical representation of a rating', () => {
  const result = toEmoji(1.0);
  expect(result).toEqual('😠');
});
