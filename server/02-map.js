console.clear();

const letters = ['a', 'b', 'c'];
const newArray = [];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  newArray.push(`${element.toUpperCase()}-${index}`);
}
console.log(newArray);

const newArray2 = letters.map((element,index) => `${element.toUpperCase()}-${index}`);
console.log(newArray2);
