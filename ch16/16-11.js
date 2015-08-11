//brute force recursive method

//doesn't matter what order we construct the board in
//only thing that matters is number of short & number of long

function allLengths(shortLength, longLength, count){
  var ans = [];
  var shortCount;
  var longCount;
  for(var i = 0; i <= count; i++){
    shortCount = i;
    longCount = count - i;
    ans.push(shortCount*shortLength + longCount*longLength);
  }
  return ans;
}

//how much do we gain by swapping a short for a long?
function allLengthsFaster(shortLength, longLength, count){
  var ans = [];
  var length = shortLength * count;
  var diff = longLength - shortLength;
  for(var i = 0; i <= count; i+=1){
    ans.push(length + i*diff);
  }
  return ans;
}