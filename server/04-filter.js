console.clear();

const words = ['spray', 'limit', 'elite', 'exuberant'];
const newArray0 = [];

for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if (element.length >= 6) {
    newArray0.push(element);
  }
}

const newArray1 = words.filter((item) => item.length >= 6);
console.log('newArray0', newArray0);
console.log('newArray1', newArray1);
console.log('words', words);

const orders = [
  {
    customerName: 'Nicolas',
    total: 60,
    delivered: true,
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
  },
  {
    customerName: 'Santiago',
    total: 180,
    delivered: false,
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
  },
];

const newArray2 = orders.filter((item) => item.delivered && item.total > 100);
console.log('newArray2', newArray2);

const search = (query) => {
  return orders.filter((item) => {
    return item.customerName.includes(query);
  });
};

console.log(search('Luis'));
console.log(search('Sant'));
