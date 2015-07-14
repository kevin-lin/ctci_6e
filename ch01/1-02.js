function isPermutation(a, b){
  var dict = {};
  for(var i = 0; i < a.length && i < b.length; i++){
    var ac = a[i];
    var bc = b[i];
    if (typeof dict[ac] == 'undefined')
      dict[ac] = 0;
    if (typeof dict[bc] == 'undefined')
      dict[bc] = 0;
    dict[ac]++;
    dict[bc]--;
  }

  for (var key in dict){
    if (dict.hasOwnProperty(key))
      if (dict[key] !== 0)
        return false;
  }
  return true;
}