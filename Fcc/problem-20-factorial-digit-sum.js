function sumFactorialDigits(n) {

  const fact = findFactorial(BigInt(n))
  console.log(fact)
  return fact.toString().split("").reduce((acc,ele)=>acc+parseInt(ele),0)
}

function findFactorial(n){
    if(n === 0n) return 1n;
   return BigInt(n)*findFactorial(n-1n)
}

sumFactorialDigits(100);