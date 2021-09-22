console.clear();

const elements = ['Fire', 'Air', 'Water'];

const separator = '--';
let result0 = '';
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  result0 += (index == 0 ? '' : separator) + element;
}
console.log('result0', result0);

const result1 = elements.join(separator);
console.log('result1', result1);

const title = 'Curso de manipulacion de arrays';

console.log(title.split(' '));

const url = title.split(' ').join('-').toLowerCase();
console.log(url);
