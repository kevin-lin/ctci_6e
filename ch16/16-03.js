function intersection(a, b){
  var slopeA = (a.end.y - a.start.y)/(a.end.x - a.start.x);
  var slopeB = (b.end.y - b.start.y)/(b.end.x - b.start.x);
  var YInterceptA = a.start.y - a.start.x * slopeA;
  var YInterceptB = b.start.y - b.start.x * slopeB;
  if(slopeA == slopeB){
    if(YInterceptA == YInterceptB)
      return undefined;
    else{
      if(a.end.x < b.start.x || a.end.y < b.start.y)
        return undefined;
      else{
        var line = {
          start: {
            x: b.start.x,
            y: b.start.y
          },
          end: {
            x: a.end.x,
            y: a.end.y
          }
        };
      }
    }
  }
  var x = (YInterceptB - YInterceptA) / (slopeA - slopeB);
  var y = x * slopeA + YInterceptA;
  if(a.start.x <= x && x <= a.end.x &&
     b.start.x <= x && x <= b.end.x &&
     a.start.y <= y && y <= a.end.y &&
     b.start.y <= y && y <= b.end.y)
    return {"x": x, "y": y};
  else
    return undefined;
}