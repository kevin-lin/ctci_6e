function wordFrequency(book){
  var dictionary = {};
  for (var i = 0; i < book.length; i++){
    if(typeof dictionary[book[i]] == "undefined")
      dictionary[book[i]] = 0;
    else
      dictionary[book[i]] += 1;
  }
}