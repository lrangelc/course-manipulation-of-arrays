console.clear();

const products = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
  id: '🥞',
  changes: {
    price: 200,
    description: 'delicious',
  },
};

const myProducts = [];

function printLog() {
  console.log('products', products);
  console.log('myProducts', myProducts);
  console.log('-'.repeat(10));
}

function addProduct(id, products, myProducts) {
  const productIndex = products.findIndex((product) => product.id == id);
  if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
  }
}

const productV3 = [...products];
const productIndexV3 = productV3.findIndex((product) => product.id == update.id);
productV3[productIndexV3] = { ...productV3[productIndexV3], ...update.changes };

console.log({ products });
console.log({ productV3 });

const products2 = products.filter((product) => product.id != '🍔');
console.log('products', products);
console.log('products2', products2);

printLog();

addProduct('🍔', products, myProducts);

printLog();

const productsV2 = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const productIndexV2 = productsV2.findIndex((product) => product.id == update.id);

productsV2[productIndexV2] = { ...productsV2[productIndexV2], ...update.changes };

console.log(productsV2);
