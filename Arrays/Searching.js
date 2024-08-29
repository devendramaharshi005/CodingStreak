//Q1. Find the index of a given element in an array.

// method 1 - direct access
export function findTheIndexOfElement(arr, element) {
  return arr.indexOf(element);
}

//method 2 all the indices
//using the traversal method to find the index

//Q2. Search for an element in a sorted array using Binary Search.
// simple implementation : recursively find the index
// ??? is it always giving the first index - No

export function findElementIndexUsingBinarySearch(arr, element, start, end) {
  const mid = start + end;

  if (arr[mid] === element) return mid;
  else if (arr[mid] < element) {
    return findElementIndexUsingBinarySearch(arr, element, mid + 1, end);
  } else {
    return findElementIndexUsingBinarySearch(arr, element, start, end - 1);
  }

  return -1;
}

//method 2 : Iterative approach better performance than recursion
// ??? is it always giving the first index - Yes

export function findFirstIndexUsingBinarySearch(arr, element) {
  let start = 0;
  let end = arr.length - 1;
  let result = -1; // Variable to store the result

  while (start <= end) {
    let mid = start + Math.floor((end - start + 1) / 2);

    if (arr[mid] === element) {
      console.log(mid);
      result = mid; // Update result to the current mid index
      end = mid - 1; // Continue searching in the left half
    } else if (arr[mid] < element) {
      start = mid + 1; // Search in the right half
    } else {
      end = mid - 1; // Search in the left half
    }
  }

  return result; // Return the first index of the element, or -1 if not found
}

//method 3 : Iterative
// ??? is it always giving the Last index - Yes

export function findLastIndexUsingBinarySearch(arr, element) {
  let start = 0;
  let end = arr.length - 1;
  let result = -1;

  while (start <= end) {
    let mid = start + Math.floor((end - start + 1) / 2);
    console.log(mid);
    if (arr[mid] === element) {
      result = mid;
      start = mid + 1; // Continue searching in the right half
    } else if (arr[mid] < element) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return result;
}

//Q3. Find the first and last positions of an element in a sorted array.

// ---wrong implementation because of the recursive function is not returning the first position
export function firstAndLatIndexOfElement(arr, element, start, end) {
  const firstIdx = findFirstIndexUsingBinarySearch(arr, element);

  let finalIndex = firstIdx;

  for (let i = firstIdx; i <= end; i++) {
    if (arr[i] === element) {
      finalIndex++;
    }
  }

  return [firstIdx, finalIndex - 1];
}

//Q4. Find the number of times a sorted array is rotated.
//method 1 : O(n) traversal

// export function findRotationCount(arr) {
//   if (arr.length === 0) return 0;

//   if (arr[0] < arr[arr.length - 1]) return 0;
//   let prev = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < prev) {
//       return i;
//     }
//     prev = arr[i];
//   }
//   return 0;
// }

// method:2 using binary search
export function findRotationCount(arr) {
  if (arr.length === 0) return -1;

  // single element is always sorted.
  if (arr.length === 1) return 0;

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[end]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
}

//Q5. Search an element in a rotated sorted array.
export function searchElementInRotatedSortedArray(arr, ele) {
  const rotationCount = findRotationCount(arr);
  if (ele === arr[rotationCount]) {
    return rotationCount;
  } else {
    const first = giveFirstIndexOfElementSortedArray(
      arr,
      ele,
      0,
      rotationCount - 1
    );
    // const second =giveFirstIndexOfElementSortedArray(arr, ele, rotationCount+1,arr.length -1);
    // improvement
    const second =
      rotationCount < arr.length - 1
        ? giveFirstIndexOfElementSortedArray(
            arr,
            ele,
            rotationCount + 1,
            arr.length - 1
          )
        : -1;

    if (first !== -1) return first;
    else if (second !== -1) {
      return second;
    } else {
      return -1;
    }
  }
}

export function giveFirstIndexOfElementSortedArray(arr, element, start, end) {
  if (start < 0 || end > arr.length - 1) return -1;

  let left = start;
  let right = end;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === element) {
      result = mid;
      right = mid - 1;
    } else if (arr[mid] < element) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}