import { genresToString } from './GenreDisplay';

test('Expand a list of genres to a single comma-separated string', () => {
  const result = genresToString(['crime', 'fantasy', 'fiction']);
  expect(result).toEqual('Crime, Fantasy, Fiction');
});
