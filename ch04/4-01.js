// since it is directed, it is possible for there to be a route one way but not the other
// lets assume each node has a links[] array containing all nodes it points to

function isThereARoute(a, b){
  return helper(a, b, a, b);
}

// a and b will be the original end point nodes.
function helper(a, b, x, y){
  if (x == b || y == a)
    return true;
  var i;
  for(i = 0; i < x.links.length; i++)
    if(helper(a, b, x.links[i], y))
      return true;
  for(i = 0; i < y.links.length; i++)
    if(helper(a, b, x, y.links[i]))
      return true;
  return false;
}