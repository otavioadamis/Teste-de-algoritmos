const somatorio = require('../Somatorio');

test('somatorio function', () => {
    expect(somatorio([1, 2, 3, 4, 5])).toBe(15);
  });

test('somatorio function', () => {
    expect(somatorio([-1, 1, -2, 2])).toBe(0);
});