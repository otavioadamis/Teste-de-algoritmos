const mdc = require('../Mdc');

test('mdc function', () => {
    expect(mdc(12, 18)).toBe(6);
});

test('mdc function', () => {
    expect(mdc(0, 8)).toBe(8);
});