function capitalizeString(s) {
  if (typeof s !== 'string') {
    throw new Error('This is not a string');
  } else if (s.length === 0) {
    throw new Error('Empty string passed');
  } else {
    let str = '';
    str = s.split('');
    str[0] = str[0].toUpperCase();
    return str.join('');
  }
}

export default capitalizeString;