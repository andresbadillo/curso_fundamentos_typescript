(() => {

  // let myNumber: number;
  // let myString: string;
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 123;

  let myString: string | undefined = undefined;
  myString = 'abc'

  function hi(name:string | null) {
    let hello = 'Hello ';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody'
    }
    console.log(hello);
  }

  function hiV2(name:string | null) {
    let hello = 'Hello ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }

  hiV2('Andres');
  hiV2(null);

})();
