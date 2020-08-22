import AnalyzeArray from '../modules/analyzeArray';

test('AnalyzeArray return object with properties', () => {
  expect(AnalyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('Analyze an string array', () => {
  expect(() => AnalyzeArray(['2', 2, 6])).toThrow('Array contains not a number');
});

test('Analyze an empty array', () => {
  expect(() => AnalyzeArray([])).toThrow('Array is empty');
});

test('If no array passed as argument throw an error', () => {
  expect(() => AnalyzeArray('this is not array')).toThrow('This is not an array');
});