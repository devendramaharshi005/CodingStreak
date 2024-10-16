function numToWords(n) {
    // Arrays to handle special cases
    const to_19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (n < 20) {
        return to_19[n];
    } else if (n < 100) {
        return tens[Math.floor(n / 10) - 2] + (n % 10 === 0 ? '' : ' ' + to_19[n % 10]);
    } else if (n < 1000) {
        return to_19[Math.floor(n / 100)] + ' hundred' + (n % 100 === 0 ? '' : ' and ' + numToWords(n % 100));
    } else if (n === 1000) {
        return 'one thousand';
    }
}

// Generate the list
const numbersList = [];
let counts=0;
for (let i = 1; i <= 1000; i++) {
    let numberWord = numToWords(i); // Convert number to words
  	
    let lengthWithoutSpaces = numberWord.replace(/\s+/g, '').replace(/-/g, '').length; // Calculate length without spaces or hyphens
  
  	counts+=lengthWithoutSpaces;
    numbersList.push({ number: i, word: numberWord, length: lengthWithoutSpaces, counts: counts });
}

console.log(numbersList.slice(0, 1000)); // Display first 10 results

