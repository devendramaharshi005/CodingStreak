function findSumOfFactors(number) {
  if (number <= 1) return 0;
  const sqrt_n = Math.sqrt(number);
  let sum = 1;
  for (let i = 2; i <= sqrt_n; i++) {
    if (number % i === 0) {
      sum += i;
      const complement = number / i;
      if (i !== complement) {
        sum += complement;
      }
    }
  }
  return sum;
}

function findAllAbundantNumbers(limit) {
  const abundantNumbers = [];
  for (let i = 1; i <= limit; i++) {
    if (findSumOfFactors(i) > i) {
      abundantNumbers.push(i);
    }
  }
  return abundantNumbers;
}

function sumOfNonAbundantNumbers(limit) {
  const abundantNumbers = findAllAbundantNumbers(limit);

  // Boolean array to mark sums of two abundant numbers
  const isSumOfTwoAbundants = Array(limit + 1).fill(false);

  for (let i = 0; i < abundantNumbers.length; i++) {
    for (let j = i; j < abundantNumbers.length; j++) {
      const sum = abundantNumbers[i] + abundantNumbers[j];
      if (sum <= limit) {
        isSumOfTwoAbundants[sum] = true;
      } else {
        break;
      }
    }
  }

  // Calculate the sum of all numbers that are NOT the sum of two abundant numbers
  let total = 0;
  for (let i = 1; i <= limit; i++) {
    if (!isSumOfTwoAbundants[i]) {
      total += i;
    }
  }

  return total;
}



sumOfNonAbundantNumbers(28123);