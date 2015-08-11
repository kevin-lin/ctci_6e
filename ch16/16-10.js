// all people born between 1900 and 2000

// anything after 2000 will have less than the population of 2000

function yearMostAlive(list){
  var yearCount = {};
  var i;
  for(i = 1900; i <= 2000; i+=1){
    yearCount[i] = 0;
  }
  for(i = 0; i < list.length; i+=1){
    var person = list[i];
    for(var year = person.born; year <= person.death; year+=1){
      yearCount[year] += 1;
    }
  }
  var ans = 0;
  for(i = 1900; i <= 2000; i+=1){
    if(yearCount[i] > ans)
      ans = yearCount[i];
  }
  return ans;
}