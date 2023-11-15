function deleteDup(arr){
    var set=[];
  set=[... new Set (arr)];
    return set;
}
console.log( deleteDup(['a','b','p','c','d','c']));