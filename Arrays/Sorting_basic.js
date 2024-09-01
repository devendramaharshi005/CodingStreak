const given = [2, 3, 1, -1, 0, 4, 3, 7, 5];

//1. implement bubble sort.

function bubbleSort(arr) {
  const n = arr.length - 1;
  for (let outer = n; outer > 0; outer--)
    for (let i = 0; i < outer; i++) {
      // Compare and swap adjacent elements
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }

  return arr;
}

// console.log(bubbleSort(given))

function swap(arr, i, j) {
  if (!Array.isArray(arr)) return;

  if (i < 0 || j < 0 || i >= arr.length || j >= arr.length) return;

  // Traditional method
  // const temp = arr[i];
  // arr[i] = arr[j]
  // arr[j] = temp;

  //modern method
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// 2. Implement selection sort

function selectionSort(arr) {
  const n = arr.length - 1;
  for (let i = n; i >= 0; i--) {
    let maxIndex = i;

    // use the increasing loop for correctly align with the standard approach. ---> can use decreasing loop also.
    for (j = 0; j <= i; j++) {
      if (arr[maxIndex] < arr[j]) {
        maxIndex = j;
      }
    }

    swap(arr, i, maxIndex);
  }

  return arr;
}

// console.log(selectionSort(given))

// 3. Implement Insertion Sort.

function insertionSort(arr) {
  const n = arr.length;
  //start with second element assume first one is already sorted and on it's right place
  for (let i = 1; i < n; i++) {
    //get the ith element and store it into a variable first.
    //one by one compare the current with jth element insert current element on its sorted position.
    const current = arr[i];

    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }

  return arr;
}

//console.log(insertionSort(given))

// 4. Sort an array of strings.

//case insansitive sorting of the string[]
// Output: [ 'apple', 'Banana', 'Cherry', 'date' ]
function sortArryOfStrings(arr) {
  return arr.sort((a, b) => a.localeCompare(b));
}

//case insansitive sorting of the string[]
// Output: [ 'apple', 'Banana', 'Cherry', 'date' ]
function sortArryOfStrings2(arr) {
  return arr.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    else if (a.toLowerCase() > b.toLowerCase()) return 1;
    else return 0;
  });
}

//case sansitive sorting of the string[]
// Output: ["Banana", "Cherry", "apple", "date"]
function sortArryOfStrings3(arr) {
  return arr.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
}

// 5. Sort an array of 0s, 1s, and 2s (Dutch National Flag problem).

const givenArray = [
  0, 0, 0, 2, 2, 2, 0, 1, 1, 0, 0, 0, 1, 1, 1, 2, 2, 0, 0, 0, 2, 2, 2, 2, 1, 1,
];

// this approach is using the extra memory[];
function sortDutchNationalFlag(arr) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count0++;
    } else if (arr[i] === 1) {
      count1++;
    } else {
      count2++;
    }
  }

  const newArray = [];

  //do not go with below it can lead in misunderstanding of the boundary.
  //for(let i=0; i<arr.length; i++){
  //	if(i<count0){
  //		newArray.push(0);
  //	}
  //	else if(i <count1+count0){
  //		newArray.push(1);
  //	}
  //	else{
  //		newArray.push(2);
  //	}
  //
  //}

  //break the loop into three small for loops

  for (let i = 0; i < count0; i++) {
    newArray.push(0);
  }

  for (let i = 0; i < count1; i++) {
    newArray.push(1);
  }

  for (let i = 0; i < count2; i++) {
    newArray.push(2);
  }

  return newArray;
}

function sortDutchNationalFlagInPlace(arr) {
  const n = arr.length;
  let low = 0;
  let mid = 0;
  let high = n - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      swap(arr, mid, low);
      mid++;
      low++;
    } else if (arr[mid] === 2) {
      swap(arr, mid, high);
      high--;
    } else {
      mid++;
    }
  }

  return arr;
}

// console.log(insertionSort(givenArray))
//console.log(sortDutchNationalFlag(givenArray))
//console.log(sortDutchNationalFlagInPlace(givenArray))
