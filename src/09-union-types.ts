(() => {

  let userId: string | number;
  userId = 1212;
  userId = 'abcd';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);

    } else {
      console.log(`number ${myText.toFixed(2)}`);
    }
  }
  greeting('Hola');
  greeting(1234.5678);
  // greeting(true);
  // greeting(null);

})();
