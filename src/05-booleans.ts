(() => {

  let isEnable = true; // Forma inferida
  // isEnable = '';
  // isEnable = 123;
  // isEnable = null;
  // isEnable = undefined;
  isEnable = false;
  console.log('isEnable: ', isEnable);

  let isNew: boolean = false;
  isNew = true;
  console.log('isNew: ', isNew); // Forma explicita

  const random = Math.random();
  console.log('random: ', random);
  isNew = random >= 0.5 ? true : false;
  console.log('isNew: ', isNew);

})();
