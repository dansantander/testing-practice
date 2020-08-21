import Calculator from '../modules/calculator';

test('add two number', () => {
  expect(Calculator.add(2, 3)).toBe(5);
});

test('throw error if item is not a number', () => {
  expect(() => Calculator.add('5')).toThrow('This is not a number');
});

it('throw error if no parameter passed', () => {
  expect(() => Calculator.add()).toThrow('No parameter passed');
});