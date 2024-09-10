// Problem 15: Lattice paths

// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
// a diagram of 6 2 by 2 grids showing all the routes to the bottom right corner

// How many such routes are there through a given gridSize?
// Tests

// Waiting: 1. latticePaths(4) should return a number.
// Waiting: 2. latticePaths(4) should return 70.
// Waiting: 3. latticePaths(9) should return 48620.
// Waiting: 4. latticePaths(20) should return 137846528820.





function latticePaths(x, y , k){
	
	if(x<0 || y<0 || x >k || y>k){
		return 0;
	}

	let count =0;
	
	if(x === k && y===k){
		return count + 1;
	}

	// go to all possible directions.
	
	//x+1
	 count  + latticePaths(x+1, y , k)
		
	//y+1
	count + latticePaths(x, y+1 , k)

	return count;


}


const startingPosition = [0,0]
const [x,y] = startingPosition;
console.log("latticePath", latticePaths(x, y, 2))















