import Decimal from 'decimal.js';

// Configure to match C# decimal precision
Decimal.set({
  precision: 29, // Matches C# decimal's 29 significant digits
  rounding: Decimal.ROUND_HALF_UP, // Standard round up for display
  toExpNeg: -7,
  toExpPos: 21,
  maxE: 9e15,
  minE: -9e15,
});

// Add format method that uses Intl after rounding
Decimal.prototype.toFormat = function(dp = 2) {
  // First do our rounding using toFixed
  const roundedValue = this.toFixed(dp);
  
  // Then use Intl for formatting
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  }).format(roundedValue);
};

export default Decimal;