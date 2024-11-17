function sumAmicableNum(n) {
  const map={};
  for(let i=1; i<=n; i++)
  {
     map[i]=findTotalofDivisors(i);
  }

  let sumAmicable=0;

  for(let i=1; i<=n; i++){
    const curr = map[i];
    if (curr !== i && curr<n && map[curr] === i) {
      sumAmicable += i;
    }
  }

  return sumAmicable;
   
}

sumAmicableNum(1000);


function findTotalofDivisors(n){
  const sqrt_n = n**0.5;
  let divisors=1

  for(let i =2; i< sqrt_n+1;i++ ){
      if(n%i === 0){
        divisors+=i

        if(n/i !== i){
          divisors+=parseInt(n/i)
        }
      }
      
  }

  return divisors;
}