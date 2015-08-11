// array 
function closestPairs(a, b){
  a.sort();
  b.sort();
  var i = 0;
  var j = 0;
  var leastDifference = 9999999;
  var pair;

  while(i < a.length && j < b.length){
    var diff = Math.abs(a[i] - b[j]);
    if(diff < leastDifference){
      leastDifference = diff;
      pair = [a[i], b[j]];
    }
    if(a[i] < b[j])
      i++;
    else
      j++;
  }
}