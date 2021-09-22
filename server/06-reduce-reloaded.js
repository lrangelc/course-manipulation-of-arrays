console.clear();

const items = [1, 3, 2, 3];

const result0 = items.reduce((obj, item) => {
  if (obj[item]) {
    obj[item]++;
  } else {
    obj[item] = 1;
  }
  return obj;
}, {});
console.log(result0);

const result1 = items.reduce((obj, item) => {
  obj[item] ? obj[item]++ : (obj[item] = 1);
  return obj;
}, {});
console.log(result1);

const data = [
  {
    name: 'Nicolas',
    level: 'low',
  },
  {
    name: 'Andrea',
    level: 'medium',
  },
  {
    name: 'Zulema',
    level: 'hight',
  },
  {
    name: 'Santiago',
    level: 'low',
  },
  {
    name: 'Valentina',
    level: 'medium',
  },
  {
    name: 'Lucia',
    level: 'hight',
  },
];

const result2 = data
  .map((item) => item.level)
  .reduce((obj, level) => {
    obj[level] ? obj[level]++ : (obj[level] = 1);
    return obj;
  }, {});
console.log(result2);

const ranges = [
  { ini: 1, fin: 5 },
  { ini: 6, fin: 7 },
  { ini: 8, fin: 8 },
  { ini: 9, fin: 10 },
  { ini: 11, fin: 100 },
];

const numbers = [1, 2, 3, 3, 4, 5, 2, 1, 1, 3, 4, 5, 6, 7, 5, 5, 4, 7, 8, 9, 8, 7, 5, 4, 5, 8, 9, 45];

console.log(ranges);

numbers.map((itemNumber) => {
  ranges.filter((itemRange, index) => {
    if (itemNumber >= itemRange.ini && itemNumber <= itemRange.fin) {
      if (itemRange.count) {
        itemRange.count++;
      } else {
        itemRange.count = 1;
      }
      return itemRange;
    }
  });
});

console.log(ranges);
