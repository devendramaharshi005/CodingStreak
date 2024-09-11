// approach 1 : 
// using the string representation and making the same length for the comparision.

/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let firstStr = start.toString(2);
    let secondStr = goal.toString(2);

    const fl=firstStr.length;
    const sl= secondStr.length;

     

    if(fl > sl){    
        console.log("first")
        secondStr=Array(fl-sl).fill(0).join("")+secondStr;
    }
    else{
        console.log("second")
        firstStr=Array(sl-fl).fill(0).join("")+firstStr;
    }

    let flips=0;
    for(let i=0; i<firstStr.length; i++){
        if(firstStr[i]!==secondStr[i]){
            flips++;
        }
    }

    return flips;
};



// approach 2:
// using the xor and right shift.
var minBitFlips = function (start, goal) {
    let val = start ^ goal;
  
    let count=0;
    while(val!==0){
      count += val & 1;
      val>>=1;
    }
    return count;
  };