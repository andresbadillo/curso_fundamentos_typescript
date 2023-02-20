(() => {

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto1 = createProductToJson('P1', new Date(), 15, 'S');
  // console.log(producto1);
  // console.log(producto1.title);
  // console.log(producto1.createdAt);
  // console.log(producto1.stock);
  // console.log(producto1.size);

  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes // opcional
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto2 = createProductToJsonV2('P1', new Date(), 15, 'M');
  console.log(producto2);
  console.log(producto2.title);
  console.log(producto2.createdAt);
  console.log(producto2.size);

})();
