import cap from '../modules/capitalize';

test('capitalize first letter of string', () => {
  expect(cap('hello')).toBe('Hello');
});

test('return same string if first character is already capitalized', () => {
  expect(cap('HELLO')).toBe('HELLO');
});

it('capitalize first letter of string', () => {
  expect(cap('hELLO wORLD')).toBe('HELLO wORLD');
});

test('throw error if item is not a string', () => {
  expect(() => cap(5)).toThrow('This is not a string');
});

it('throw error if no parameter passed', () => {
  expect(() => cap()).toThrow('This is not a string');
});

it('throw error if empty string passed', () => {
  expect(() => cap('')).toThrow('Empty string passed');
});
