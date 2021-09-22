const solution = require('./flip');

test('array with one change', () => {
  expect(solution([1, 0, 1, 0, 1, 1])).toBe(1);
});

test('array with two change', () => {
  expect(solution([1, 1, 0, 1, 1])).toBe(2);
});

test('array with no change', () => {
  expect(solution([0, 1, 0])).toBe(0);
});

test('reverse first 2', () => {
  expect(solution([0, 1, 1, 0])).toBe(2);
});
