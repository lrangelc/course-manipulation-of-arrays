console.clear();

const pets = ['cat', 'dog', 'bat'];
const pet = 'cat';

let result0 = false;
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element == pet) {
    result0 = true;
    break;
  }
}
console.log('for', result0);

console.log('includes', pets.includes(pet));
