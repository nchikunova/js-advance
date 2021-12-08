// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1],
// then return 0.

// Example 1
// Input: x = 123
// Output: 321

// Example 2
// Input: x = -123
// Output: -321

// Example 2
// Input: x = 1534236469
// Output = 0

// function main(x) {
//     // Change code below
//     let isNegative = false;
//     if (x < 0) {
//         isNegative = true;
//         x *= -1;
//     };
//     let reverseX = parseInt(String(x).split('').reverse((a, b) => a - b).join(''));
//     if (reverseX > Math.pow(2, 32)) {
//         return 0;
//     }
//     if (isNegative) {
//         return -1 * reverseX
//     } else {
//         return reverseX;
//     }
// };

// Another solution

function main(x) {
    const reversedNumber = parseInt(x.toString().split('').reverse().join(''))
    return reversedNumber < Math.pow(2, 31) ? reversedNumber * Math.sign(x) : 0;
}

module.exports = main;