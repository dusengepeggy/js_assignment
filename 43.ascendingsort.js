function sortArray(arr){

    var sortedArr= arr.sort((a,b)=>a-b);
     
    return sortedArr;

}
console.log(sortArray([12,34,5,6,9,59,3,2]));