import Cypher from '../modules/cypher';

test('encrypt a string according to the key', () => {
  expect(Cypher.encrypt('hello', 1)).toBe('ifmmp');
});

test('return same string if no key passed', () => {
  expect(Cypher.encrypt('hello')).toBe('hello');
});

test('return same character if character is not a letter and key not passed', () => {
  expect(Cypher.encrypt('(')).toBe('(');
});

test('return same character and translate letter if character in string is not a letter', () => {
  expect(Cypher.encrypt('(a', 1)).toBe('(b');
});

it('throw error if parameter passed is not a string', () => {
  expect(() => Cypher.encrypt(5)).toThrow('Parameter is not a string');
});

test('decrypt a string according to the key', () => {
  expect(Cypher.decrypt('ifmmp', 1)).toBe('hello');
});

test('return same string if no key passed', () => {
  expect(Cypher.decrypt('asdf')).toBe('asdf');
});

test('return same character if character is not a letter and key not passed', () => {
  expect(Cypher.decrypt('(')).toBe('(');
});

test('return same character and translate letter if character in string is not a letter', () => {
  expect(Cypher.decrypt('(a', 1)).toBe('(z');
});

it('throw error if no parameter passed', () => {
  expect(() => Cypher.decrypt(5)).toThrow('Parameter is not a string');
});

test('encrypt a string according to the key', () => {
  expect(Cypher.encrypt('hello', 26)).toBe('ifmmp');
});