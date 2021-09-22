function solution(A) {
  let countFlipsWithZero = 0;
  let countFlipsWithOne = 0;

  let valueCheck = 0;
  A.forEach((value) => {
    if (value === valueCheck) {
      countFlipsWithZero = countFlipsWithZero + 1;
    } else {
      countFlipsWithOne = countFlipsWithOne + 1;
    }

    valueCheck = valueCheck == 0 ? 1 : 0;
  });

  if (countFlipsWithZero < countFlipsWithOne) {
    return countFlipsWithZero;
  }

  return countFlipsWithOne;
}

module.exports = solution;
