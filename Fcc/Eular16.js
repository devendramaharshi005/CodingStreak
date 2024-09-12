/*
Problem 16: Power digit sum

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^exponent?

Tests

Waiting: 1. powerDigitSum(15) should return a number.
Waiting: 2. powerDigitSum(15) should return 26.
Waiting: 3. powerDigitSum(128) should return 166.
Waiting: 4. powerDigitSum(1000) should return 1366.
*/

function powerDigitSum(exponent) {
  //don't use below expression - gived issue in FCC compiler.
  //const powerdigit = BigInt(2)**BigInt(exponent);
  const powerdigit = BigInt(2 ** exponent);
  return sumOfDigits(powerdigit);
}

function sumOfDigits(num) {
  let sum = BigInt(0);

  let number = num;
  while (number > BigInt(0)) {
    sum += number % BigInt(10);
    number = number / BigInt(10);
  }

  return parseInt(sum.toString());
}

// ************************************** mathematical and more fast ***************

function powerDigitSum(exponent) {
  //2^0 = 1

  const result = [1];

  for (let j = 0; j < exponent; j++) {
    let carry = 0;
    for (let i = 0; i < result.length; i++) {
      let product = result[i] * 2 + carry;
      result[i] = product % 10;
      carry = Math.floor(product / 10);
    }

    while (carry) {
      result.push(carry % 10);
      carry = Math.floor(carry / 10);
    }
  }

  // result is the 2**exponent in reverse order.

  return result.reduce((acc, ele) => acc + ele, 0);
}


