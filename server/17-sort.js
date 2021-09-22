console.clear();

const months = ['March', 'Jan', 'Feb', 'Dec'];

const numbers = [1, 30, 4, 21, 100000];

const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];

const orders = [
  {
    customerName: 'Nicolas',
    total: 600,
    delivered: true,
    date: new Date(2021, 1, 1, 15),
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
    date: new Date(2021, 1, 1, 10),
  },
  {
    customerName: 'Santiago',
    total: 1840,
    delivered: true,
    date: new Date(2021, 1, 1, 20),
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
    date: new Date(2021, 1, 1, 8),
  },
];

months.sort();
console.log({ months });

numbers.sort();
console.log({ numbers });

numbers.sort((a, b) => a - b);
console.log({ numbers });

numbers.sort((a, b) => b - a);
console.log({ numbers });

words.sort();
console.log({ words });

words.sort((a, b) => a.localeCompare(b));
console.log({ words });

orders.sort((a, b) => a.total - b.total);
console.log({ orders });

orders.sort((a, b) => b.total - a.total);
console.log({ orders });

orders.sort((a, b) => b.date.getTime() - a.date.getTime());
console.log({ orders });


const array = ['a', 'bb', 'ccc']; 
const rta = array.map(item => item.length);
console.log(rta)

const array = [['🐸','🐱'],'🐹', ['🐯']]; 
const rta = array.flat();
console.log(rta)


const array = [11,1,13,99,8]; 
array.sort((a,b) => b - a);

console.log(array);