function ascSortCheck(arr) {
    var n=[... new Set(arr)];

    if(n===arr){
        return "Array is in ascending order"
       }
       else{
        return "Array not in ascending order"
       }
        

    
}
console.log(ascSortCheck([1,3,4,5,6,66,400]));