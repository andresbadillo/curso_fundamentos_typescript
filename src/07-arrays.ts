(() => {

  let prices = [1, 2, 3, 4];
  // prices.push('5');
  // prices.push(false);
  // prices.push({});
  prices.push(5);
  prices.push(6);
  console.log('prices: ', prices);
  prices.pop();
  console.log('prices: ', prices);

  let products = [1, 2, 3, '4', true];
  products.push('5');
  products.push(false);
  console.log('products: ', products);

  let mixed: (number | string | boolean | object)[] = ['hola', true];
  mixed.push(123);
  mixed.push({});
  // mixed.push([]);

  let numbers = [1, 2, 3, 4];
  numbers.map(item => item * 2)
  console.log('numbers: ', numbers);

  let words = ['andres', 'badillo'];
  words.map(item => item * 2);

})();
