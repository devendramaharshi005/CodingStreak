function findAllPrimesBelow(n){
	const upperLimit = n + 1;

	// want to find prime between 0....n
	const primes = new Array(upperLimit).fill(true);
	
	primes[0] = primes[1] = false;
	
	for(let i=2; i*i <= n ; i++){
		if(primes[i]){
			for(j=i*i; j<=n; j+=i){
				primes[j] = false;
			}
		}
			
	}

	const result =[]
	for(let i=0; i<=n; i++){
		if(primes[i]){
			result.push(i);
		}
	}
	
	return result;
}


function specialPythogorianTriplets(N){

	// a, b for [a,b,c ]are not necessarily primes --> can be a non prime for ex: [3,4,5]

	const listOfSuchTriplets=[]
	
	// m >0 and n>0
	for(let m=1; m*m < N; m++ ){
		// make sure the m is always grater than the n
		for(let n = 1; n < m ; n++ ){

		//applying the euclid formula for finding such triplets
		
		
		const a= m*m - n*n;
		const b= 2*m*n;
		const c= m*m + n*n;
		
		// Ensure all values are positive and sum equals N
           	if (a > 0 && b > 0 && c > 0  && a + b + c === N) {
			const sortedTriplet = [a, b, c].sort((a,b)=>a-b)
                	listOfSuchTriplets.push(sortedTriplet);
            	}
	
		}
	}
	

	return findUnique(listOfSuchTriplets);
}


function findUnique(arr){
		return  arr.map(e=>JSON.stringify(e)).filter((e,index,self)=>self.indexOf(e) === index)
			.map(e=>JSON.parse(e))
	}
	


function testFindUnique() {
    // Test Case 1: Basic case with duplicates
    const arr1 = [1, 2, 2, 3, 4, 4, 5];
    console.assert(JSON.stringify(findUnique(arr1)) === JSON.stringify([1, 2, 3, 4, 5]), 'Test Case 1 Failed');
    
    // Test Case 2: All unique elements
    const arr2 = [1, 2, 3, 4, 5];
    console.assert(JSON.stringify(findUnique(arr2)) === JSON.stringify([1, 2, 3, 4, 5]), 'Test Case 2 Failed');
    
    // Test Case 3: All elements are the same
    const arr3 = [7, 7, 7, 7, 7];
    console.assert(JSON.stringify(findUnique(arr3)) === JSON.stringify([7]), 'Test Case 3 Failed');
    
    // Test Case 4: Empty array
    const arr4 = [];
    console.assert(JSON.stringify(findUnique(arr4)) === JSON.stringify([]), 'Test Case 4 Failed');
    
    // Test Case 5: Array with mixed data types (numbers and strings)
    const arr5 = [1, '1', 2, '2', 1, '1'];
    console.assert(JSON.stringify(findUnique(arr5)) === JSON.stringify([1, '1', 2, '2']), 'Test Case 5 Failed');
    
    // Test Case 6: Array with non-numeric and numeric types
    const arr6 = [1, 2, 2.5, '2.5', 3, '3'];
    console.assert(JSON.stringify(findUnique(arr6)) === JSON.stringify([1, 2, 2.5, '2.5', 3, '3']), 'Test Case 6 Failed');
    
    // Test Case 7: Array with objects having identical keys and values
    const arr7 = [{a: 1}, {a: 1}, {b: 2}];
    console.assert(JSON.stringify(findUnique(arr7)) === JSON.stringify([{a: 1}, {b: 2}]), 'Test Case 7 Failed');
    
    // Test Case 8: Nested objects
    const arr8 = [{a: {b: 2}}, {a: {b: 2}}, {a: {b: 3}}];
    console.assert(JSON.stringify(findUnique(arr8)) === JSON.stringify([{a: {b: 2}}, {a: {b: 3}}]), 'Test Case 8 Failed');
    
    // Test Case 9: Large array with many duplicates
    const arr9 = Array(1000).fill(1).concat(Array(1000).fill(2)).concat(Array(1000).fill(3));
    console.assert(JSON.stringify(findUnique(arr9)) === JSON.stringify([1, 2, 3]), 'Test Case 9 Failed');

    // Test Case 10: Mixed primitive and complex types
    const arr10 = [1, '1', {a: 1}, {a: 1}, [1], [1]];
	
    // How JSON.stringify managing the Number and strings
    // JSON.stringify(1)
    // '1'
    // JSON.stringify("1")
    // '"1"'
    // JSON.parse('1')
    // 1
    // JSON.parse('"1"')
    // '1'
	
    console.assert(JSON.stringify(findUnique(arr10)) === JSON.stringify([1, '1', {a: 1}, [1]]), 'Test Case 10 Failed');

    console.log('All test cases passed!');
}

// Run the test function
testFindUnique();


// Test cases
function testSpecialPythagoreanTriplets() {
    // Test Case 1
    console.assert(JSON.stringify(specialPythogorianTriplets(12)) === JSON.stringify([[3, 4, 5]]), 'Test Case 1 Failed');
    
    // Test Case 2
    console.assert(JSON.stringify(specialPythogorianTriplets(30)) === JSON.stringify([[5, 12, 13]]), 'Test Case 2 Failed');

    // Test Case 3
    console.assert(JSON.stringify(specialPythogorianTriplets(70)) === JSON.stringify([[20, 21, 29]]), 'Test Case 3 Failed');

    // Test Case 4
    console.assert(JSON.stringify(specialPythogorianTriplets(15)) === JSON.stringify([]), 'Test Case 4 Failed');

    // Test Case 5
    console.assert(JSON.stringify(specialPythogorianTriplets(5)) === JSON.stringify([]), 'Test Case 5 Failed');

    // Test Case 6
    console.assert(JSON.stringify(specialPythogorianTriplets(100)) === JSON.stringify([]), 'Test Case 6 Failed');

    // Test Case 7
    console.assert(JSON.stringify(specialPythogorianTriplets(120)) === JSON.stringify([[20, 48, 52]]), 'Test Case 7 Failed');

    // Test Case 8
    console.assert(JSON.stringify(specialPythogorianTriplets(60)) === JSON.stringify([[10, 24, 26]]), 'Test Case 8 Failed');
    
    // Test Case 9
    console.assert(JSON.stringify(specialPythogorianTriplets(84)) === JSON.stringify([[12,35,37]]), 'Test Case 9 Failed');

    console.log('All test cases passed!');
}

// Run the test function
testSpecialPythagoreanTriplets();




