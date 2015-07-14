function uniqueChars(str){
  var dict = {};
  for(var i = 0; i < str.length; i++){
    var c = str[i];
    if(typeof dict[c] == "undefined")
      dict[c] = 1;
    else
      dict[c]++;
  }

  for(var key in dict){
    if(dict.hasOwnProperty(key))
      if(dict[key] !== 0)
        return false;
  }
  return true;
}

function uniqueCharsNoDataStructure(str){
  for(var i = 0; i < str.length; i++){
    for(var j = i+1; j < str.length; j++){
      if(str[i] == str[j])
        return false;
    }
  }
  return true;
}