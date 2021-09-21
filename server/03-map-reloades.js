console.clear();

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
    delivered: true,
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
  },
];

const newArray0 = orders.map((item) => item.total);
const newArray1 = orders.map((item) => {
  item.tax = 0.12;
  return item;
});
const newArray2 = orders.map((item) => {
  return { ...item, isr: 0.05 };
});

console.dir(JSON.stringify(orders));
console.dir(JSON.stringify(newArray0));
console.dir(JSON.stringify(newArray1));
console.dir(JSON.stringify(newArray2));
console.log(orders)
console.log(newArray2)
