function reverseString(s) {
  if (typeof s !== 'string') {
    throw new Error('This is not a string');
  } else if (s.length === 0) {
    throw new Error('Empty string passed');
  } else {
    return s.split('').reverse().join('');
  }
}

export default reverseString;