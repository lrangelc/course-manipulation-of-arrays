console.clear();

const matriz = [[1, 2, 3], [4, 5, 6, [4, 5, 6]], , [7, 8, 9, [1, 2, 3, [77, 88, 13]]]];

function getElements1(array, newArray) {
  array.forEach((element) => {
    if (Array.isArray(element)) {
      getElements1(element, newArray);
    } else {
      newArray.push(element);
    }
  });
}

function flatArray(array) {
  const newMatriz = [];
  getElements1(array, newMatriz);

  return newMatriz;
}

const newMatriz = flatArray(matriz);
console.log('newMatriz', newMatriz);

// const newArray = [];
// for (let i = 0; i < matriz.length; i++) {
//   const element = matriz[i];
//   for (let j = 0; j < element.length; j++) {
//     const subelement = element[j];
//     newArray.push(subelement);
//     console.log(subelement);
//   }
// }

// console.log(newArray);

console.log('flat', matriz.flat());
console.log('flat level 3', matriz.flat(3));
