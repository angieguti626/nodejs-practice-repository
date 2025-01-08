/**
 * Author: Professor Krasso
 * Date: 13 September 2024
 * File: factorial.spec.js
 * Description: This script tests the factorial function.
 */
'use strict';

const { factorial } = require('../../src/utils/factorial'); // Import the factorial function from the factorial.js file

// The describe() function is a test suite that contains one or more tests
describe('Factorial Function', () => {
  it ('should calculate factorial of 5', () => {
    const result = factorial(5);
    expect(result).toBe(120);
  })

  it ('should calculate factorial of 0', () => {
    const result = factorial(0);
    expect(result).toBe(1);
  })

  it ('should throw an error when calculating the factorial of a negative number', () => {
    expect(() => factorial(-1).toThrow('Factorial of negative number is not defined'));
})
});