(() => {

  const login = (data: {email: string, password: number}) => {
    console.log(data, data.email, data.password);
  }

  login({
    email: 'andres@gmail.com',
    password: 123,
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
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

  console.log(products);

})();
