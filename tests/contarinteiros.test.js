const contarNumerosInteiros = require('../ContarInteiros');

test('contarNumerosInteiros function', () => {
  expect(contarNumerosInteiros([1, 2, 3, 4, 5])).toBe(5);
});

test('contarNumerosInteiros function', () => {
    expect(contarNumerosInteiros([1, '2', 3, '4', 5])).toBe(3);
});

