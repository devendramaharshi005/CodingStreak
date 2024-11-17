function namesScores(arr) {
  arr.sort((a,b)=>{
    if(a > b){
      return 1;
    }
    else if(b < a){
      return -1;
    }
    else{
      return 0;
    }
  })

  const count =(ele)=>{
  let c=0;
  for(let i=0; i<ele.length; i++){
    c+=ele.charCodeAt(i)-64;
  }
  return c;
}
  
  const ans= arr.reduce((acc,ele,index)=>acc+count(ele)*(index+1),0);
  console.log(ans)
  return ans;
}



// Only change code above this line
const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

namesScores(test1);