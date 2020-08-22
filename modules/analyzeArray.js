function AnalyzeArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('This is not an array');
  }

  if (arr.length === 0) {
    throw new Error('Array is empty');
  }

  if (arr.some((elem) => typeof elem !== 'number')) {
    throw new Error('Array contains not a number');
  }

  const object = {
    average: (arr.reduce((a, b) => a + b) / arr.length),
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };

  return object;
}

export default AnalyzeArray;