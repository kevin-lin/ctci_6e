function multiply(a, b) {
  ans = 0;
  for(var i = 0; i < Math.abs(b); i += 1)
    ans += a;
  if(b < 0)
    return -ans;
  return ans;
}

function divide(a, b) {
  var negCount = 0;
  if(a < 0)
    negCount += 1;
  if(b < 0)
    negCount += 1;
  negCount = negCount % 2;
  a = Math.abs(a);
  b = Math.abs(b);
  var ans = 0;
  while(a > 0){
    a = subtract(a, b);
    ans += 1;
  }
  if(negCount == 1)
    return -ans;
  return ans;
}

function subtract(a, b) {
  ans = 0;
  if(b < a){
    while(b < a){
      b += 1;
      ans += 1;
    }
    return ans;
  }
  if(a < b){
    while(a < b){
      a += 1;
      ans += 1;
    }
    return -ans;
  }
}