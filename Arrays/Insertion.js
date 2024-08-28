// Q1. Insert an element at a specific position.
export function insertAtPosition(arr, index, element) {
  // direct solution
  // @{param first} : An index where the insertion or deletion will happen {try -1, -3, 3, 10 .... so on} check behavior
  // @{param second} : How many number of elements should remove from the index
  // @{param third} : what is to be insert in the place of the index
  const deleted = arr.splice(index, 0, element);
  // console.log(deleted) : deleted value
  return arr;
}

// Q2.  Delete an element from a specific position.

export function deleteFromPosition(arr, index) {
  const HowManyelemetsToDelete = 1;
  // ElementToBeInserted : only use when you want to replace a value from the index
  // const ElementToBeInserted = null;

  // @{param index} {try -1, -3, 3, 10 .... so on} check behavior
  // -1 will be removing the data from the last index

  const deleted = arr.splice(index, HowManyelemetsToDelete);
  console.log(deleted); // : deleted value
  return arr;
}

// Q3. Remove all occurrences of a given element in an array.

export function removeAllOccuranceOfanElement(arr, element) {
  // use array.filter function for this purpose.
  return arr.filter((ele) => ele !== element);
}

// Q4. Merge two sorted arrays into one sorted array.

export function mergeTwoSortedArraysIntoOne(arr1, arr2) {
  // method 1 : O(N^2) solution
  // return [...arr1, ...arr2].sort()

  const result = [];
  let firstPointer = 0;
  let secondPointer = 0;

  while (firstPointer < arr1.length && secondPointer < arr2.length) {
    if (arr1[firstPointer] <= arr2[secondPointer]) {
      result.push(arr1[firstPointer]);
      firstPointer++;
    } else {
      result.push(arr2[secondPointer]);
      secondPointer++;
    }
  }

  while (firstPointer < arr1.length) {
    result.push(arr1[firstPointer]);
    firstPointer++;
  }

  while (secondPointer < arr2.length) {
    result.push(arr2[secondPointer]);
    secondPointer++;
  }

  return result;
}

// Q5.Rotate an array to the right by k steps.

export function rotateArrayRightBySteps(arr, steps) {
    // simplest solution
    // const lastKElements = arr.slice(arr.length - steps)

    // ____________ add this for robustness ________________
    if (arr.length === 0) return arr;
    steps = steps % arr.length;
    // ------------------------------------------

    const lastKElements = arr.slice(-1*steps)
    const firstKSteps = arr.slice(0,-1*steps)
    return [...lastKElements,...firstKSteps];
}
