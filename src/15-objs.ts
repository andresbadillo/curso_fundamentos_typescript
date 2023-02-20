(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: 'P1',
    createdAt: new Date(),
    stock: 10,
  });

  addProduct({
    title: 'P2',
    createdAt: new Date(1984, 1, 19),
    stock: 12,
    size: 'M'
  });

  products.push({
    title: 'P3',
    createdAt: new Date(),
    stock: 8,
    size: 'XL'
  })

  console.log(products);
})();
