// // dynamic problem solving
function maximumPathSumI(triangle) {
// start with  second last of the row and step by step go to the 0 th row
for(let row=triangle.length -2; row>=0; row--){
  for(let col = 0; col <= row; col++ ){
    triangle[row][col]+=Math.max( triangle[row+1][col],  triangle[row+1][col+1])
  }
}

return triangle[0][0];
}