import Cypher from '../modules/cypher';

test('encrypt a string according to the key', () => {
  expect(Cypher.encrypt('hello', 1)).toBe('ifmmp');
});

test('decrypt a string according to the key', () => {
  expect(Cypher.decrypt('ifmmp', 1)).toBe('hello');
});

test('throw error if item is not a string', () => {
  expect(() => Cypher.encrypt(5)).toThrow('This is not a string');
});
