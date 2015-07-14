function removeDuplicates(link){
  var dict = {};
  //unique
  var last;
  while(link){
    if(typeof dict[link.value()] == 'undefined')
      dict[link.value()] = true;
    //duplicate
    else{
      last.next = link.next;
    }
    last = link;
    link = link.next;
  }
}

function removeDuplicatesWithoutBuffer(link){
  while(link !== undefined){
    var comp = link.next;
    while(comp !== undefined){
      if(link.value == comp.value){
        comp.value = comp.next.value;
        if(typeof comp.next.next != 'undefined')
          comp.next = comp.next.next;
        else
          comp.next = undefined;
      }
      else{
        comp = comp.next;
      }
    }
  }
}