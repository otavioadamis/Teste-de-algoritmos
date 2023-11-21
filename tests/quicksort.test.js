const quicksort = require('../QuickSort');

test('quicksort function', () => {
  expect(quicksort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
});

test('quicksort function', () => {
    expect(quicksort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });