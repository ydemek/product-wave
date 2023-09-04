import formatPrice from '../utils/formatPrice';

test('formatPrice formats a number to Turkish Lira (TRY)', () => {
  // Test with a sample number
  const price: number = 1000; // 1000 TRY
  const formatted: string = formatPrice(price);

  // Assert that the formatted string matches the expected format
  expect(formatted).toBe('1.000,00');
  
  // Test with another number
  const price2: number = 1500.5; // 1500.5 TRY
  const formatted2: string = formatPrice(price2);

  // Assert that the formatted string matches the expected format
  expect(formatted2).toBe('1.500,50');
});
