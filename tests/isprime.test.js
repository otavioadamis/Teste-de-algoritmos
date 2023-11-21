const isPrime = require('../IsPrime');

test('numero não primo', () => {
  expect(isPrime(4)).toBe(false);
});

test('numero primo', () => {
  expect(isPrime(7)).toBe(true);
})