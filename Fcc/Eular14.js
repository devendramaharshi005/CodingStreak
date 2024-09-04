

{/*

Problem 14: Longest Collatz sequence

The following iterative sequence is defined for the set of positive integers:
n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under the given limit, produces the longest chain?

Note: Once the chain starts the terms are allowed to go above limit.
Tests

Waiting: longestCollatzSequence(14) should return a number.
Waiting: longestCollatzSequence(14) should return 9.
Waiting: longestCollatzSequence(5847) should return 3711.
Waiting: longestCollatzSequence(46500) should return 35655.
Waiting: longestCollatzSequence(54512) should return 52527.
Waiting: longestCollatzSequence(100000) should return 77031.
Waiting: longestCollatzSequence(1000000) should return 837799.

*/}


function longestCollatzSequence(num,data){
	if(data?.[num]){
		return data[num];
	}
	if(num <= 0) return -1;
	
	if(num === 1) return 1;
	if(num%2 === 0){
		return 1 + longestCollatzSequence(num/2,data)
	}
	else{
		return 1 + longestCollatzSequence(3*num +1,data)
	}
}


function findNumberWithMaxLength(limit){
	const data = {
		1 :1
	}

	for(let i=1; i <= limit ; i++){
		data[i]=longestCollatzSequence(i,data)
	}

	console.log(Object.entries(data))
	
	const result = (Object.entries(data)|| []).reduce((acc,ele)=>{
		if(ele[1] > acc[1]){
			return [...ele];
		}

		return acc;
	} ,[0,0])

	console.log(result)
	return parseInt(result[0]);
}

console.log(findNumberWithMaxLength(1000000))



