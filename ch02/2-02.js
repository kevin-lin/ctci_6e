function kToLast(node, k){
  trail = node;
  for(var i = 0; i < k; i++){
    if(typeof node.next == 'undefined')
      throw "linked list is shorter than k elements long";
    node = node.next;
  }
  while(node.next !== undefined){
    node = node.next;
    trail = trail.next;
  }
  return trail;
}