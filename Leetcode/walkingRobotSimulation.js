/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    const Obstacleset = new Set(obstacles.map((e)=>JSON.stringify(e)))

    let maxSum = 0;
    let currentCoordinate = [0,0];
    let direction = [0,1];

    commands.forEach((e)=>{
        if(e === -1){
            direction = turnRight(direction)
        }

        if(e === -2){
            direction = turnLeft(direction)
        }

        if(e > 0 && e <10){

           [currentCoordinate, maxSum] =executeCommand(e, currentCoordinate, direction, Obstacleset, maxSum )

        }
    })

    return maxSum; //currentCoordinate.reduce((acc,ele)=>acc+ele*ele,0);
    
};




function executeCommand(commandKey, currentPos, prevDirection, Obstacleset , maxSum){

	const [dirx,diry] = prevDirection;
	let [x,y] = currentPos;

	// if dirx==1 && diry == 0 increase x++	
	// if dirx==-1 && diry == 0 increase x--	
	// if dirx==0 && diry == 1 increase y++	
	// if dirx==0 && diry == -1 increase y--	

	for(let i=1; i<=commandKey; i++){

       if (dirx===1 && diry=== 0) x++;	
	   if (dirx===-1 && diry === 0 ) x--;	
	   if (dirx===0 && diry === 1 ) y++;	
	   if (dirx===0 && diry === -1 ) y--;
	
	   if(Obstacleset.has(JSON.stringify([x,y]))){
         const prevx= x-dirx
         const prevy= y-diry
         maxSum=Math.max(maxSum, prevx*prevx + prevy*prevy)
		return [[prevx,prevy],maxSum];
	   }
	
	 
	
	}
	
    maxSum=Math.max(maxSum, x*x + y*y)

	return [[x,y],maxSum];

}




// it is making the direction to right
function turnRight(prevDirection){
	// +y -> +x
	// +x -> -y
	// -y -> -x
	// -x -> +y
	
	// (0,1) -> (1,0)
	// (1,0) -> (0,-1)
	// (0, -1) -> (-1,0)
	// (-1,0) -> (0,1)

	const [x,y] = prevDirection;
	
	if(x===0 && y===1) return [1,0]
	if(x===1 && y===0) return [0,-1]
	if(x===0 && y===-1) return [-1,0]
	if(x===-1 && y===0) return [0,1]


}

function turnLeft(prevDirection){
	// +y -> -x
	// -x -> -y
	// -y -> +x
	// +x -> +y
	
	// (0,1) -> (-1,0)
	// (-1,0) -> (0, -1)
	// (0, -1) -> (1,0)
	// (1,0) -> (0,1)

	const [x,y] = prevDirection;
	
	if(x===0 && y===1) return [-1,0]
	if(x===-1 && y===0) return [0,-1]
	if(x===0 && y===-1) return [1,0]
	if(x===1 && y===0) return [0,1]



}