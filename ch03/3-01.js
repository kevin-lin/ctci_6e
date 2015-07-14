// elements of the array will alternate between stack a, b, and c
// use elements 0,1,2 to store values of stack index;

var arr = [0,1,2];

function push(abc, val){
  var i;
  if (abc == 'a'){
    arr[0] += 3;
    i = arr[0];
  }
  else if (abc == 'b'){
    arr[1] += 3;
    i = arr[1];
  }
  else if (abc == 'c'){
    arr[2] += 3;
    i = arr[2];
  }
  arr[i] = val;
}

function pop(abc){
  var i;
  if (abc == 'a'){
    i = arr[0];
    arr[0] -= 3;
  }
  else if (abc == 'b'){
    i = arr[1];
    arr[1] -= 3;
  }
  else if (abc == 'c'){
    i = arr[2];
    arr[2] -= 3;
  }
  var ans = arr[i];
  arr[i] = undefined;
  return ans;
}