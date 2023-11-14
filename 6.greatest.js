
// 6.function that recieves an array and returns the greates value inside that array
function greatest(arr){
   var sorted= arr.sort((a,b)=>b-a);
    return sorted[0];

}
console.log( greatest([1,2,3,4,5]));