// the number of trailing zeros in a factorial will never be less than the
// number of trailing zeros in the previous factorial

// we can store the factorial in two parts: numbers that do not include the
// trailing zeros and the number of trailing zeros

function numOfTrailingZerosInFactorial(n){
  if(n < 1)
    return undefined;
  var valueNotIncludingTrailingZeros = 1;
  var numberOfTrailingZeros = 0;
  for(var i = 1; i <= n; i++){
    valueNotIncludingTrailingZeros *= n;
    while(valueNotIncludingTrailingZeros % 10 === 0){
      numberOfTrailingZeros++;
      valueNotIncludingTrailingZeros /= 10;
    }
  }
  return numberOfTrailingZeros;
}

