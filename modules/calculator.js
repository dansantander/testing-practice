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

  const subtract = (...args) => {
    checkErrors(...args);
    return args.slice(1).reduce((total, currentValue) => total - currentValue, args[0]);
  };

  const multiply = (...args) => {
    checkErrors(...args);
    return args.slice(1).reduce((total, currentValue) => total * currentValue, args[0]);
  };

  const divide = (...args) => {
    checkErrors(...args);
    return args.slice(1).reduce((total, currentValue) => total / currentValue, args[0]);
  };

  return {
    add,
    subtract,
    multiply,
    divide,
  };
})();

export default Calculator;