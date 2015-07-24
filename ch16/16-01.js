function numberSwapper(a, b){
  a ^= b;
  b ^= a;
  a ^= b;
}