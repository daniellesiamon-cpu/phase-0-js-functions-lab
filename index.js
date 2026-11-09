/**
 * 1. calculateTax Function
 * Accepts a numeric parameter and calculates a tax value (e.g., standard 10% or custom rate).
 * Adjust the percentage rate based on your lab's instructions if a specific rate is required.
 */
function calculateTax(amount) {
  // Assuming a standard tax calculation (e.g., 10% or 0.10 tax rate)
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
  // Convert to lowercase to ignore case sensitivity, and remove non-alphanumeric chars if needed
  const cleanedStr = str.toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

/**
 * 5. calculateDiscountedPrice Function
 * Accepts two numeric parameters (price and discount percentage/amount) 
 * and calculates the discounted price.
 */
function calculateDiscountedPrice(price, discountPercentage) {
  // Assuming discountPercentage is like 20 for 20%
  const discountAmount = price * (discountPercentage / 100);
  return price - discountAmount;
}




