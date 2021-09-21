console.clear();

const letters = ['a', 'b', 'c'];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log('for', element);
}

letters.forEach((element) => console.log(element));

letters.forEach((element, index) => {
  console.log('forEach', element, index);
});
