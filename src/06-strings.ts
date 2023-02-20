(() => {

  let productTitle = 'My amazing product';
  // productTitle = null;
  // productTitle = undefined;
  // productTitle = 123;
  // productTitle = () => {};
  productTitle = 'My other amazing product';
  console.log('productTitle: ', productTitle);

  const productDescription = "I'm your father";
  console.log('productDescription: ', productDescription);

  let myProductPrice: number = 123;
  let isNew: boolean = true;

  const summary: string = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${myProductPrice}
    isNew: ${isNew}
  `;
  console.log(summary);

})();
