const Calculator = (() => {
  function checkErrors(...args) {
    if (args.every((elem) => typeof elem === 'undefined')) {
      throw new Error('No parameter passed');
    }
    if (args.some((elem) => typeof elem !== 'number')) {
      throw new Error('This is not a number');
    }
  }

  const add = (...args) => {
    checkErrors(...args);
    return args.reduce((total, currentValue) => total + currentValue, 0);
  };

  return {
    add,
  };
})();

export default Calculator;