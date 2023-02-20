import { addProduct, calcStock, products } from './product.service'

addProduct({
  name: 'P1',
  createdAt: new Date(),
  stock: 8,
});

addProduct({
  name: 'P2',
  createdAt: new Date(1984, 1, 19),
  stock: 12,
  size: 'M'
});

console.log(products);

const total = calcStock();
console.log(total);

