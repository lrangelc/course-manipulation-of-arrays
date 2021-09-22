console.clear();

const numbers = [1, 30, 49, 29, 10, 13];

let result0 = undefined;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 30) {
    result0 = element;
    break;
  }
}
console.log('result0', result0);

console.log(
  'result1',
  numbers.find((item) => item == 30)
);

const products = [
  {
    name: 'Pizza',
    price: 12,
    id: '🍕',
  },
  {
    name: 'Burger',
    price: 23,
    id: '🍔',
  },
  {
    name: 'Hot dog',
    price: 34,
    id: '🌭',
  },
  {
    name: 'Hot cakes',
    price: 355,
    id: '🥞',
  },
];

console.log(
  'products - find',
  products.find((item) => item.id == '🍔')
);

console.log(
  'products - findIndex',
  products.findIndex((item) => item.id == '🍔')
);
