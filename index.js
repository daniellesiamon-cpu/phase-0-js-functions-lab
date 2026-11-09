/**
 * 1. calculateTax Function
 * Accepts a numeric parameter and calculates a tax value.
 */
function calculateTax(amount) {
  return amount * 0.10;
}

/**
 * 2. convertToUpperCase Function
 * Accepts a single string parameter and converts all alphabetic characters to uppercase.
 */
function convertToUpperCase(str) {
  return str.toUpperCase();
}

/**
 * 3. findMaximum Function
 * Accepts exactly two numeric parameters and returns the larger of the two numbers.
 */
function findMaximum(num1, num2) {
  return Math.max(num1, num2);
}

/**
 * 4. isPalindrome Function
 * Accepts a single string parameter, checks if it's a palindrome ignoring case, 
 * and returns true or false.
 */
function isPalindrome(str) {
  const cleanedStr = str.toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

/**
 * 5. calculateDiscountedPrice Function
 * Accepts two numeric parameters (price and discount percentage) 
 * and calculates the discounted price.
 */
function calculateDiscountedPrice(price, discountPercentage) {
  const discountAmount = price * (discountPercentage / 100);
  return price - discountAmount;
}

// Exporting functions for Jest testing
module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice
};



