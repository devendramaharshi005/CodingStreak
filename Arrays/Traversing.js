// Q1. Find the sum of all elements in an array

//method 1
export function sumOfArrayElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

//method 2
export function sumOfArrayElementsUsingReduce(arr) {
  return arr.reduce((acc, ele) => {
    return acc + ele;
  }, 0);
}

// Q2 Count occurrences of a specific element in an array.
//method1 using for loop

export function findOccurence(arr, element) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (element === arr[i]) {
      count++;
    }
  }

  return count;
}

//method2 using reduce
//function findOccurenceReduce(arr, element){
//	return arr.reduce((acc, ele)=>{if(element === ele) return acc+1;},0)
//}

//method 3 find using array ---> only shows if an element exists or not.

//function findOccurenceShort(arr, element){
//	return arr.find(ele=>ele === element);
//}


//Q3  Find the maximum and minimum elements in an array.

//method 1 from Math library.

export function maxAndMinFromArr(arr) {
  let max,
    min = arr[0];

  max = Math.max(...arr);
  min = Math.min(...arr);

  return [max, min];
}

// method 2 using reducer

export function maxAndMinFromArrReduce(arr) {
  let max = arr.reduce((acc, ele) => (acc < ele ? ele : acc), arr[0]);

  let min = arr.reduce((acc, ele) => (acc > ele ? ele : acc), arr[0]);

  return [max, min];
}

//method 3 using traversing for loop.

export function maxAndMinFromLoop(arr) {
  let max = (min = arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }

    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return [max, min];
}

//Q4. Reverse an array in place.

//method 1 for loop
export function reverseArrayInplace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  return arr;
}

//Q5. Find the average of all elements in an array.

export function findAverage(arr) {
  return sumOfArrayElementsUsingReduce(arr) / arr.length;
}

export function findAverageUsingReduce(arr) {
  return arr.reduce((acc, ele, index) => {
    if (index === arr.length - 1) return (acc + ele) / arr.length;
    return acc + ele;
  }, 0);
}

// ------------------ testing ---------------
// call the function

// const arr = [1, 3, -4, 46, 2, 3, 3, 46, 675, 1, 1];

// console.log(arr);

// const answer = findAverageUsingReduce(arr);

// console.log(answer);
