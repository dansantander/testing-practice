import reverse from '../modules/reverseString';

test('return reversed string test 1', () => {
  expect(reverse('hello')).toBe('olleh');
});

test('return reversed string test 2', () => {
  expect(reverse('Racecar')).toBe('racecaR');
});

test('return reversed number if it is string type', () => {
  expect(reverse('285')).toBe('582');
});

test('throw error if item is not a string', () => {
  expect(() => reverse(5)).toThrow('This is not a string');
});

it('throw error if no parameter passed', () => {
  expect(() => reverse()).toThrow('This is not a string');
});

it('throw error if empty string passed', () => {
  expect(() => reverse('')).toThrow('Empty string passed');
});
