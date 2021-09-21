console.clear();

const totals = [1, 2, 3, 4];

let sum0 = 0;
for (let index = 0; index < totals.length; index++) {
  const element = totals[index];
  sum0 += element;
}
// console.log('sum0', sum0);

// const sum1 = totals.reduce((acumula, element) => acumula + element, 0);
// console.log('sum1', sum1);

// const sum2 = totals.reduce((acumula, element, index) => acumula + index, 0);
// console.log('sum2', sum2);

const sum3 = totals.reduce((acumula, element, index) => {
  console.log('acumula', acumula);
  console.log('element', element);
  console.log('index', index);
  console.log('acumula + index', acumula + index);
  return acumula + index;
}, 0);
console.log('sum3', sum3);
