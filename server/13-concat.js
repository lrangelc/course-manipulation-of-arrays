console.clear();

const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
  const element = othersElements[index];
  newArray.push(element);
}

console.log(newArray);

const result0 = elements.concat(othersElements);
console.log(result0);

const result1 = [...elements, ...othersElements, ...'random'];
console.log(result1);

const result2 = [...elements, ...othersElements, 'random'];
console.log(result2);

elements.push(...othersElements);
console.log('elements',elements)

elements.push(othersElements);
console.log('elements',elements)

