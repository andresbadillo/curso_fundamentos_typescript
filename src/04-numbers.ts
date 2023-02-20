(() => {

  let productPrice = 100; // Inferido
  productPrice = 12;
  console.log('productPrice: ', productPrice);

  let costumerAge: number = 35; // Tipado
  costumerAge = costumerAge + 1;
  // costumerAge = costumerAge + '1';
  console.log('costumerAge: ', costumerAge);

  let productInStock: number;
  console.log('productInStock: ', productInStock);

  if (productInStock > 10) {
    console.log('');

  }

  let discount = parseInt('123');
  console.log('discount: ', discount);
  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('Not apply');
  }

  let hex = 0Xfff;
  console.log('hex: ', hex);

  let bin = 0b1011;
  console.log('bin: ', bin);

  const myNumber: number = 10;

})();
