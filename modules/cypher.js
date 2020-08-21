const Cypher = (() => {
  const translator = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const translatorUpper = translator.join().toUpperCase().split(',');
  const result = []

  const encrypt = (string, number) => {
    string.split('').forEach(element => {
      if element.match(/[a-zA-Z]/) {

      } else {
        result.push(element)
      } 
    });
    return result.join(' ')
  };
  const decrypt = (string, number) => {

  };

  if (character == character.toUpperCase()) {
    alert ('upper case true');
   }
   if (character == character.toLowerCase()){
    alert ('lower case true');
   }

  return {
    encrypt,
    decrypt,
  };
})();

export default Cypher;