// Q1. Implement Merge Sort.

function mergeSort(arr){
	const n =arr.length;
	if(n <= 1){
		return arr;
	}

	const mid = Math.floor(n/2);

	const firstHalf = mergeSort(arr.slice(0,mid));
	const nextHalf = mergeSort(arr.slice(mid));


	return sortedMerge(firstHalf,nextHalf)
	
}


function sortedMerge(arr1,arr2){
	
	const N1=arr1.length;
	const N2=arr2.length;

	if(N1 === 0) return arr2;
	if(N2 === 0) return arr1;
	
	const newArr=[];

	let first =0;
	let second =0;

	while(first < N1 && second <N2){
		if(arr1[first] <= arr2[second]){
			newArr.push(arr1[first]);
			first++;
		}
		else{
			newArr.push(arr2[second]);
			second++;
		}
	}
	
	while(first < N1){
		newArr.push(arr1[first]);
		first++;
	}

	while(second < N2){
		newArr.push(arr2[second]);
		second++;

	}

	
	return newArr;

}


// console.log(mergeSort([0,-1,4,5,3,2,2,4]))
// console.log([0,-1,4,5,3,2,2,4].sort((a,b)=>a-b))
//console.log(sortedMerge([0,1,1,2,4,5,7,8],[3,3,4,5,7,8,9,10]))

