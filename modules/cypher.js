const Cypher = (() => {
  const translatorLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const translatorUpper = translatorLower.join().toUpperCase().split(',');

  const encrypt = (string, shiftNumber = 0) => {
    if (Number.isNaN(parseInt(shiftNumber, 10))) {
      shiftNumber = 0;
    }

    if (typeof string !== 'string') {
      throw new Error('Parameter is not a string');
    }

    const result = [];
    string.split('').forEach((element) => {
      if (element.match(/[a-zA-Z]/)) {
        if (element === element.toUpperCase()) {
          const translate = translatorUpper.findIndex(letter => letter === element);
          let remainder = (translate + shiftNumber) % 25;
          if (remainder < 0) {
            remainder += 26;
          }
          result.push(translatorUpper[remainder]);
        } else {
          const translate = translatorLower.findIndex(letter => letter === element);
          let remainder = (translate + shiftNumber) % 25;
          if (remainder < 0) {
            remainder += 26;
          }
          result.push(translatorLower[remainder]);
        }
      } else {
        result.push(element);
      }
    });
    return result.join('');
  };

  const decrypt = (string, shiftNumber = 0) => {
    if (Number.isNaN(parseInt(shiftNumber, 10))) {
      shiftNumber = 0;
    }

    if (typeof string !== 'string') {
      throw new Error('Parameter is not a string');
    }

    const result = [];
    string.split('').forEach((element) => {
      if (element.match(/[a-zA-Z]/)) {
        if (element === element.toUpperCase()) {
          const translate = translatorUpper.findIndex(letter => letter === element);
          let remainder = (translate - shiftNumber) % 25;
          if (remainder < 0) {
            remainder += 26;
          }
          result.push(translatorUpper[remainder]);
        } else {
          const translate = translatorLower.findIndex(letter => letter === element);
          let remainder = (translate - shiftNumber) % 25;
          if (remainder < 0) {
            remainder += 26;
          }
          result.push(translatorLower[remainder]);
        }
      } else {
        result.push(element);
      }
    });
    return result.join('');
  };

  return {
    encrypt,
    decrypt,
  };
})();

export default Cypher;