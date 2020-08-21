import Calculator from '../modules/calculator';

test('add two or more numbers', () => {
  expect(Calculator.add(2, 3)).toBe(5);
});

test('throw error if item is not a number', () => {
  expect(() => Calculator.add('5')).toThrow('This is not a number');
});

it('throw error if no parameter passed', () => {
  expect(() => Calculator.add()).toThrow('No parameter passed');
});

test('subtract two or more numbers', () => {
  expect(Calculator.subtract(2, 3)).toBe(-1);
});

test('throw error if item is not a number', () => {
  expect(() => Calculator.subtract('5')).toThrow('This is not a number');
});

it('throw error if no parameter passed', () => {
  expect(() => Calculator.subtract()).toThrow('No parameter passed');
});

test('multiply two or more numbers', () => {
  expect(Calculator.multiply(2, 3)).toBe(6);
});

test('throw error if item is not a number', () => {
  expect(() => Calculator.multiply('5')).toThrow('This is not a number');
});

it('throw error if no parameter passed', () => {
  expect(() => Calculator.multiply()).toThrow('No parameter passed');
});

test('divide two or more numbers', () => {
  expect(Calculator.divide(10, 2)).toBe(5);
});

test('throw error if item is not a number', () => {
  expect(() => Calculator.divide('5')).toThrow('This is not a number');
});

it('throw error if no parameter passed', () => {
  expect(() => Calculator.divide()).toThrow('No parameter passed');
});

it('divide by 0 should not be finite', () => {
  expect(() => Calculator.divide(2, 0)).not.toBe(Number.isFinite(Calculator.divide(2, 0)));
});