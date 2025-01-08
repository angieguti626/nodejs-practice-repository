/**
 * Author: Angelica Gutierrez
 * Date: 8 January 2025
 * File: prime-number.spec.js
 * Description: This script tests the prime function.
 */
'use strict';

const { prime } = require('../../src/utils/prime-number'); // Import the prime function from the factorial.js file

// The describe() function is a test suite that contains one or more tests
describe('Prime Function', () => {
  it ('should determine if 2 is a prime number', () => {  
    const result = prime(2);
    expect (result).toBe(true);
})

it ('should determine if 12 is a prime number', () => {  
    const result = prime(12);
    expect (result).toBe(false);
})

it ('should thrown an error if number is negative', () => {  
    expect(() => prime(1).toThrow('Not a valid number.'));
})

});
