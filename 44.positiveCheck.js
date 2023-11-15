function checkPos(arr) {
    var n=0;
    for (let i = 0; i < arr.length; i++) {
        if( arr[i]>0){
            n++;
        }
        
    }
    if(n===arr.length){
        return "Positive array";
    }
    else{
        return "not all are positive";
    }
    
}
console.log(checkPos([12,34,5,6,767,-5]));
