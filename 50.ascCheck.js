function ascSortCheck(arr) {
    var n=0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i]>arr[i-1]) {
            n++;
            
        }

    }
    if(n!==0){
        return "Array not in ascending order"
       }
       else{
        return "Array is in ascending order"
       }
        

    
}
console.log(ascSortCheck([1,3,4,5,6,66,400]));
