const reverse = (bit) => {
  return bit === 0 ? 1 : 0;
};

const getReversals = (arr, expected) => {
  let reversals = 0;

  arr.forEach((digit) => {
    if (expected !== digit) {
      reversals++;
    }

    expected = reverse(expected);
  });

  return reversals;
};

const solution = (arr) => {
  return Math.min(getReversals(arr, 0), getReversals(arr, 1));
};

console.log(solution([1, 0, 1, 0, 1, 1]));
