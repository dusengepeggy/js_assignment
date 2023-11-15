function toCapitalArray(arr){
    var cap=[];
    for (let i = 0; i < arr.length; i++) {
        cap[i] = arr[i].toUpperCase();
        
    }
    return cap;
   
}
console.log("the capitalised word :",toCapitalArray(["Peggy","ddf","fish"]));