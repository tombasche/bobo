import { parseSimpleDate } from "./parse";


test('Parse the finished / started date to a readable format', () => {
    const finished = "2020-01-01"
    const result = parseSimpleDate(finished)
    expect(result).toEqual("Wed, Jan 1, 2020");
});

test('Parse a more ambiguous looking date', () => {
    const finished = "2020-03-01"
    const result = parseSimpleDate(finished)
    expect(result).toEqual("Sun, Mar 1, 2020");
})