function numberMax(a, b){
  while(a && b){
    a--;
    b--;
  }
  return a|b;
}