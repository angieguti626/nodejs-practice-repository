/**
 * Author: Angelica Gutierrez
 * Date: 8 January 2025
 * File: prime-number.js
 * Description: This script determines if a number is prime.
 */
'use strict';

// A prime number is a number greater than 1 that cannot be written as  product of 2
// Prime Numbers : 2, 3, 5, 7, 11, 13, 17, 19
// Non-prime Numbers: 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20

// The prime function determines if a number is prime.
function prime(n){
    // if n equals or is less than 1, it is not a valid number
    if (n <= 1){
        throw new Error ('Not a valid number.');
    }

    // if n is greater than 1, continue
    if (n > 1 ){
        // runs a loop until i is less than or equal to n/2
        for (let i = 2; i <= n/2; i++) {
            // checks if number is divisible by 2 with any remainders, if so it is not prime
            if (n % i == 0) {
                return false;
            }
        }
    }
    
    // if not divisible by more than two numbers then it is a prime number
    return true;
}

module.exports = { prime };