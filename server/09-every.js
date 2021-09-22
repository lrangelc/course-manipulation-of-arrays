console.clear();

const numbers = [1, 30, 49, 29, 10, 13];

let result0 = true;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element >= 40) {
    result0 = false;
    break;
  }
}
console.log('result0', result0);

console.log(
  'result1',
  numbers.every((element) => element < 40)
);

const team = [
  {
    name: 'Nicolas',
    age: 12,
  },
  {
    name: 'Andrea',
    age: 8,
  },
  {
    name: 'Zulema',
    age: 2,
  },
  {
    name: 'Santiago',
    age: 18,
  },
];

console.log(
  'admit this team?',
  team.every((member) => member.age <= 15)
);
